import NavBar from "../components/NavBar";
import "./Manager.css";
import { useState, useEffect } from "react";

export default function ViewReports() {
  const [students, setStudents] = useState([]);
  const scores = JSON.parse(localStorage.getItem("scores")) || {};

  const [search, setSearch] = useState("");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setStudents(users.filter((u) => u.role === "student"));
  }, []);

  const filtered = students.filter((s) =>
    s.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar role="manager" />

      <div className="page">
        <h1>Student Reports</h1>

        <div className="card">
          <input
            placeholder="Search student..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="card-grid">
          {filtered.map((s) => (
            <div className="card" key={s.username}>
              <h3>{s.username}</h3>

              {Object.keys(scores).length === 0 ? (
                <p>No test data</p>
              ) : (
                Object.entries(scores).map(([mod, score]) => (
                  <p key={mod}>
                     {mod}: {score}%
                  </p>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}