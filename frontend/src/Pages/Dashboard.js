import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../dashboard.css"; 

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get("/api/user");
        setUser(response.data);
      } catch (err) {
        if (err.response?.status === 401) {
          setError("Bejelentkezés szükséges");
          navigate("/login");
        } else {
          setError("Hiba történt");
        }
      }
    };

    loadUser();
  }, [navigate]);

  if (!user) return <p>{error || "Betöltés..."}</p>;

  return (
    <div className="dashboard-container">
      <h1>WELCOME BACK, JOHN DOE!</h1>
      <p>
        Current Balance: <strong>25 Credits</strong>
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>3</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Completed Chapters</p>
        </div>

        <div className="stat-card">
          <h2>25</h2>
          <p>Total Credits Earned</p>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section-card">
          <h3>Credit Progress (Last 30 Days)</h3>
          <p>Chart placeholder</p>
        </div>

        <div className="section-card">
          <h3>Course Completion Status</h3>
          <p>Completed / Remaining</p>
        </div>
      </div>

      <div className="dashboard-actions">
        <button>Browse Courses</button>
        <button>Book Mentor Session</button>
      </div>
    </div>
  );
};

export default Dashboard;