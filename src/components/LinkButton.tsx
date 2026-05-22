import { motion } from "motion/react";
import { ReactNode } from "react";
import { useTheme } from "../ThemeContext";

interface LinkButtonProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  onClick: () => void;
  delay?: number;
}

export function LinkButton({
  title,
  subtitle,
  icon,
  onClick,
  delay = 0,
}: LinkButtonProps) {
  const { isDarkMode } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative w-full group overflow-hidden rounded-lg backdrop-blur-md transition-all duration-300 ${
        isDarkMode
          ? "bg-neutral-900/40 border border-neutral-800/50 hover:border-yellow-500/50 hover:bg-neutral-900/60 shadow-lg"
          : "bg-white/40 border border-white/60 hover:border-yellow-400 hover:bg-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(234,179,8,0.15)]"
      }`}
    >
      {/* Subtle animated gradient background on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-flow ${
          isDarkMode
            ? "bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0"
            : "bg-gradient-to-r from-yellow-100/0 via-yellow-200/20 to-yellow-100/0"
        }`}
      />

      <div className="flex items-center px-3 sm:px-4 py-2.5 sm:py-4 w-full relative z-10 min-h-[3rem] sm:min-h-[4rem]">
        {/* Icon fixed to left */}
        <div
          className={`absolute left-4 sm:left-6 transition-all duration-300 ${
            isDarkMode
              ? "text-yellow-500 group-hover:text-yellow-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
              : "text-yellow-500 group-hover:text-yellow-600 group-hover:scale-110"
          }`}
        >
          {icon}
        </div>

        {/* Text Centered */}
        <div className="w-full flex flex-col items-center justify-center px-10 sm:px-12">
          <span
            className={`text-[12px] sm:text-[15px] tracking-wider transition-colors duration-700 ${isDarkMode ? "font-medium text-neutral-100" : "font-semibold text-neutral-800"}`}
          >
            {title}
          </span>
          {subtitle && (
            <span
              className={`text-[9px] sm:text-[11px] mt-0 sm:mt-0.5 text-center max-w-[200px] sm:max-w-[240px] leading-tight transition-colors duration-700 ${isDarkMode ? "text-neutral-400 font-light" : "text-neutral-500 font-medium"}`}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
}
