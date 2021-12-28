import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter, Routes, Route
  
} from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Login } from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/AboutUs" element={<AboutUs/>} />
    <Route exact path="/Login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
