import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navigation() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <strong>SKILLSHARE ACADEMY</strong>
          </li>
        </ul>

        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/mentors">Mentors</NavLink></li>
        </ul>

        <ul>
          <li>Welcome, {user.name}</li>
          <li onClick={logout} style={{ cursor: "pointer" }}>
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
}
