import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import EntryInterface from '@/components/EntryInterface';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [currentStage, setCurrentStage] = useState<'loading' | 'entry' | 'dashboard'>('loading');

  const handleLoadingComplete = () => {
    setCurrentStage('entry');
  };

  const handleEnterDashboard = () => {
    setCurrentStage('dashboard');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {currentStage === 'loading' && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
        {currentStage === 'entry' && (
          <EntryInterface key="entry" onEnterDashboard={handleEnterDashboard} />
        )}
        {currentStage === 'dashboard' && (
          <Dashboard key="dashboard" />
        )}
      </AnimatePresence>
    </div>
  );
}
