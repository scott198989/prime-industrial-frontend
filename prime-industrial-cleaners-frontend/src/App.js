import React from 'react'
// Pages Imports
import Footer from './components/Footer'
import Header from './components/Header'
// Components Imports
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
// Stles Imports
import './styles/Footer.scss'
import './styles/Header.scss'
import './styles/AboutUs.scss'
import './styles/ContactUs.scss'
import './styles/Home.scss'
import './styles/App.scss'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
