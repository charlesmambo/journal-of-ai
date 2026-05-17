import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Archive from './pages/archive/Archive'
import Subs from './pages/submission/Subs'
import Guide from './pages/guides/Guide'

function App() {

  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/submissions" element={<Subs />} />
        <Route path="/guidelines" element={<Guide />} />
      </Routes>

      <Footer />
    </Router>
    </>
  )
}

export default App
