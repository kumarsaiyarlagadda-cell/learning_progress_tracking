import NavBar from "../components/NavBar";
import "./Manager.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManagerModules() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("modules")) || [];
    setModules(stored);
  }, []);

  return (
    <>
      <NavBar role="manager" />

      <div className="page">
        <h1>Module Library</h1>

        <div className="card-grid">
          {modules.map((mod) => (
            <div key={mod.id} className="card">
              <h3>{mod.name}</h3>

              <button
                className="btn"
                onClick={() => navigate(`/manager/module/${mod.id}`)}
              >
                Read Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}