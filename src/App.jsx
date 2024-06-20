import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Favs from './Pages/Favs'
import Contact from './Pages/Contact'
import Header from './Components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}
