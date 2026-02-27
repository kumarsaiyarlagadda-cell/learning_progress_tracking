import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useState } from "react";

export default function UpdateProgress() {
  const [course, setCourse] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleUpdate = () => {
    if (!course || !percentage) {
      alert("Fill all fields");
      return;
    }

    let stored = JSON.parse(localStorage.getItem("progress")) || {};
    stored[course] = percentage;

    localStorage.setItem("progress", JSON.stringify(stored));
    alert("Progress Updated Successfully");

    setCourse("");
    setPercentage("");
  };

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>✏ Update Progress</h1>

        <div className="card">
          <label>Course Name</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <label>Completion Percentage</label>
          <input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />

          <button className="btn" onClick={handleUpdate}>
            Save Progress
          </button>
        </div>
      </div>
    </>
  );
}