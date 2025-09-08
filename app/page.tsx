import React from 'react';
import Scoreboard from '../components/Scoreboard';
import { useLevel } from '../contexts/LevelContext';

export default function HomePage() {
  const { addXp } = useLevel();
  return (
    <div>
      <Scoreboard />
      <div className="space-y-4">
        <p className="text-lg">Welcome to FoundrLab! This interactive dashboard guides you through building a startup, validating ideas, researching markets and crafting an MVP.</p>
        <button
          onClick={() => addXp(10)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Earn 10 XP
        </button>
      </div>
    </div>
  );
}