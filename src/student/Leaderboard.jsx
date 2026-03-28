import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [scores, setScores] = useState({});

  useEffect(() => {
    setScores(JSON.parse(localStorage.getItem("scores")) || {});
  }, []);

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>🏆 Leaderboard</h1>

        <div className="card-grid">
          {sorted.map(([mod, score], index) => (
            <div className="card" key={mod}>
              <h3>{mod}</h3>
              <p>Score: {score}%</p>
              {index === 0 && <p>🥇 Top Performer</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}