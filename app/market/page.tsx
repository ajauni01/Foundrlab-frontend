import React, { useState } from 'react';
import Scoreboard from '../../components/Scoreboard';
import { useLevel } from '../../contexts/LevelContext';

export default function MarketPage() {
  const { addXp } = useLevel();
  const [analysis, setAnalysis] = useState<string>('');

  const generateAnalysis = () => {
    // Placeholder for backend call to market analysis
    setAnalysis('The rural edtech market is estimated at $X million with a growing demand for remote learning tools. Key competitors include Company A and Company B.');
    addXp(40);
  };

  return (
    <div>
      <Scoreboard />
      <h1 className="text-2xl font-bold mb-4">Market Analysis</h1>
      <p className="mb-4">Use AI to assess the market size and competition for your idea. Each analysis awards XP.</p>
      <button
        onClick={generateAnalysis}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
      >
        Generate Market Analysis
      </button>
      {analysis && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md border">
          <h2 className="font-semibold mb-2">Analysis Result</h2>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}