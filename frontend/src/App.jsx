import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import RibePregled from './pages/ribe/RibePregled'
import RibeDodaj from './pages/ribe/RibeDodaj'
import RibePromjena from './pages/ribe/RibePromjena'
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
          <Route path={RouteNames.RIBA_PREGLED} element={<RibePregled />} />
          <Route path={RouteNames.RIBA_NOVI} element={<RibeDodaj />} />
          <Route path={RouteNames.RIBA_PROMJENA} element={<RibePromjena />} />
        </Routes>

        <hr />
        Luka {trenutnaGodina()}
      </Container>
     
    </>
  )
}

export default App
