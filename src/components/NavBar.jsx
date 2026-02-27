import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ role }) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2>Learning Progress Tracker</h2>

      <div className="nav-links">
        {role === "student" && (
          <>
            <Link to="/student">Dashboard</Link>
            <Link to="/student/modules">Modules</Link>
            <Link to="/student/progress">Progress</Link>
            <Link to="/student/test">Test</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/add">Add Module</Link>
            <Link to="/admin/view">View Modules</Link>
            <Link to="/admin/delete">Delete Module</Link>
          </>
        )}

        {role === "manager" && (
          <>
            <Link to="/manager">Dashboard</Link>
            <Link to="/manager/reports">Reports</Link>
            <Link to="/manager/analytics">Analytics</Link>
          </>
        )}

        <button className="logout-btn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
}