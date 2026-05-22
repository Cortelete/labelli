import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 sm:p-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all hover:scale-110 ${
        isDarkMode 
          ? 'bg-black/20 border-yellow-500/30 text-yellow-500 hover:bg-black/40' 
          : 'bg-white/40 border-white/60 text-yellow-600 hover:bg-white/60 shadow-[0_4px_15px_rgba(234,179,8,0.15)]'
      }`}
      aria-label="Alternar tema"
    >
      {isDarkMode ? <Moon className="w-4 h-4 sm:w-5 sm:h-5" /> : <Sun className="w-4 h-4 sm:w-5 sm:h-5" />}
    </button>
  );
}
