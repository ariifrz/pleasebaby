
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VALENTINE_DATA } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import ValentineCard from './components/ValentineCard';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    // Scroll to top when opening
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-serif-elegant overflow-hidden">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            <WelcomeScreen onOpen={handleOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ValentineCard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
