import { Route, Routes } from 'react-router-dom'

//Pages
import LoginPage from '../pages/LoginPage.jsx'
import LandingPage from '../pages/LandingPage.jsx'
import ConsultPage from '../pages/ConsultPage.jsx'
import PatientPage from '../pages/PatientPage.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/landing' element={<LandingPage />}></Route>
        <Route path='/consulta' element={<ConsultPage />}></Route>
        <Route path='/paciente' element={<PatientPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
