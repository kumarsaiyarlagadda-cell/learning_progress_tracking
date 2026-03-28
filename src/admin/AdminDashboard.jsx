import NavBar from "../components/NavBar";
import "./Admin.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("modules")) || [];
    setModules(stored);
  }, []);

  return (
    <>
      <NavBar role="admin" />

      <div className="page">
        <h1>🛠 Admin Dashboard</h1>

        <div className="card-grid">
          <div className="card">
            <h3>Total Modules</h3>
            <p>{modules.length}</p>
          </div>

          <div className="card">
            <h3>Add New Module</h3>
            <Link to="/admin/add">
              <button className="btn">Add Module</button>
            </Link>
          </div>
          <div className="card">
            <h3>👔 Manage Managers</h3>
            <Link to="/admin/managers">
              <button className="btn">Open</button>
            </Link>
          </div>
          <div className="card">
            <h3>View Modules</h3>
            <Link to="/admin/view">
              <button className="btn">View Modules</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}