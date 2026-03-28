import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useState, useEffect } from "react";

export default function TrackProgress() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("scores")) || {};
    setScores(stored);
  }, []);

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>Your Progress</h1>

        <div className="card-grid">
          {Object.keys(scores).length === 0 ? (
            <p>No test taken yet</p>
          ) : (
            Object.keys(scores).map((mod) => (
              <div className="card" key={mod}>
                <h3>{mod}</h3>
                <p>Score: {scores[mod]}%</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}