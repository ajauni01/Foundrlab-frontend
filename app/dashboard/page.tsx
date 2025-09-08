import React from 'react';
import Scoreboard from '../../components/Scoreboard';
import { useLevel } from '../../contexts/LevelContext';

export default function DashboardPage() {
  const { addXp } = useLevel();
  return (
    <div>
      <Scoreboard />
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Track your progress here. Complete modules to earn XP and level up!</p>
      <button
        onClick={() => addXp(20)}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Complete a task (Earn 20 XP)
      </button>
    </div>
  );
}