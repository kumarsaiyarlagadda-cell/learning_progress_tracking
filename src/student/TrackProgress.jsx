import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TrackProgress() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("progress")) || {};
    setProgress(stored);
  }, []);

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>📊 Your Progress</h1>

        <div className="card-grid">
          {Object.keys(progress).length === 0 ? (
            <p>No progress updated yet.</p>
          ) : (
            Object.keys(progress).map((course) => (
              <div className="card" key={course}>
                <h3>{course}</h3>
                <p>Completion: {progress[course]}%</p>
              </div>
            ))
          )}
        </div>

        <Link to="/student/update">
          <button className="btn">Update Progress</button>
        </Link>
      </div>
    </>
  );
}