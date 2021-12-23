import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter, Routes, Route
  
} from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { NavBar } from "./component/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route exact path="Home" element={<Home/>} />
    <Route exact path="AboutUs" element={<AboutUs/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
