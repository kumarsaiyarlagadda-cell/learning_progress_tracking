import NavBar from "../components/NavBar";
import "./Admin.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ViewModules() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("modules")) || [];
    setModules(stored);
  }, []);

  return (
    <>
      <NavBar role="admin" />

      <div className="page">
        <h1>All Modules</h1>

        <div className="card-grid">
          {modules.map((mod) => (
            <div key={mod.id} className="card">
              <h3>{mod.name}</h3>
              <p>{mod.desc}</p>
              <p><strong>Duration:</strong> {mod.duration} weeks</p>

              <Link to={`/admin/edit/${mod.id}`}>
                <button className="btn">Edit</button>
              </Link>

              <Link to="/admin/delete">
                <button className="btn">Delete</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}