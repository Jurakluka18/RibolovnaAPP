import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import RibaService from "../../services/RibaService";
import { useEffect, useState } from "react";


export default function RibePromjena(){

    const navigate = useNavigate();
    const [riba,setRiba] = useState({});

    const routeParams = useParams();

    async function dohvatiRibu(){
        const odgovor = await RibaService.getBySifra(routeParams.sifra)
        setRiba(odgovor)
       
    }

    useEffect(()=>{
        dohvatiRibu();
    },[])

    async function promjena(riba){
        const odgovor = await RibaService.promjena(routeParams.sifra,riba);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        navigate(RouteNames.RIBA_PREGLED)
    }

    function odradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server pa standardnom načinu

        let podaci = new FormData(e.target);

        promjena(
            {
                naziv: podaci.get('naziv')
               
            }
        );
    }

    return(
    <>
    Promjena ribe
    <Form onSubmit={odradiSubmit}>

        <Form.Group controlId="naziv">
            <Form.Label>Naziv</Form.Label>
            <Form.Control type="text" name="naziv" required 
            defaultValue={riba.naziv}/>
        </Form.Group>

        
        <hr/>

        <Row>
            <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                <Link
                to={RouteNames.RIBA_PREGLED}
                className="btn btn-danger siroko"
                >Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                <Button variant="success" type="submit" className="siroko">
                    Promjeni ribu
                </Button>
            </Col>
        </Row>


    </Form>




   
    </>
    )
}