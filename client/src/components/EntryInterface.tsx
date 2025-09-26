import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface EntryInterfaceProps {
  onEnterDashboard: () => void;
}

export default function EntryInterface({ onEnterDashboard }: EntryInterfaceProps) {
  const handleDashboardClick = () => {
    // Add ripple effect and transition
    onEnterDashboard();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-40 bg-background flex items-center justify-center"
    >
      <div className="relative text-center">
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        <motion.div 
          className="relative z-10 p-12 glass-effect neon-border rounded-lg"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-8">
            <Terminal className="w-16 h-16 md:w-24 md:h-24 text-cyber-cyan mb-4 mx-auto animate-float" />
            <h2 className="font-cyber text-3xl font-bold text-foreground mb-2">Access Granted</h2>
            <p className="font-mono text-muted-foreground">Welcome to the digital command center</p>
          </div>
          
          <motion.button
            onClick={handleDashboardClick}
            className="relative group px-8 py-4 font-cyber font-bold text-lg bg-gradient-to-r from-cyber-cyan to-secondary text-background rounded-lg ripple-effect transition-all duration-300 hover:scale-105 animate-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-open-dashboard"
          >
            <span className="relative z-10">OPEN DASHBOARD</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
