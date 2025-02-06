import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { FormPage } from './pages/FormPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={LoginPage} />
      <Route path="/home" Component={HomePage} />
      <Route path="/form" Component={FormPage} />
    </Routes>
  </BrowserRouter>
)
