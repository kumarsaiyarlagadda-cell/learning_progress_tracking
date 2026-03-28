import NavBar from "../components/NavBar";
import "../common/Main.css";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const lastScore = localStorage.getItem("lastScore");
  const progress = JSON.parse(localStorage.getItem("progress")) || {};

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>🎓 Student Dashboard</h1>

        <div className="card-grid">

          <div className="card">
            <h3>Profile Information</h3>
            <p><strong>Name:</strong> Student</p>
            <p><strong>Email:</strong> student@gmail.com</p>
            <p><strong>Course:</strong> Full Stack Development</p>
            <p><strong>Last Test Score:</strong> {lastScore || "No Test Taken"}</p>
          </div>

          <div className="card">
            <h3>📚 View Modules</h3>
            <Link to="/student/modules">
              <button className="btn">Open Modules</button>
            </Link>
          </div>

          <div className="card">
            <h3>📊 Track Progress</h3>
            <Link to="/student/progress">
              <button className="btn">View Progress</button>
            </Link>
          </div>

          <div className="card">
            <h3>🧪 Take Test</h3>
            <Link to="/student/test">
              <button className="btn">Start Test</button>
            </Link>
          </div>

          {/* NEW */}
          <div className="card">
            <h3>🏆 Leaderboard</h3>
            <Link to="/student/leaderboard">
              <button className="btn">View Leaderboard</button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}