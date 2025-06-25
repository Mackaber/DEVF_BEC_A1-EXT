import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Paso 1: importar BrowserRouter de react-router-dom
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import RoutesIndex from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  // Paso 2: envolver la App con BrowserRouter
  <BrowserRouter>
    <StrictMode>
      <RoutesIndex />
    </StrictMode>
  </BrowserRouter>,
)
