import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferPage from "./pages/offer";
import LoyaltyPage from "./pages/loyalty";


function App() {
  
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/offers" element={<OfferPage/>} />
       <Route path="/loyalties" element={<LoyaltyPage/>} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
