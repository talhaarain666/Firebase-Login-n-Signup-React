import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePg from "../../pages/home";
import Signup from "../../pages/signup";
import Login from "../../pages/login";

export default function AppRouting() {
  return (
    <Router>
  
        <Routes>
         <Route path="/:id" element={<HomePg />} />
         <Route path="signup" element={<Signup />} />
         <Route path="login" element={<Login />} />
         <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
  
    </Router>
  );
}