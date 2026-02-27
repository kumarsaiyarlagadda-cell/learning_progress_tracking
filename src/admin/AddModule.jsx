import { useState } from "react";
import NavBar from "../components/NavBar";
import "./Admin.css";

export default function AddModule() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState("");

  const handleAdd = () => {
    if (!name || !desc || !duration) {
      alert("Fill all fields");
      return;
    }

    const modules = JSON.parse(localStorage.getItem("modules")) || [];

    const newModule = {
      id: Date.now(),
      name,
      desc,
      duration
    };

    localStorage.setItem("modules", JSON.stringify([...modules, newModule]));

    alert("Module Added Successfully");

    setName("");
    setDesc("");
    setDuration("");
  };

  return (
    <>
      <NavBar role="admin" />

      <div className="page">
        <h1> Add Module</h1>

        <div className="card">
          <label>Module Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} />

          <label>Description</label>
          <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} />

          <label>Duration (Weeks)</label>
          <input type="number" value={duration} onChange={(e)=>setDuration(e.target.value)} />

          <button className="btn" onClick={handleAdd}>Add Module</button>
        </div>
      </div>
    </>
  );
}