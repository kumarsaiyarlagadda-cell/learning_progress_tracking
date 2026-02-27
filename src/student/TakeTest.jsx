import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useState } from "react";

export default function TakeTest() {
  const [score, setScore] = useState(null);

  const attemptTest = () => {
    const randomScore = Math.floor(Math.random() * 100);
    setScore(randomScore);
    localStorage.setItem("lastScore", randomScore);
  };

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>📝 Module Test</h1>

        <div className="card">
          <p>Click below to attempt a quick test.</p>

          <button className="btn" onClick={attemptTest}>
            Attempt Test
          </button>

          {score !== null && (
            <p><strong>Your Score:</strong> {score}%</p>
          )}
        </div>
      </div>
    </>
  );
}