import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleThemeContextProvider from './context/ToggleThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleThemeContextProvider>
      <App />
    </ToggleThemeContextProvider>
  </StrictMode>,
)
