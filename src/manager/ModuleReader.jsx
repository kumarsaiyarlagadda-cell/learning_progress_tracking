import NavBar from "../components/NavBar";
import "./Manager.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ModuleReader() {
  const { id } = useParams();
  const [module, setModule] = useState(null);

  useEffect(() => {
    const modules = JSON.parse(localStorage.getItem("modules")) || [];
    const found = modules.find((m) => m.id === Number(id));
    setModule(found);
  }, [id]);

  if (!module) return <p>Loading...</p>;

  const generateContent = (name) => {
    return [
      `Introduction to ${name}`,
      `${name} basics and working principles`,
      `Core concepts of ${name}`,
      `Advanced concepts of ${name}`,
      `Applications of ${name}`
    ];
  };

  const chapters = generateContent(module.name);

  return (
    <>
      <NavBar role="manager" />

      <div className="page">
        <h1>📖 {module.name}</h1>

        {chapters.map((ch, index) => (
          <div key={index} className="card">
            <h3>Chapter {index + 1}</h3>
            <p>{ch}</p>
          </div>
        ))}
      </div>
    </>
  );
}