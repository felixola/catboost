import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Main from './Layouts/Main/Main';
import Api from './Pages/Apis/Api';
import Doc from './Pages/Documentation/Doc';
import Student from './Pages/Students/Student';
import Business from './Pages/Business/Business';



function App() {

  return (

    <Router>

      <Main />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/main" element={<Main />} />

        <Route path="/doc" element={<Doc/>} />

        <Route path="/api" element={<Api />} />

        <Route path="/student" element={<Student />} />

      </Routes>
  </Router>
   
  );
}

export default App;
