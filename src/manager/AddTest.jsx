import NavBar from "../components/NavBar";
import "./Manager.css";
import { useState } from "react";

export default function AddTest() {
  const [moduleName, setModuleName] = useState("");

  const generateTest = () => {
    if (!moduleName) {
      alert("Enter module name");
      return;
    }

    const questions = [
      {
        question: `What is ${moduleName}?`,
        options: ["Concept", "Device", "Language", "Tool"],
        answer: "Concept"
      },
      {
        question: `Why is ${moduleName} important?`,
        options: [
          "Build applications",
          "Fix hardware",
          "Cooking",
          "Driving"
        ],
        answer: "Build applications"
      },
      {
        question: `Where is ${moduleName} used?`,
        options: [
          "Software",
          "Mechanical",
          "Civil",
          "Agriculture"
        ],
        answer: "Software"
      }
    ];

    // ✅ Store per module
    localStorage.setItem(
      `test_${moduleName}`,
      JSON.stringify(questions)
    );

    alert(`Test created for ${moduleName}`);
  };

  return (
    <>
      <NavBar role="manager" />

      <div className="page">
        <h1>Create Module Test</h1>

        <div className="card">
          <input
            placeholder="Enter module name"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />

          <button className="btn" onClick={generateTest}>
            Generate Test
          </button>
        </div>
      </div>
    </>
  );
}