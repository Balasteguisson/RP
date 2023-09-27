import { Route, Routes } from 'react-router-dom'

//Pages
import LoginPage from '../pages/LoginPage.jsx'
import LandingPage from '../pages/LandingPage.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/landing' element={<LandingPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
