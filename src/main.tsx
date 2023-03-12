import AppRoutes from '@routes/AppRoutes'
import React from 'react'
import ReactDOM from 'react-dom/client'
import '@assets/css/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
