import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import AboutSector71 from './pages/AboutSector71'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-sector71" element={<AboutSector71 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
