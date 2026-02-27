import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useState, useEffect } from "react";

export default function ViewModules() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("modules")) || [];
    setModules(stored);
  }, []);

  const enrollModule = (name) => {
    alert(`Enrolled in ${name}`);
  };

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>📚 Available Modules</h1>

        <div className="card-grid">
          {modules.length === 0 ? (
            <p>No modules available. Contact Admin.</p>
          ) : (
            modules.map((mod) => (
              <div className="card" key={mod.id}>
                <h3>{mod.name}</h3>
                <p>{mod.desc}</p>
                <button className="btn" onClick={() => enrollModule(mod.name)}>
                  Enroll
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}