
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  src: string;
  shape: 'rect' | 'heart' | 'circle';
}

const PhotoFrame: React.FC<Props> = ({ src, shape }) => {
  // Mengganti placeholder wanita laptop dengan mawar estetik yang lebih sesuai tema
  const fallbackRose = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&auto=format&fit=crop"; // Tetap simpan id tapi ganti logic
  // Gunakan mawar merah sebagai fallback yang benar-benar aman
  const romanticPlaceholder = "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=400&auto=format&fit=crop";
  
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  
  React.useEffect(() => {
    if (src) {
      setImgSrc(src);
      setHasError(false);
    }
  }, [src]);

  const isHeart = shape === 'heart';
  const isCircle = shape === 'circle';

  const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";
  const heartMask = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${heartPath}" fill="black"/></svg>')`;

  // Jika tidak ada source sama sekali, jangan render apa-apa
  if (!src || src.includes('picsum.photos')) return null;

  return (
    <motion.div 
      className="relative p-2 bg-white shadow-xl flex items-center justify-center"
      style={{ 
        aspectRatio: isHeart || isCircle ? '1/1' : '3/4',
        width: '100%'
      }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-center ${isCircle ? 'rounded-full' : 'rounded-sm'}`}>
         <div 
           className="w-full h-full"
           style={isHeart ? {
             maskImage: heartMask,
             WebkitMaskImage: heartMask,
             maskSize: '100% 100%',
             WebkitMaskSize: '100% 100%',
             maskRepeat: 'no-repeat',
             WebkitMaskRepeat: 'no-repeat',
           } : {}}
         >
           <img 
             src={hasError ? romanticPlaceholder : imgSrc} 
             alt="Valentine Memory" 
             className="w-full h-full object-cover object-center"
             onError={() => setHasError(true)}
           />
         </div>

         {!isHeart && (
           <div className={`absolute inset-0 border-[8px] border-[#d4af37] pointer-events-none ${isCircle ? 'rounded-full' : ''}`} />
         )}
      </div>

      {isHeart && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-2">
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="0.8">
             <path d={heartPath} />
          </svg>
        </div>
      )}
      
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 backdrop-blur-sm border border-white/10 rotate-1 flex items-center justify-center z-10 shadow-sm">
         <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default PhotoFrame;
