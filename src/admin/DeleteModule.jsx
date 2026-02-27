import NavBar from "../components/NavBar";
import "./Admin.css";
import { useState, useEffect } from "react";

export default function DeleteModule() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("modules")) || [];
    setModules(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = modules.filter((mod) => mod.id !== id);
    localStorage.setItem("modules", JSON.stringify(updated));
    setModules(updated);
  };

  return (
    <>
      <NavBar role="admin" />

      <div className="page">
        <h1>Delete Module</h1>

        <div className="card-grid">
          {modules.map((mod) => (
            <div key={mod.id} className="card">
              <h3>{mod.name}</h3>
              <button className="btn delete" onClick={()=>handleDelete(mod.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}