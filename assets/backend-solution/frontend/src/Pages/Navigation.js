import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const user = { name: "Guest" };
  const logout = () => console.log("Logout clicked");

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className="bold">
              <strong>SKILLSHARE ACADEMY</strong>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/mentors">Mentors</NavLink>
            </li>
          </ul>
          <ul>
            <li>Welcome, {user.name}</li>
            <li className="bold" onClick={logout}>Logout</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
