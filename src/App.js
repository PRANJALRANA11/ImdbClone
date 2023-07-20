import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { Home_url, Popular_Movies_url, Top_Rated_Movies_url, Upcoming_Movies_url } from "./constants/Routepath";
import Header from "./Components/Header";

function App() {
  return (
    <>
       <Router>
        <Header/>
        <Routes>
          <Route path={Home_url} element={<Home />}>
          </Route>
          <Route path={Popular_Movies_url} element={<Category />}>
          </Route>
          <Route path={Top_Rated_Movies_url} element={<Category />}>
          </Route>
          <Route path={Upcoming_Movies_url} element={<Category />}>
          </Route>
          <Route path="*" element={<Home />}>
          </Route>
        </Routes>
       </Router>
    </>
  );
}

export default App;
