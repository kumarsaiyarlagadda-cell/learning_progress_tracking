import NavBar from "../components/NavBar";
import "./Manager.css";
import { useState } from "react";

export default function ViewReports() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const modules = JSON.parse(localStorage.getItem("modules")) || [];
  const progress = JSON.parse(localStorage.getItem("progress")) || {};

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((s) =>
    s.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar role="manager" />

      <div className="page">
        <h1>Detailed Reports</h1>

        <div className="card">
          <label>Search Student</label>
          <input
            placeholder="Enter student name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="card-grid">
          {filteredStudents.length === 0 ? (
            <p>No student records found</p>
          ) : (
            filteredStudents.map((student, index) => (
              <div key={index} className="card">
                <h3>{student.name}</h3>
                <p>Email: {student.email}</p>
                <p>Courses Enrolled: {modules.length}</p>
                <p>Progress Entries: {Object.keys(progress).length}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}