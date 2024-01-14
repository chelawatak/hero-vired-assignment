import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AddProgam from './Components/AddProgam';

function App() {
  return (
    <>
        <BrowserRouter>
          <div >
            <Navbar/>
          </div>
          
          <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login"  element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
            <Route exact path="/addprogram" element={<AddProgam/>}></Route>
          </Routes>
          </div>
          

        </BrowserRouter>


    </>
  );
}

export default App;
