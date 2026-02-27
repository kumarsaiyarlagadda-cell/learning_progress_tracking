import NavBar from "../components/NavBar";
import "./Manager.css";

export default function Analytics() {
  const modules = JSON.parse(localStorage.getItem("modules")) || [];
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  const lastScore = localStorage.getItem("lastScore") || 0;

  const averageProgress =
    Object.values(progress).length > 0
      ? (
          Object.values(progress).reduce((a, b) => Number(a) + Number(b), 0) /
          Object.values(progress).length
        ).toFixed(2)
      : 0;

  return (
    <>
      <NavBar role="manager" />

      <div className="page">
        <h1>System Analytics</h1>

        <div className="card-grid">

          <div className="card">
            <h3>Total Modules</h3>
            <p>{modules.length}</p>
          </div>

          <div className="card">
            <h3>Total Students</h3>
            <p>{students.length}</p>
          </div>

          <div className="card">
            <h3>Average Progress</h3>
            <p>{averageProgress}%</p>
          </div>

          <div className="card">
            <h3>Latest Test Score</h3>
            <p>{lastScore}%</p>
          </div>

        </div>
      </div>
    </>
  );
}