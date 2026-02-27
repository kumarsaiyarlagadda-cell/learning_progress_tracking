import NavBar from "../components/NavBar";
import "./Manager.css";
import { Link } from "react-router-dom";

export default function ManagerDashboard() {
  const modules = JSON.parse(localStorage.getItem("modules")) || [];
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const lastScore = localStorage.getItem("lastScore");

  return (
    <>
      <NavBar role="manager" />

      <div className="page">
        <h1>Manager Dashboard</h1>

        <div className="card-grid">

          <div className="card">
            <h3>Total Modules</h3>
            <p>{modules.length}</p>
          </div>

          <div className="card">
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>

          <div className="card">
            <h3>Latest Test Score</h3>
            <p>{lastScore || "No Tests Taken"}</p>
          </div>

          <div className="card">
            <h3>Reports</h3>
            <Link to="/manager/reports">
              <button className="btn">View Reports</button>
            </Link>
          </div>

          <div className="card">
            <h3>Analytics</h3>
            <Link to="/manager/analytics">
              <button className="btn">View Analytics</button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}