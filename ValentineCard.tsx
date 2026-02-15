
import React from 'react';
import { motion } from 'framer-motion';
import { VALENTINE_DATA } from '../constants';
import PhotoFrame from './PhotoFrame';

const ValentineCard: React.FC = () => {
  const photos = VALENTINE_DATA.photos || [];
  
  const isValidPhoto = (index: number) => {
    const url = photos[index];
    if (!url) return false;
    if (url.includes('picsum.photos')) return false;
    return true;
  };

  return (
    <div className="bg-[#fdf2f2] min-h-screen text-[#701111] pb-20 overflow-x-hidden">
      <section className="bg-watercolor pt-20 pb-16 flex flex-col items-center relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg className="absolute top-10 left-10 w-24 h-24 rotate-12" viewBox="0 0 100 100">
            <path d="M50 10 C60 0 90 0 90 40 C90 70 50 90 50 90 C50 90 10 70 10 40 C10 0 40 0 50 10" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-10 right-10 w-32 h-32 -rotate-45" viewBox="0 0 100 100">
            <path d="M50 10 C60 0 90 0 90 40 C90 70 50 90 50 90 C50 90 10 70 10 40 C10 0 40 0 50 10" fill="currentColor" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <span className="text-sm uppercase tracking-[0.4em] opacity-60 mb-6 block font-serif-elegant">Special Proposal</span>
          <h2 className="text-4xl md:text-5xl font-romantic italic text-[#701111]/80">
            Will you be my
          </h2>
          <h1 className="text-7xl md:text-9xl font-romantic mt-4 text-[#701111] drop-shadow-sm">
            {VALENTINE_DATA.recipientName}
          </h1>
        </motion.div>

        <div className="mt-16 w-full flex justify-center items-center gap-2 md:gap-6 px-4">
           {[10, 11, 12, 13, 14, 15].map((num) => (
             <motion.div 
               key={num} 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: (num-10) * 0.1 }}
               viewport={{ once: true }}
               className={`relative flex flex-col items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-500 ${
                 num === 14 
                 ? 'bg-[#701111] text-white shadow-lg scale-125 z-10' 
                 : 'text-[#701111]/30 hover:text-[#701111]/60'
               }`}
             >
               <span className="text-xl md:text-2xl font-serif-elegant font-medium">{num}</span>
               {num === 14 && (
                 <motion.div 
                   className="absolute -bottom-6 text-[10px] tracking-widest uppercase font-bold text-[#701111]"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                 >
                   The Day
                 </motion.div>
               )}
             </motion.div>
           ))}
        </div>
        
        <div className="mt-20 flex items-center gap-4 opacity-30">
          <div className="h-[0.5px] w-24 bg-[#701111]"></div>
          <div className="text-lg">❦</div>
          <div className="h-[0.5px] w-24 bg-[#701111]"></div>
        </div>
      </section>

      {(isValidPhoto(0) || isValidPhoto(1) || isValidPhoto(2)) && (
        <section className="px-6 py-12 relative max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {isValidPhoto(0) && (
              <div className="col-span-1 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <PhotoFrame src={photos[0]} shape="rect" />
              </div>
            )}
            {isValidPhoto(1) && (
              <div className="col-span-1 transform rotate-6 translate-y-8 hover:rotate-0 transition-transform duration-500">
                <PhotoFrame src={photos[1]} shape="heart" />
              </div>
            )}
            {isValidPhoto(2) && (
              <div className="col-span-1 md:col-span-1 transform -rotate-6 hidden md:block hover:rotate-0 transition-transform duration-500">
                <PhotoFrame src={photos[2]} shape="circle" />
              </div>
            )}
          </div>
        </section>
      )}

      <section className="px-6 py-20 bg-grid">
        <motion.div 
          className="bg-white p-10 md:p-16 max-w-2xl mx-auto shadow-2xl border border-[#fce4e4] rounded-sm relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#701111] rounded-full flex items-center justify-center text-[#d4af37] rotate-12 shadow-xl border-4 border-[#8b1515]">
            <span className="text-2xl font-romantic">{VALENTINE_DATA.initials}</span>
          </div>
          
          <h3 className="text-4xl font-romantic text-center mb-10 text-[#701111]">{VALENTINE_DATA.letter.greeting}</h3>
          <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line font-handwriting italic opacity-90">
            {VALENTINE_DATA.letter.body}
          </div>
          <p className="mt-12 text-2xl font-romantic text-right text-[#701111]">{VALENTINE_DATA.letter.closing}</p>
        </motion.div>
      </section>

      {(isValidPhoto(5) || isValidPhoto(6) || isValidPhoto(7) || isValidPhoto(8)) && (
        <section className="px-6 py-12 max-w-5xl mx-auto">
          <motion.h3 
            className="text-4xl font-romantic text-center mb-12 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Captured Moments
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {isValidPhoto(5) && <div className="transform rotate-2"><PhotoFrame src={photos[5]} shape="rect" /></div>}
             {isValidPhoto(6) && <div className="transform -rotate-3"><PhotoFrame src={photos[6]} shape="circle" /></div>}
             {isValidPhoto(7) && <div className="transform rotate-1"><PhotoFrame src={photos[7]} shape="rect" /></div>}
             {isValidPhoto(8) && <div className="transform -rotate-2"><PhotoFrame src={photos[8]} shape="heart" /></div>}
          </div>
        </section>
      )}

      <section className="px-6 py-24 text-center relative bg-[#701111] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-stripes"></div>
        <motion.h2 className="text-6xl md:text-8xl font-romantic mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>Save the date</motion.h2>
        <div className="flex justify-center gap-4 text-3xl md:text-5xl font-serif-elegant tracking-[0.3em] mb-6">
          <span>{VALENTINE_DATA.saveTheDate.day}</span>
          <span className="opacity-50">•</span>
          <span>{VALENTINE_DATA.saveTheDate.month}</span>
          <span className="opacity-50">•</span>
          <span>{VALENTINE_DATA.saveTheDate.year}</span>
        </div>
        <div className="h-[1px] w-12 bg-white/40 mx-auto mb-6"></div>
        <p className="text-2xl opacity-90 font-romantic italic">{VALENTINE_DATA.saveTheDate.time}</p>
        <p className="text-sm mt-4 tracking-widest uppercase font-serif-elegant opacity-70">{VALENTINE_DATA.saveTheDate.location}</p>
      </section>

      <section className="px-6 py-20 flex flex-col items-center bg-[#fffafb]">
        {/* Gambar Tulip tanpa border telah dihapus dari sini */}
        
        {(isValidPhoto(3) || isValidPhoto(4)) && (
          <div className="grid grid-cols-2 gap-10 max-w-2xl w-full px-4">
             {isValidPhoto(3) && <div className="transform rotate-3"><PhotoFrame src={photos[3]} shape="rect" /></div>}
             {isValidPhoto(4) && <div className="transform -rotate-6"><PhotoFrame src={photos[4]} shape="heart" /></div>}
          </div>
        )}

        <motion.h2 className="text-5xl md:text-7xl font-romantic mt-24 mb-10 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>I love you infinitely</motion.h2>
        <div className="flex gap-6">
          {[1,2,3].map(i => (
            <motion.div key={i} className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-[#f8d7da]' : 'bg-[#701111]'}`} animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} />
          ))}
        </div>
      </section>

      <footer className="text-center py-12 opacity-30 text-[10px] uppercase tracking-[0.5em] font-serif-elegant border-t border-[#fce4e4]">
        Handcrafted for my {VALENTINE_DATA.recipientName}
      </footer>
    </div>
  );
};

export default ValentineCard;
