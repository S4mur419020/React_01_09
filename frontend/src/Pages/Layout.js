import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { AuthContext } from "../contexts/AuthContext";

export default function Layout() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Navigation />}
      <Outlet />
    </>
  );
}
