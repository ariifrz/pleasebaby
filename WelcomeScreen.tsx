
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VALENTINE_DATA } from '../constants';

interface Props {
  onOpen: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onOpen }) => {
  const data = VALENTINE_DATA || {};
  // Menggunakan mawar merah sebagai placeholder pembuka jika link belum diganti
  const defaultOpening = "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=800&auto=format&fit=crop";
  const [imgSrc, setImgSrc] = useState(data.openingPhoto || defaultOpening);
  
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fdf2f2] px-4 overflow-hidden relative">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#701111] opacity-10"
          initial={{ 
            x: Math.random() * window.innerWidth - window.innerWidth/2, 
            y: Math.random() * window.innerHeight - window.innerHeight/2,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: [null, -100, 100], 
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
        >
          ❤
        </motion.div>
      ))}

      <motion.div 
        className="relative flex items-center justify-center cursor-pointer z-10"
        whileHover={{ scale: 1.02 }}
        onClick={onOpen}
      >
        <motion.div 
          className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-[#701111] opacity-5 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="heart-glow relative text-[#701111]"
        >
          <svg width="320" height="320" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div 
               className="w-[280px] h-[280px] md:w-[290px] md:h-[290px] relative overflow-hidden"
               style={{ 
                 maskImage: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>\')',
                 maskSize: 'contain',
                 maskRepeat: 'no-repeat',
                 maskPosition: 'center',
                 WebkitMaskImage: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81,14.76,3,16.5,3C19.58,3,22,5.42,22,8.5c0,3.78-3.4 6.86-8.55 11.54L12,21.35z"/></svg>\')',
                 WebkitMaskSize: 'contain',
                 WebkitMaskRepeat: 'no-repeat',
                 WebkitMaskPosition: 'center',
               }}
             >
                <img 
                  src={imgSrc} 
                  alt="Opening" 
                  className="w-full h-full object-cover brightness-90 pointer-events-auto"
                  onError={() => setImgSrc(defaultOpening)}
                />
             </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
            <svg width="295" height="295" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="0.8">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81,14.76,3,16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center pointer-events-none">
          <motion.h1 
            className="text-8xl font-romantic mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {data.initials}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14"
          >
            <motion.p className="text-[10px] tracking-[0.4em] uppercase opacity-90 drop-shadow-md mb-4 font-serif-elegant font-bold">
              Tap to open
            </motion.p>
            <div className="w-8 h-[1px] bg-white/60 mx-auto shadow-md"></div>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        className="absolute bottom-12 px-10 py-3 border border-[#701111]/20 text-[#701111] rounded-full text-xs tracking-widest uppercase hover:bg-[#701111] hover:text-white transition-all duration-500 font-serif-elegant bg-white/20 backdrop-blur-sm shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={onOpen}
      >
        A special message for you
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
