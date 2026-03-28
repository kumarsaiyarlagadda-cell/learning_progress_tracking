import NavBar from "../components/NavBar";
import "../common/Main.css";
import { useState, useEffect } from "react";

export default function TakeTest() {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState("");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedModules = JSON.parse(localStorage.getItem("modules")) || [];
    setModules(storedModules);
  }, []);

  const loadTest = () => {
    if (!selectedModule) {
      alert("Select module");
      return;
    }

    const stored = JSON.parse(
      localStorage.getItem(`test_${selectedModule}`)
    );

    if (!stored) {
      alert("No test available for this module");
      return;
    }

    setQuestions(stored);

    const past =
      JSON.parse(localStorage.getItem(`history_${selectedModule}`)) || [];
    setHistory(past);
  };

  const handleSelect = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const submitTest = () => {
    let correct = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.answer) correct++;
    });

    const finalScore = Math.round((correct / questions.length) * 100);
    setScore(finalScore);

    const scores = JSON.parse(localStorage.getItem("scores")) || {};
    scores[selectedModule] = finalScore;
    localStorage.setItem("scores", JSON.stringify(scores));

    const past =
      JSON.parse(localStorage.getItem(`history_${selectedModule}`)) || [];
    const updatedHistory = [...past, finalScore];

    localStorage.setItem(
      `history_${selectedModule}`,
      JSON.stringify(updatedHistory)
    );

    setHistory(updatedHistory);
  };

  return (
    <>
      <NavBar role="student" />

      <div className="page">
        <h1>🧪 Take Test</h1>

        <div className="card">
          <label>Select Module</label>
          <select
            value={selectedModule}
            onChange={(e) => setSelectedModule(e.target.value)}
          >
            <option value="">Select Module</option>
            {modules.map((m) => (
              <option key={m.id}>{m.name}</option>
            ))}
          </select>

          <button className="btn" onClick={loadTest}>
            Load Test
          </button>

          {questions.map((q, i) => (
            <div key={i}>
              <p><strong>{q.question}</strong></p>

              {q.options.map((opt, idx) => (
                <div key={idx}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    onChange={() => handleSelect(i, opt)}
                  />
                  {opt}
                </div>
              ))}
            </div>
          ))}

          {questions.length > 0 && (
            <button className="btn" onClick={submitTest}>
              Submit Test
            </button>
          )}

          {score !== null && (
            <p className="score">Score: {score}%</p>
          )}
        </div>

        {history.length > 0 && (
          <div className="card">
            <h3>📜 Previous Attempts</h3>
            {history.map((s, i) => (
              <p key={i}>Attempt {i + 1}: {s}%</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}