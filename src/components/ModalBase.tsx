import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ModalBase({ isOpen, onClose, children }: ModalBaseProps) {
  const [mounted, setMounted] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 !m-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={`absolute inset-0 backdrop-blur-md transition-colors duration-700 ${isDarkMode ? "bg-black/70" : "bg-neutral-900/40 backdrop-blur-sm"}`}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`relative w-full max-w-[92vw] sm:max-w-md lg:max-w-lg rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10 transition-colors duration-700 ${isDarkMode ? "bg-neutral-900 border border-yellow-500/30" : "bg-white border border-yellow-200/50"}`}
          >
            {/* Elegant Header glow */}
            <div
              className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-80 ${isDarkMode ? "via-yellow-400 opacity-60 h-[2px]" : "via-yellow-400"}`}
            />

            <button
              onClick={onClose}
              className={`absolute top-4 right-4 hover:rotate-90 transition-all duration-300 z-10 p-1 ${isDarkMode ? "text-neutral-500 hover:text-yellow-400" : "text-neutral-400 hover:text-yellow-500"}`}
            >
              <X className="w-5 h-5" />
            </button>
            <div
              className={`p-5 sm:p-8 overflow-y-auto relative z-0 ${isDarkMode ? "custom-scrollbar" : "custom-scrollbar-light"}`}
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
