import React from "react";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>WELCOME BACK, JOHN DOE!</h1>
      <p>Current Balance: <strong>25 Credits</strong></p>

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
          <p>Completed /Remaining</p>
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
