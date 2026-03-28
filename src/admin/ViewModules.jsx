import NavBar from "../components/NavBar";
import "./Admin.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ViewModules() {
  const [modules, setModules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const modulesPerPage = 4;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("modules")) || [];
    setModules(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = modules.filter((mod) => mod.id !== id);
    localStorage.setItem("modules", JSON.stringify(updated));
    setModules(updated);
  };

  const indexOfLast = currentPage * modulesPerPage;
  const indexOfFirst = indexOfLast - modulesPerPage;
  const currentModules = modules.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(modules.length / modulesPerPage);

  return (
    <>
      <NavBar role="admin" />

      <div className="page">
        <h1> All Modules</h1>

        <div className="card-grid">
          {currentModules.map((mod) => (
            <div key={mod.id} className="card">
              <h3>{mod.name}</h3>
              <p>{mod.desc}</p>
              <p><strong>Duration:</strong> {mod.duration}</p>
              <p><strong>Level:</strong> {mod.level}</p>
              <p><strong>Category:</strong> {mod.category}</p>

              <Link to={`/admin/edit/${mod.id}`}>
                <button className="btn">Edit</button>
              </Link>

              <button
                className="btn delete"
                onClick={() => handleDelete(mod.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            className="btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className="btn"
              style={{
                margin: "0 5px",
                background: currentPage === i + 1 ? "gray" : "white"
              }}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}