import React from 'react';
import '../app/globals.css';
import Navbar from '../components/Navbar';
import { LevelProvider } from '../contexts/LevelContext';

export const metadata = {
  title: 'FoundrLab',
  description: 'AI-driven platform to cultivate student entrepreneurs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <LevelProvider>
          <Navbar />
          <main className="max-w-4xl mx-auto p-4">
            {children}
          </main>
        </LevelProvider>
      </body>
    </html>
  );
}