import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "remixicon/fonts/remixicon.css";
import "./assets/styles/main.css";
import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import Protected from "./utils/Protected";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { logout } from "./redux/slices/authSlice";
import {
  Home,
  Flight,
  Auth,
  NotFound,
  Tickets,
  DashboardLayout,
  MainMenu,
  PromosMenu,
  TicketsMenu,
  TransactionsMenu,
  UsersMenu,
  Promo,
  DetailPromo,
  Reset,
  Profile,
  Password,
  Passenger,
  Order,
  Detail,
  Whislist
} from "./pages";

const App = () => {
  const dispatch = useDispatch();
  //fungsi gae get token
  const token = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).token
    : null;
  const isTokenExpired = (token) => {
    // Mendekode token menggunakan jwtDecode
    const decoded = jwtDecode(token);

    // Mengambil waktu saat ini
    const currentTime = Date.now().valueOf() / 1000;

    // Jika waktu saat ini lebih besar dari waktu kedaluwarsa token,
    // maka token sudah kedaluwarsa
    if (currentTime > decoded.exp) {
      return true;
    }

    return false;
  };

  //fungsi gae cek token exp

  useEffect(() => {
    if (token) {
      const isExp = isTokenExpired(token);
      if (isExp) {
        dispatch(logout());
      }
    }
  }, []);

  //fungsi gae logout lk token exp

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight" element={<Flight />}></Route>
          <Route path="/flight/search" element={<Tickets />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/promo/view/:promoId" element={<DetailPromo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<DashboardLayout />}> 
            <Route path="" element={<MainMenu />} />
            <Route path="promos" element={<PromosMenu />} />
            <Route path="tickets" element={<TicketsMenu />} />
            <Route path="transactions" element={<TransactionsMenu />} />
            <Route path="users" element={<UsersMenu />} />
          </Route>
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/password" element={<Password />} />
          <Route path="/account/passenger" element={<Passenger />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/tickets" element={<Detail />} />
          <Route path="/account/whislist" element={<Whislist />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
