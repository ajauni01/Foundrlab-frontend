import { useLevel } from '../contexts/LevelContext';

export default function Scoreboard() {
  const { level, xp } = useLevel();
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h3 className="text-xl font-bold mb-1">Level {level}</h3>
      <p>{xp} XP</p>
    </div>
  );
}