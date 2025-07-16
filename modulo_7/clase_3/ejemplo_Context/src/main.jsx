import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './contexts/Provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Paso 3. Poner el provider en la aplicación en el nível deseado */}
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
