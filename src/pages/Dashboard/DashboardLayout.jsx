import React, { useState } from "react";
import { Image } from "react-bootstrap";
import {
  Box2HeartFill,
  BoxArrowLeft,
  GridFill,
  PeopleFill,
  TicketDetailedFill,
  WalletFill,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/binair-blue-logo.svg";
import "../../assets/styles/dashboard.css";
import { logout } from "../../redux/slices/authSlice";

const DashboardLayout = () => {
  const [isToggled, setIsToggled] = useState(true);
  let { pathname } = useLocation();
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const location = pathname.split("/")[2];
  console.log(location);

  return (
    <>
      <div className={isToggled ? "d-flex" : "d-flex toggled"} id="wrapper">
        {/* Sidebar */}
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <Image src={Logo} />
          </div>
          <div className="list-group list-group-flush my-3">
            <Link
              to={""}
              className={
                !location
                  ? "list-group-item list-group-item-action bg-transparent second-text active d-flex align-items-center"
                  : "list-group-item list-group-item-action bg-transparent second-text d-flex align-items-center"
              }
            >
              <GridFill className="me-2" />
              <p style={{ display: "flex", margin: 0, padding: 0 }}>
                Dashboard
              </p>
            </Link>
            <Link
              to={"users"}
              className={
                location === "users"
                  ? "list-group-item list-group-item-action bg-transparent second-text active d-flex align-items-center"
                  : "list-group-item list-group-item-action bg-transparent second-text d-flex align-items-center"
              }
            >
              <PeopleFill className="me-2" />
              <p style={{ display: "flex", margin: 0, padding: 0 }}>Users</p>
            </Link>
            <Link
              to={"tickets"}
              className={
                location === "tickets"
                  ? "list-group-item list-group-item-action bg-transparent second-text active d-flex align-items-center"
                  : "list-group-item list-group-item-action bg-transparent second-text d-flex align-items-center"
              }
            >
              <TicketDetailedFill className="me-2" />
              <p style={{ display: "flex", margin: 0, padding: 0 }}>Tickets</p>
            </Link>
            <Link
              to={"promos"}
              className={
                location === "promos"
                  ? "list-group-item list-group-item-action bg-transparent second-text active d-flex align-items-center"
                  : "list-group-item list-group-item-action bg-transparent second-text d-flex align-items-center"
              }
            >
              <Box2HeartFill className="me-2" />
              <p style={{ display: "flex", margin: 0, padding: 0 }}>Promos</p>
            </Link>
            <Link
              to={"transactions"}
              className={
                location === "transactions"
                  ? "list-group-item list-group-item-action bg-transparent second-text active d-flex align-items-center"
                  : "list-group-item list-group-item-action bg-transparent second-text d-flex align-items-center"
              }
            >
              <WalletFill className="me-2" />
              <p style={{ display: "flex", margin: 0, padding: 0 }}>
                Transactions
              </p>
            </Link>
            <Link
              onClick={() => {
                // setDataUser({});
                dispatch(logout());
              }}
              className="list-group-item list-group-item-action bg-transparent text-danger fw-bold d-flex align-items-center"
            >
              <BoxArrowLeft className="me-2" />
              <p style={{ display: "flex", margin: 0, padding: 0 }}>Logout</p>
            </Link>
          </div>
        </div>
        {/* /#sidebar-wrapper */}

        {/* Page Content */}
        <Outlet context={[isToggled, setIsToggled]} />
      </div>
      {/* /#page-content-wrapper */}
    </>
  );
};

export default DashboardLayout;
