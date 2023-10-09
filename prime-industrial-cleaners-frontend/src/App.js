import React from 'react'
import { Routes, Route } from 'react-router-dom'
// Components Imports
import Footer from './components/Footer'
import Header from './components/Header'

// Pages Imports
import NotFound from './pages/NotFound'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import './styles/App.scss'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Home />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
