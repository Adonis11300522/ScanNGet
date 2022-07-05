import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/home";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import OfferPage from "./pages/offer";
import LoyaltyPage from "./pages/loyalty";
import { AuthPage } from "./pages/auth";
import OfferDetailPage from "./pages/offer/detail";
import LoyaltyDetailPage from "./pages/loyalty/detail";
import Flyers from "./pages/flyer";

function App() {
  
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/offers" element={<OfferPage/>} />
       <Route path="/offers/detail" element={<OfferDetailPage/>} />
       <Route path="/loyalties" element={<LoyaltyPage/>} />
       <Route path="/loyalties/detail" element={<LoyaltyDetailPage/>} />
       <Route path="/login" element={<AuthPage/>} />
       <Route path="/flyers" element={<Flyers/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
