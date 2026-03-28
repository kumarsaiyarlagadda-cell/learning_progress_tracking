import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!role || !username || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.username === username);

    if (userExists) {
      alert("Username already exists");
      return;
    }

    users.push({ role, username, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Register</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="manager">Manager</option>
        </select>

        <input
          type="text"
          placeholder="Create Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>

        <p>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "300px",
  },
  link: {
    color: "blue",
    cursor: "pointer",
  },
};