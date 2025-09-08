import React, { useState } from 'react';
import Scoreboard from '../../components/Scoreboard';
import { useLevel } from '../../contexts/LevelContext';

export default function ValidationPage() {
  const { addXp } = useLevel();
  const [validation, setValidation] = useState<string>('');

  const validateConcept = () => {
    // Placeholder; integrate backend call to create a validation framework
    setValidation('Interview 5 potential customers to understand their pain points and confirm the desirability of your problem statement.');
    addXp(25);
  };

  return (
    <div>
      <Scoreboard />
      <h1 className="text-2xl font-bold mb-4">Validation Framework</h1>
      <p className="mb-4">Click to generate a validation task. Completing tasks awards XP.</p>
      <button
        onClick={validateConcept}
        className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700"
      >
        Generate Validation Task
      </button>
      {validation && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md border">
          <h2 className="font-semibold mb-2">Validation Task</h2>
          <p>{validation}</p>
        </div>
      )}
    </div>
  );
}