import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewModules() {
  const [modules, setModules] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setModules(JSON.parse(localStorage.getItem("modules")) || []);
  }, []);

  const filtered = modules.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>📚 Modules</h1>

        <div className="card">
          <input
            placeholder="Search module..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="card-grid">
          {filtered.map((mod) => (
            <div className="card" key={mod.id}>
              <h3>📘 {mod.name}</h3>

              <button
                className="btn"
                onClick={() => navigate(`/student/module/${mod.id}`)}
              >
                Read Module
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}