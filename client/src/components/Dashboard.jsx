import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); 

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleViewReport = (course) => {
    // yaha course select karke report page pe bhejenge
    navigate(`/report/${user.email}?course=${course}`);
  };

  if (!user) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>
        ⚠️ Please login or signup first!
      </p>
    );
  }

  return (
    <div className="dashboard" style={{ padding: "24px", color: "white" }}>
      <div className="dashboard-header" style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "2rem" }}>Welcome, {user.username} 🎉</h1>
        <button
          style={{
            marginTop: "8px",
            padding: "8px 16px",
            borderRadius: "8px",
            background: "linear-gradient(90deg,#ec4899,#d946ef)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-card" style={{ marginBottom: "24px" }}>
        <p><strong>👤 Username:</strong> {user.username}</p>
        <p><strong>📧 Email:</strong> {user.email}</p>
        <p><strong>🏫 College:</strong> {user.college}</p>
        <p><strong>🎓 Year:</strong> {user.year}</p>
      </div>

      {/* Courses to view progress */}
      <div className="courses" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {["HTML","CSS","JavaScript","OOP","DSA","DBMS","MongoDB","Node.js","Express.js","React.js"].map((c) => (
          <button
            key={c}
            onClick={() => handleViewReport(c)}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              background: "linear-gradient(90deg,#ec4899,#d946ef)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            View {c} Progress
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
