import React, { useState } from 'react';
import Scoreboard from '../../components/Scoreboard';
import { useLevel } from '../../contexts/LevelContext';

export default function ProblemsPage() {
  const { addXp } = useLevel();
  const [problem, setProblem] = useState<string>('');

  const generateProblem = async () => {
    // Placeholder API call; integrate your backend here
    // Example: const res = await fetch('/api/problems/generate', { method: 'POST', credentials: 'include' });
    // const data = await res.json();
    // setProblem(data.problem);
    setProblem('Describe a common challenge faced by students in rural communities when starting a business.');
    addXp(30);
  };

  return (
    <div>
      <Scoreboard />
      <h1 className="text-2xl font-bold mb-4">Problem Generator</h1>
      <p className="mb-4">Click the button below to generate a problem statement. Each generation awards XP.</p>
      <button
        onClick={generateProblem}
        className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
      >
        Generate Problem
      </button>
      {problem && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md border">
          <h2 className="font-semibold mb-2">Generated Problem</h2>
          <p>{problem}</p>
        </div>
      )}
    </div>
  );
}