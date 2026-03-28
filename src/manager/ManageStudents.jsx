import NavBar from "../components/NavBar";
import "./Manager.css";
import { useState, useEffect } from "react";

export default function ManageStudents() {
  const [students, setStudents] = useState([]);
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setStudents(users.filter((u) => u.role === "student"));
  }, []);

  const deleteStudent = (username) => {
    if (username === loggedUser.username) {
      alert("You cannot remove yourself");
      return;
    }

    if (!window.confirm("Delete this student?")) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updated = users.filter(
      (u) => !(u.role === "student" && u.username === username)
    );

    localStorage.setItem("users", JSON.stringify(updated));
    setStudents(updated.filter((u) => u.role === "student"));
  };

  return (
    <>
      <NavBar role="manager" />

      <div className="page">
        <h1>👨‍🎓 Manage Students</h1>

        <div className="card-grid">
          {students.length === 0 ? (
            <p>📭 No students found</p>
          ) : (
            students.map((s) => (
              <div className="card" key={s.username}>
                <h3>{s.username}</h3>

                <button
                  className="btn"
                  onClick={() => deleteStudent(s.username)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}