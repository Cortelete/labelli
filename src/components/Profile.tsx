import { motion } from "motion/react";
import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Instagram } from "lucide-react";

interface ProfileProps {
  onLogoClick: () => void;
}

export function Profile({ onLogoClick }: ProfileProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      onLogoClick();
    }, 800);
  };

  return (
    <div className="flex flex-col items-center pt-0 sm:pt-4 pb-0 sm:pb-2 px-2 text-center relative">
      <div className="relative inline-block">
        <motion.div
          onClick={handleClick}
          animate={
            isSpinning ? { rotateY: 720, scale: 1.3 } : { rotateY: 0, scale: 1 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-24 h-24 sm:w-36 sm:h-36 cursor-pointer transition-all duration-300 relative z-10 hover:scale-[1.02]"
        >
          <img
            src={isDarkMode ? "/logo.png" : "/logo2.png"}
            alt="La Belli Logo"
            className="w-full h-full object-contain pointer-events-none"
          />
        </motion.div>

        <motion.a
          href="https://www.instagram.com/labelli_masterhall/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram Oficial"
          className={`absolute -right-1 -bottom-1 sm:-right-2 sm:-bottom-2 p-2 rounded-full backdrop-blur-md border shadow-lg transition-all hover:scale-110 z-20 flex items-center justify-center ${
            isDarkMode
              ? "bg-neutral-900/80 border-yellow-500/40 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
              : "bg-white/90 border-yellow-400 text-yellow-600 shadow-[0_4px_15px_rgba(234,179,8,0.2)]"
          }`}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-2 sm:mt-5 mb-0 sm:mb-1 w-full max-w-[240px] sm:max-w-[320px] mx-auto flex justify-center items-center"
      >
        <img
          src={isDarkMode ? "/fonte.png" : "/fonte2.png"}
          alt="LA BELLI MASTER HALL"
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center justify-center space-y-0.5 sm:space-y-1 mt-1 sm:mt-2"
      >
        <p
          className={`text-[11px] sm:text-sm font-medium tracking-wide transition-colors duration-700 ${isDarkMode ? "text-neutral-300" : "text-neutral-600"}`}
        >
          O palco das melhores noites de Ponta Grossa ✨
        </p>
        <p
          className={`text-[9px] sm:text-[11px] font-medium flex items-center justify-center flex-wrap gap-1 sm:gap-1.5 opacity-90 tracking-wide uppercase mt-0.5 sm:mt-1 transition-colors duration-700 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}
        >
          <span>Shows nacionais</span>
          <span
            className={`text-[6px] sm:text-[8px] transition-colors duration-700 ${isDarkMode ? "text-yellow-500/60" : "text-yellow-500/80"}`}
          >
            ●
          </span>
          <span>Festas exclusivas</span>
          <span
            className={`text-[6px] sm:text-[8px] transition-colors duration-700 ${isDarkMode ? "text-yellow-500/60" : "text-yellow-500/80"}`}
          >
            ●
          </span>
          <span>Experiências únicas</span>
        </p>
      </motion.div>
    </div>
  );
}
