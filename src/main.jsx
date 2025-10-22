import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} basename="/Projeto-15.Cadastro-de-usuarios" />
    <GlobalStyles />
  </React.StrictMode>,
)
