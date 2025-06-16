import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './presentation/pages/LoginPage'
import MedicosPage from './presentation/pages/MedicosPage'
import PacientesPage from './presentation/pages/PacientesPage'
import ServiciosPage from './presentation/pages/ServiciosPage'
import PaquetesPage from './presentation/pages/PaquetesPage'
import React from 'react'
import TurnoPage from './presentation/pages/TurnoPage'
import ConsultaPage from './presentation/pages/ConsultaPage'
import FacturacionPage from './presentation/pages/FacturacionPage'
import Error404 from './presentation/pages/Error404Page'

import Header from '@/presentation/shared/components/header'


function App() {

  return (
    <>
        <Header />
      <Routes>
        <Route path='/' element={<Login to='/login' replace />} />
        <Route path='/login' element={<Login />} />

        {/* Demas Rutas  */}
        <Route path='/medicos' element={<MedicosPage />} />
        <Route path='/pacientes' element={<PacientesPage />} />
        <Route path='/servicios' element={<ServiciosPage />} />
        <Route path='/paquetes' element={<PaquetesPage />} />
        <Route path='/turno' element={<TurnoPage />} />
        <Route path='/consulta' element={<ConsultaPage />} />
        <Route path='/facturacion' element={<FacturacionPage />} />
        {/* Error 404  */}

        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
