import { useTheme } from '../ThemeContext';

export function Footer({ onDevClick }: { onDevClick: () => void }) {
  const { isDarkMode } = useTheme();

  return (
    <div className="mt-2 sm:mt-8 pb-0 sm:pb-2 flex flex-col items-center justify-center text-center">
      <button 
        onClick={onDevClick}
        className={`text-[11px] sm:text-xs font-light transition-colors flex items-center gap-1 group py-2 px-4 rounded-full ${isDarkMode ? 'text-neutral-500 hover:text-yellow-200 hover:bg-neutral-900/50' : 'text-neutral-600 hover:text-yellow-600 hover:bg-white/50'}`}
      >
        Desenvolvido por
        <span className={`font-medium bg-clip-text text-transparent transition-all tracking-wide ${isDarkMode ? 'bg-gradient-to-r from-neutral-300 to-white group-hover:from-yellow-200 group-hover:to-yellow-500' : 'bg-gradient-to-r from-neutral-700 to-black group-hover:from-yellow-600 group-hover:to-yellow-800'}`}>
          InteligenciArte.IA ✨
        </span>
      </button>
    </div>
  );
}
