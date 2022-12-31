import { Squash as Hamburger } from "hamburger-react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Container, OverlayTrigger, Popover } from "react-bootstrap";
import { BellFill, Check, CircleFill, ThreeDots } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { readAll } from "../../redux/services/notifServices";
import {
  read,
  readAllNotif,
  readOneNotif,
  retriveNotif,
} from "../../redux/slices/notifSlice";

const Nav = ({ isToggled, setIsToggled, title }) => {
  const { user } = useSelector((state) => state.auth);
  const { notif, loading } = useSelector((state) => state.notif);
  const [notifData, setNotifData] = useState(notif);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== "admin" || !token) {
      navigate("/");
    }
  }, [user, token]);

  useEffect(() => {
    if (user) {
      const socket = io("wss://binair-backend-production.up.railway.app");

      socket.emit("create", `${user.id}`);

      socket.on("notify-update", (newdatas) => {
        setNotifData(newdatas);
      });

      socket.on("disconnect", () => {
        console.log("Socket disconnecting");
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(retriveNotif());
    }
  }, [dispatch]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
      <div className="d-flex align-items-center">
        <Container className="bg-white rounded me-2 p-0">
          <Hamburger
            size={22}
            toggled={isToggled}
            toggle={() => {
              setIsToggled(!isToggled);
            }}
            style={{ margin: 0 }}
          />
        </Container>

        <h2 className="fs-4 m-0 text-white">{title}</h2>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            {user && (
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover
                    id="popover-positioned-bottom mt-3"
                    style={{
                      maxHeight: "300px",
                      minHeight: "100px",
                      overflow: "scroll",
                    }}
                  >
                    <Popover.Header
                      as="div"
                      className="bg-white w-100 d-flex justify-content-between align-items-center"
                    >
                      <div className="fw-bold text-black">Notifikasi</div>
                      <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={
                          <Popover id="popover-positioned-bottom ">
                            <Popover.Body className="p-1 m-0">
                              <button
                                className="readAll-btn"
                                onClick={() => {
                                  dispatch(readAllNotif());
                                  dispatch(readAll());
                                  setNotifData(notif);
                                }}
                                style={{
                                  border: 0,
                                  color: "black",
                                  width: "fit-content",
                                  height: "100%",
                                }}
                              >
                                <h6
                                  className=" m-0 p-0 d-flex align-items-center"
                                  style={{ fontSize: "12px" }}
                                >
                                  <Check size="20" />
                                  Tandai semua sebagai telah di baca
                                </h6>
                              </button>
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <div className="dots-btn">
                          <ThreeDots style={{ cursor: "pointer", color: "black" }} />
                        </div>
                      </OverlayTrigger>
                    </Popover.Header>
                    <Popover.Body className="m-0 p-0">
                      {!notifData?.filter((msg) => msg.isRead === false) ? (
                        <div className="d-flex align-items-center notif-msg mb-1">
                          Saat ini tidak ada notifikasi
                        </div>
                      ) : (
                        notifData.map((msg) => {
                          const notifTime = function TimeAgo() {
                            // Ambil waktu dari data Anda
                            const timeFromData = msg.createdAt;

                            // Buat objek Date dari waktu dari data Anda
                            const date = new Date(timeFromData);

                            // Atur bahasa default moment menjadi bahasa Indonesia
                            moment.locale("id");

                            // Buat objek moment dari objek Date yang telah dibuat sebelumnya
                            const timeFromDataMoment = moment(date);

                            // Tampilkan jarak waktu dengan hari ini dalam format "x jam yang lalu" atau "x menit yang lalu"
                            return (
                              <p
                                className="m-0 p-0"
                                style={{ color: "#13A2D7" }}
                              >
                                {timeFromDataMoment.fromNow()}
                              </p>
                            );
                          };
                          return (
                            <div
                              className="d-flex align-items-center notif-msg mb-1"
                              key={msg.id}
                              onClick={() => {
                                dispatch(readOneNotif([msg.id]));
                                dispatch(read([msg.id]));
                                setNotifData(notif);
                              }}
                            >
                              <div className="w-75">
                                <h6 className="mb-1">{msg.message}</h6>
                                {notifTime()}
                              </div>
                              <div className="w-25 d-flex justify-content-center">
                                {msg.isRead ? (
                                  <CircleFill
                                    size={20}
                                    className="ms-3 "
                                    style={{
                                      color: "grey",
                                      alignText: "center",
                                    }}
                                  />
                                ) : (
                                  <CircleFill
                                    size={20}
                                    className="ms-3"
                                    style={{ color: "#13A2D7" }}
                                  />
                                )}
                              </div>
                            </div>
                          );
                        })
                      )}
                    </Popover.Body>
                  </Popover>
                }
              >
                <div className="icon me-3">
                  <BellFill color={"white"} size="18" />
                  {/* {notifData?.filter((msg) => msg.isRead === false)
                          .length < 0 && ( */}
                  <div className="counter bg-secondary">
                    {notifData?.filter((msg) => msg.isRead === false).length}
                  </div>
                </div>
              </OverlayTrigger>
            )}
          </li>
          <li className="nav-item dropdown text-white fw-bold d-flex align-items-center">
            <i className="ri-user-3-line me-1 ri-1x"></i>
            {user?.firstname
              ? user.firstname + " " + user.lastname
              : "anonymous"}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
