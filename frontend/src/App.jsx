import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import SmjeroviPregled from './pages/smjerovi/SmjeroviPregled'
import SmjeroviDodaj from './pages/smjerovi/SmjeroviDodaj'
import SmjeroviPromjena from './pages/smjerovi/SmjeroviPromjena'
import moment from 'moment'



function App() {

  function trenutnaGodina(){
    return moment().year();
  }

  return (
    <>
      <Container>
        <NavBarEdunova />
        
        <Routes>
          <Route path={RouteNames.HOME} element={<Pocetna />} />
          <Route path={RouteNames.SMJER_PREGLED} element={<SmjeroviPregled />} />
          <Route path={RouteNames.SMJER_NOVI} element={<SmjeroviDodaj />} />
          <Route path={RouteNames.SMJER_PROMJENA} element={<SmjeroviPromjena />} />
        </Routes>

        <hr />
        Luka {trenutnaGodina()}
      </Container>
     
    </>
  )
}

export default App
