import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import "./Admin.css";

export default function EditModule() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const modules = JSON.parse(localStorage.getItem("modules")) || [];
    const module = modules.find((m) => m.id === Number(id));

    if (module) {
      setName(module.name);
      setDesc(module.desc);
      setDuration(module.duration);
      setLevel(module.level || "");
      setCategory(module.category || "");
    }
  }, [id]);

  const handleUpdate = () => {
    const modules = JSON.parse(localStorage.getItem("modules")) || [];

    const updatedModules = modules.map((m) =>
      m.id === Number(id)
        ? { ...m, name, desc, duration, level, category }
        : m
    );

    localStorage.setItem("modules", JSON.stringify(updatedModules));
    alert("Module Updated Successfully");
    navigate("/admin/view");
  };

  return (
    <>
      <NavBar role="admin" />

      <div className="page">
        <h1>Edit Module</h1>

        <div className="card">
          <label>Module Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} />

          <label>Description</label>
          <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} />

          <label>Duration</label>
          <input value={duration} onChange={(e)=>setDuration(e.target.value)} />

          <label>Level</label>
          <input value={level} onChange={(e)=>setLevel(e.target.value)} />

          <label>Category</label>
          <input value={category} onChange={(e)=>setCategory(e.target.value)} />

          <button className="btn" onClick={handleUpdate}>
            Update Module
          </button>
        </div>
      </div>
    </>
  );
}