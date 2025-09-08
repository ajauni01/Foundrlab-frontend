import React, { useState } from 'react';
import Scoreboard from '../../components/Scoreboard';
import { useLevel } from '../../contexts/LevelContext';

export default function JtbdPage() {
  const { addXp } = useLevel();
  const [questions, setQuestions] = useState<string[]>([]);

  const generateQuestions = () => {
    // Placeholder for AI-generated Christensen-style questions
    setQuestions([
      'What jobs are your potential customers hiring products to do today?',
      'Where does non-consumption exist in this market?',
      'How are current solutions overserving certain segments?',
      'What would delight your users beyond the core function?'
    ]);
    addXp(20);
  };

  return (
    <div>
      <Scoreboard />
      <h1 className="text-2xl font-bold mb-4">JTBD / Disruption</h1>
      <p className="mb-4">Use the Jobs To Be Done and disruption frameworks to refine your idea. Each question set awards XP.</p>
      <button
        onClick={generateQuestions}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Generate Reflection Questions
      </button>
      {questions.length > 0 && (
        <ul className="mt-4 space-y-2 list-disc list-inside">
          {questions.map((q, idx) => (
            <li key={idx}>{q}</li>
          ))}
        </ul>
      )}
    </div>
  );
}