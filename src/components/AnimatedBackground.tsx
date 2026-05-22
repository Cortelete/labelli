import { motion } from 'motion/react';
import { useTheme } from '../ThemeContext';

export function AnimatedBackground() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`fixed inset-0 z-[-1] flex items-center justify-center overflow-hidden transition-colors duration-1000 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-neutral-50'}`}>
      {/* Subtle animated gradients for luxury feel */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: isDarkMode ? [0.15, 0.25, 0.15] : [0.3, 0.5, 0.3],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className={`absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] rounded-full blur-[100px] pointer-events-none transition-colors duration-1000 ${isDarkMode ? 'bg-yellow-600/30' : 'bg-yellow-200/40'}`}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: isDarkMode ? [0.1, 0.2, 0.1] : [0.2, 0.4, 0.2],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className={`absolute -bottom-[10%] -right-[10%] w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ${isDarkMode ? 'bg-yellow-600/20' : 'bg-yellow-300/30'}`}
      />
      
      {/* Texture overlay for extra sophistication */}
      <div className={`absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none transition-opacity duration-1000 ${isDarkMode ? 'opacity-[0.03]' : 'opacity-[0.02]'}`} />
    </div>
  );
}
