import { Squash as Hamburger } from "hamburger-react";
import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "./Nav";

const MainMenu = () => {
  const [isToggled, setIsToggled] = useOutletContext();


  const { totalItems: totalUser } = useSelector((state) => state.user);
  const { totalItems: totalTranslations } = useSelector(
    (state) => state.transaction
  );
  const { totalItems: totalTicket } = useSelector((state) => state.ticket);
  const { totalItems: totalPromo } = useSelector((state) => state.promo);
  return (
    <div id="page-content-wrapper">
      <Nav
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        title={"Dashboard"}
      />

      <div className="container-fluid px-4">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{totalTicket}</h3>
                <p className="fs-5">Ticket</p>
              </div>
              <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{totalTranslations}</h3>
                <p className="fs-5">Transaction</p>
              </div>
              <i className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{totalPromo}</h3>
                <p className="fs-5">Promo</p>
              </div>
              <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{totalUser}</h3>
                <p className="fs-5">User</p>
              </div>
              <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
