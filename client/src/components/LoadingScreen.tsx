import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import ParticleSystem from './ParticleSystem';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');

  const statusMessages = [
    'Initializing systems...',
    'Loading components...',
    'Establishing secure connection...',
    'Decrypting creative vault...',
    'Access granted!'
  ];

  const fullText = "Initializing Caleb's Portfolio...";

  useEffect(() => {
    // Typewriter effect
    let charIndex = 0;
    const typewriterInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 100);

    // Progress and status updates
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15 + 5;
        const newProgress = Math.min(prev + increment, 100);
        
        // Update status message based on progress
        const newMessageIndex = Math.floor(newProgress / 20);
        if (newMessageIndex < statusMessages.length && newMessageIndex !== messageIndex) {
          setMessageIndex(newMessageIndex);
        }
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 1000);
        }
        
        return newProgress;
      });
    }, 300);

    return () => {
      clearInterval(typewriterInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete, messageIndex]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
    >
      <ParticleSystem />
      
      <div className="relative z-10 text-center">
        <motion.div 
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Lock className="w-16 h-16 md:w-24 md:h-24 text-cyber-cyan mx-auto animate-pulse-glow" />
        </motion.div>
        
        <h1 className="font-cyber text-2xl md:text-4xl font-bold mb-4 text-cyber-cyan">
          <span className="typewriter">{typewriterText}</span>
        </h1>
        
        <div className="flex justify-center mt-8">
          <div className="w-64 h-2 bg-card rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyber-cyan to-secondary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        
        <motion.p 
          className="font-mono text-sm text-muted-foreground mt-4"
          key={messageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {statusMessages[messageIndex]}
        </motion.p>
      </div>
    </motion.div>
  );
}
