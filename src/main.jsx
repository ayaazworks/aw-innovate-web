import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* MAKE SURE THERE IS NO <BrowserRouter> or <Router> HERE */}
    <App /> 
  </React.StrictMode>,
)