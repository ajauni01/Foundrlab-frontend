import React, { useState } from 'react';
import Scoreboard from '../../components/Scoreboard';
import { useLevel } from '../../contexts/LevelContext';

export default function MVPPage() {
  const { addXp } = useLevel();
  const [mvpPlan, setMvpPlan] = useState<string>('');

  const planMvp = () => {
    // Placeholder for backend call to generate MVP plan
    setMvpPlan('Build a basic web app allowing users to submit problems, vote on ideas and get feedback from mentors. Focus on core functionality before scaling.');
    addXp(35);
  };

  return (
    <div>
      <Scoreboard />
      <h1 className="text-2xl font-bold mb-4">MVP Planner</h1>
      <p className="mb-4">Generate a minimum viable product (MVP) roadmap. Each plan awards XP.</p>
      <button
        onClick={planMvp}
        className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
      >
        Plan MVP
      </button>
      {mvpPlan && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md border">
          <h2 className="font-semibold mb-2">MVP Plan</h2>
          <p>{mvpPlan}</p>
        </div>
      )}
    </div>
  );
}