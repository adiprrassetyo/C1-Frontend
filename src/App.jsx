import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'remixicon/fonts/remixicon.css'
import "./assets/styles/main.css";
import { Routes, Route } from "react-router-dom";
import { Home, Flight, Auth, NotFound, Tickets, Profile } from "./pages";
import Protected from "./utils/Protected";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/account/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
