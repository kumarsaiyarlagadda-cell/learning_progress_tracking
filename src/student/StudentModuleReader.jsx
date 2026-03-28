import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StudentModuleReader() {
  const { id } = useParams();
  const [module, setModule] = useState(null);
  const [chapterIndex, setChapterIndex] = useState(0);

  useEffect(() => {
    const modules = JSON.parse(localStorage.getItem("modules")) || [];
    setModule(modules.find((m) => m.id === Number(id)));
  }, [id]);

  if (!module) return <p>Loading...</p>;

  const chapters = [
    `Introduction to ${module.name}`,
    `Basics of ${module.name}`,
    `Core Concepts of ${module.name}`,
    `Advanced Topics of ${module.name}`,
    `Applications of ${module.name}`
  ];

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>{module.name}</h1>

        <div className="card">
          <p style={{ lineHeight: "1.8", textAlign: "justify" }}>
            {chapters[chapterIndex]}
          </p>

          <button
            className="btn"
            disabled={chapterIndex === 0}
            onClick={() => setChapterIndex(chapterIndex - 1)}
          >
            ⬅ Previous
          </button>

          <button
            className="btn"
            disabled={chapterIndex === chapters.length - 1}
            onClick={() => setChapterIndex(chapterIndex + 1)}
          >
            Next ➡
          </button>
        </div>
      </div>
    </>
  );
}