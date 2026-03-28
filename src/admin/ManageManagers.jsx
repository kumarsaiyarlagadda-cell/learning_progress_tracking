import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useState, useEffect } from "react";

export default function ManageManagers() {
  const [managers, setManagers] = useState([]);
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setManagers(users.filter((u) => u.role === "manager"));
  }, []);

  const removeManager = (username) => {
    if (username === loggedUser.username) {
      alert("You cannot remove yourself");
      return;
    }

    if (!window.confirm("Are you sure you want to remove this manager?"))
      return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updated = users.filter(
      (u) => !(u.role === "manager" && u.username === username)
    );

    localStorage.setItem("users", JSON.stringify(updated));
    setManagers(updated.filter((u) => u.role === "manager"));
  };

  return (
    <>
      <NavBar role="admin" />

      <div className="page">
        <h1>Manage Managers</h1>

        <div className="card-grid">
          {managers.map((m) => (
            <div className="card" key={m.username}>
              <h3>{m.username}</h3>

              <button
                className="btn"
                onClick={() => removeManager(m.username)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}