import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "remixicon/fonts/remixicon.css";
import "./assets/styles/main.css";
import { Routes, Route } from "react-router-dom";
import Protected from "./utils/Protected";
import {
  Home,
  Flight,
  Auth,
  NotFound, Tickets,
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
      <Route path="/flight" element={<Flight />}></Route>
      <Route path="/flight/search" element={<Tickets />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
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
