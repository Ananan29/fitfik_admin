import { useState } from "react"
import "./App.css"
import Navigationbar from "./components/Navigationbar";
import {ToastContainer,toast} from "react-toastify"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {


  return (
    <>
      <Navigationbar/>
      <Router>
      
      {/* <Routes>
        <Route path="/" element={<>
          <Homebanner1/>
      <Homebanner2/>
      </>}/>
      
        <Route path="/workout/:type" element={<Page/>}/>
      </Routes> */}
      <ToastContainer/>
    </Router>
    </>
  )
}

export default App
