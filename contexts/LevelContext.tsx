import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LevelContextState {
  level: number;
  xp: number;
  addXp: (amount: number) => void;
}

const LevelContext = createContext<LevelContextState | undefined>(undefined);

export function LevelProvider({ children }: { children: ReactNode }) {
  const [xp, setXp] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);

  const addXp = (amount: number) => {
    const newXp = xp + amount;
    const newLevel = Math.floor(newXp / 100) + 1;
    setXp(newXp);
    setLevel(newLevel);
  };

  return (
    <LevelContext.Provider value={{ level, xp, addXp }}>
      {children}
    </LevelContext.Provider>
  );
}

export function useLevel() {
  const context = useContext(LevelContext);
  if (context === undefined) {
    throw new Error('useLevel must be used within a LevelProvider');
  }
  return context;
}