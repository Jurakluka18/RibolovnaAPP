import { useEffect, useState } from "react"
import RibaService from "../../services/RibaService"
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function RibePregled(){

    const[ribe, setRibe] = useState();
    const navigate = useNavigate();

    async function dohvatiRibe(){
        const odgovor = await RibaService.get()
        setRibe(odgovor)
    }

    // hooks (kuka) se izvodi prilikom dolaska na stranicu Smjerovi
    useEffect(()=>{
        dohvatiRibe();
    },[])


    

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return;
        }
        brisanjeRibe(sifra);
    }

    async function brisanjeRibe(sifra) {
        const odgovor = await RibaService.obrisi(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka);
            return;
        }
        dohvatiRibe();
    }


    return(
        <>
        <Link
        to={RouteNames.RIBA_NOVI}
        className="btn btn-success siroko"
        >Dodaj novu ribu</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    
                </tr>
            </thead>
            <tbody>
                {ribe && ribe.map((riba,index)=>(
                    <tr key={index}>
                        <td>
                            {riba.naziv}
                        </td>
                        
                       
                        <td>
                            <Button
                            onClick={()=>navigate(`/ribe/${riba.sifra}`)}
                            >Promjena</Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button
                            variant="danger"
                            onClick={()=>obrisi(riba.sifra)}
                            >Obriši</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )


}