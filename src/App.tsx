import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Main from './Layouts/Main/Main';



function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/main" element={<Main />} />

      </Routes>
  </Router>
   
  );
}

export default App;
