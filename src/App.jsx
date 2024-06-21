// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Favs from './Pages/Favs';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import { GlobalProvider } from './Components/utils/global.context';
import './App.css';
import Footer from './Components/Footer';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header /> {/* Header should be outside of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Routes>
        <Footer/>
      </Router>
    </GlobalProvider>
  );
};

export default App;
