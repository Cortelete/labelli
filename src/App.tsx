import { useState, useEffect } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Profile } from "./components/Profile";
import { LinkButton } from "./components/LinkButton";
import { Footer } from "./components/Footer";
import {
  SobreModal,
  ReservaModal,
  LocationModal,
  AvaliacaoModal,
  DevModal,
  IngressosModal,
} from "./components/Modals";
import { ModalType } from "./types";
import {
  Instagram,
  MapPin,
  CalendarPlus,
  Star,
  Info,
  Ticket,
} from "lucide-react";
import { ThemeContext } from "./ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const hour = new Date().getHours();
    return hour < 6 || hour >= 18;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-[#0a0a0a]", "text-neutral-100");
      document.body.classList.remove("bg-[#f8fafc]", "text-neutral-900");
    } else {
      document.body.classList.add("bg-[#f8fafc]", "text-neutral-900");
      document.body.classList.remove("bg-[#0a0a0a]", "text-neutral-100");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const closeModal = () => setActiveModal(null);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        className={`min-h-[100dvh] flex flex-col relative w-full overflow-hidden font-sans transition-colors duration-700 ${isDarkMode ? "dark" : ""}`}
      >
        <ThemeToggle />
        <AnimatedBackground />

        <main className="flex-1 w-full flex items-center justify-center p-2 sm:p-6 relative z-10 py-2 sm:py-10">
          <div
            className={`w-full max-w-md backdrop-blur-xl border rounded-xl sm:rounded-2xl relative overflow-hidden flex flex-col items-center my-auto aspect-[auto] max-h-[95dvh] justify-center transition-colors duration-700 ${
              isDarkMode
                ? "bg-neutral-900/40 border-neutral-800/60 shadow-2xl"
                : "bg-white/60 border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            }`}
          >
            {/* Watermark/Background Image for the Card */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <img
                src={isDarkMode ? "/fundo.png" : "/fundo2.png"}
                alt=""
                className={`w-full h-full object-cover transition-opacity duration-700 ${isDarkMode ? "opacity-[0.15]" : "opacity-[0.12]"}`}
              />
            </div>

            {/* Ambient luxury lights inside the card */}
            <div
              className={`absolute top-0 inset-x-0 h-[1px] z-0 ${isDarkMode ? "bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" : "bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent"}`}
            />
            <div
              className={`absolute top-0 inset-x-0 h-[100px] pointer-events-none z-0 transition-colors duration-700 ${isDarkMode ? "bg-gradient-to-b from-yellow-500/10 to-transparent" : "bg-gradient-to-b from-yellow-200/20 to-transparent"}`}
            />
            <div
              className={`absolute bottom-0 inset-x-0 h-[150px] pointer-events-none z-0 transition-colors duration-700 ${isDarkMode ? "bg-gradient-to-t from-neutral-950 to-transparent" : "bg-gradient-to-t from-white to-transparent"}`}
            />

            {/* Internal Scrolling Container */}
            <div
              className={`relative z-10 w-full h-full overflow-y-auto px-4 py-6 sm:p-8 flex flex-col items-center ${isDarkMode ? "custom-scrollbar" : "custom-scrollbar-light"}`}
            >
              <div className="w-full mb-1 sm:mb-2">
                <Profile onLogoClick={() => setActiveModal("sobre")} />
              </div>

              <div className="flex flex-col gap-2 sm:gap-3.5 mt-1 sm:mt-6 w-full">
                <LinkButton
                  title="Eventos & Ingressos"
                  subtitle="Garanta seu lugar nos melhores shows"
                  icon={<Ticket className="w-4 h-4 sm:w-6 sm:h-6" />}
                  onClick={() => setActiveModal("ingressos")}
                  delay={0.3}
                />

                <LinkButton
                  title="A Essência La Belli"
                  subtitle="Conheça nossa história e conceito"
                  icon={<Info className="w-4 h-4 sm:w-6 sm:h-6" />}
                  onClick={() => setActiveModal("sobre")}
                  delay={0.4}
                />

                <LinkButton
                  title="Reservas & VIP"
                  subtitle="Garanta seu camarote ou lounge"
                  icon={<CalendarPlus className="w-4 h-4 sm:w-6 sm:h-6" />}
                  onClick={() => setActiveModal("reserva")}
                  delay={0.6}
                />

                <LinkButton
                  title="Nossa Localização"
                  subtitle="Veja como chegar até nós"
                  icon={<MapPin className="w-4 h-4 sm:w-6 sm:h-6" />}
                  onClick={() => setActiveModal("localizacao")}
                  delay={0.7}
                />

                <LinkButton
                  title="Avalie seu Momento"
                  subtitle="Sua opinião é valiosa para nós"
                  icon={<Star className="w-4 h-4 sm:w-6 sm:h-6" />}
                  onClick={() => setActiveModal("avaliacao")}
                  delay={0.8}
                />
              </div>

              <div className="relative flex justify-center w-full mt-1 sm:mt-4 pb-2">
                <Footer onDevClick={() => setActiveModal("dev")} />
              </div>
            </div>
          </div>
        </main>

        <SobreModal isOpen={activeModal === "sobre"} onClose={closeModal} />
        <ReservaModal isOpen={activeModal === "reserva"} onClose={closeModal} />
        <LocationModal
          isOpen={activeModal === "localizacao"}
          onClose={closeModal}
        />
        <AvaliacaoModal
          isOpen={activeModal === "avaliacao"}
          onClose={closeModal}
        />
        <DevModal isOpen={activeModal === "dev"} onClose={closeModal} />
        <IngressosModal
          isOpen={activeModal === "ingressos"}
          onClose={closeModal}
        />
      </div>
    </ThemeContext.Provider>
  );
}
