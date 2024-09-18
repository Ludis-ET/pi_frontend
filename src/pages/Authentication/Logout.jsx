import { useEffect, useContext } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    navigate("/");
  }, []);

  return null;
};
