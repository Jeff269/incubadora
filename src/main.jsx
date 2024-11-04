import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import Concursos from './pages/incubadora/concursos/Concursos.jsx'
import Equipos from './pages/incubadora/equipos/Equipos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/incubadora' element={<AuthLayout />}>
          <Route path='concursos' element={<Concursos />} />
          <Route path='equipos' element={<Equipos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
