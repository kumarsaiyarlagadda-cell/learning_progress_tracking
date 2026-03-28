import { useState } from "react";
import NavBar from "../components/NavBar";
import "./Admin.css";

export default function ApiModules() {
  const [query, setQuery] = useState("");
  const [apiModules, setApiModules] = useState([]);

  const categories = [
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Cyber Security",
    "Cloud Computing"
  ];

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const handleSearch = () => {
    if (!query) {
      alert("Enter module name");
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        const transformed = data.products.map((item) => ({
          id: item.id,
          name: `${query} - ${item.title}`,
          desc: item.description,
          duration: `${Math.floor(Math.random() * 6) + 2} weeks`,
          level: levels[Math.floor(Math.random() * levels.length)],
          category:
            categories[Math.floor(Math.random() * categories.length)]
        }));

        setApiModules(transformed);
      });
  };

  const handleAdd = (mod) => {
    const modules = JSON.parse(localStorage.getItem("modules")) || [];

    const newModule = {
      id: Date.now(),
      ...mod
    };

    localStorage.setItem("modules", JSON.stringify([...modules, newModule]));
    alert("Module added successfully");
  };

  return (
    <>
      <NavBar role="admin" />

      <div className="page">
        <h1>🎓 Smart Module Generator</h1>

        <div className="card">
          <input
            placeholder="Search topic (e.g. react, python, ai)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className="btn" onClick={handleSearch}>
            Generate Modules
          </button>
        </div>

        <div className="card-grid">
          {apiModules.map((mod) => (
            <div key={mod.id} className="card">
              <h3>{mod.name}</h3>
              <p>{mod.desc}</p>
              <p><strong>Duration:</strong> {mod.duration}</p>
              <p><strong>Level:</strong> {mod.level}</p>
              <p><strong>Category:</strong> {mod.category}</p>

              <button className="btn" onClick={() => handleAdd(mod)}>
                Add Module
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}