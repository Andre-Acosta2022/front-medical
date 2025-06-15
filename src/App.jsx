import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './presentation/pages/LoginPage'

function App() {

  return (
    <>
  <Routes>
    <Route path='/' element={<Login to='/login' replace />} />
    <Route path='/login' element={<Login />} />
  </Routes>
    </>
  )
}

export default App
