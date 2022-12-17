import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  if (!token) {
    return <Navigate to="/auth">children</Navigate>;
  }

  return children;
};

export default Protected;
