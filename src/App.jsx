import { useState } from "react"
import "./App.css"
import Navigationbar from "./components/Navigationbar";
import {ToastContainer,toast} from "react-toastify"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from './adminauth/register/page';
import LoginPage from './adminauth/login/page';
import Addworkoutpage from './pages/addworkout/page';
// import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./components/Contact/Contact"
function App() {


  return (
    <BrowserRouter>
      <Navigationbar/>
      <Routes>
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/addworkout" element={<Addworkoutpage/>} />
          <Route path="/contact" element={<Contact/>} />

      </Routes>
      {/* <Router> */}
      
      {/* <Routes>
        <Route path="/" element={<>
          <Homebanner1/>
      <Homebanner2/>
      </>}/>
      
        <Route path="/workout/:type" element={<Page/>}/>
      </Routes> */}
      <ToastContainer/>
    {/* </Router> */}
    </BrowserRouter>
  )
}

export default App
