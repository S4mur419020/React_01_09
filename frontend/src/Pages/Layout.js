import React, { useContext } from "react";
import Navigation from "./Navigation";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Layout() {
  const {user,logout}=useContext(AuthContext)
  return (
    <div>
      {user ? (
        <ul>
          <li>SKILLSHARE ACADEMY</li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/mentors">Mentors</NavLink></li>
          <li>Welcome, {user.name}</li>
          <li><button onClick={logout}>Logout</button></li>
        </ul>
      ) : null}

      <Outlet /> {}
    </div>
  );
}