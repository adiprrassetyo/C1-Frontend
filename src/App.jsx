import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/styles/main.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Flight,
  Auth,
  DashboardLayout,
  MainMenu,
  PromosMenu,
  TicketsMenu,
  TransactionsMenu,
  UsersMenu,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="" element={<MainMenu />} />
        <Route path="promos" element={<PromosMenu />} />
        <Route path="tickets" element={<TicketsMenu />} />
        <Route path="transactions" element={<TransactionsMenu />} />
        <Route path="users" element={<UsersMenu />} />
      </Route>
    </Routes>
  );
};

export default App;
