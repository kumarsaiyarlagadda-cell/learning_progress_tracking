import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ role }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

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
            <Link to="/student/leaderboard">Leaderboard</Link>
          </>
        )}

        {role === "admin" && (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/add">Add Module</Link>
            <Link to="/admin/view">View Modules</Link>
            <Link to="/admin/delete">Delete Module</Link>
            <Link to="/admin/managers">Manage Managers</Link>
          </>
        )}

        {role === "manager" && (
          <>
            <Link to="/manager">Dashboard</Link>
            <Link to="/manager/reports">Reports</Link>
            <Link to="/manager/analytics">Analytics</Link>
            <Link to="/manager/students">Students</Link>
            <Link to="/manager/add-test">Add Test</Link>
          </>
        )}

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}