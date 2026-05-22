import { useState } from "react";
import { ModalBase } from "./ModalBase";
import { Navigation, Star, Send, Camera } from "lucide-react";
import { useTheme } from "../ThemeContext";

export function SobreModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { isDarkMode } = useTheme();

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-6 mt-2 relative">
        <h2
          className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent transition-colors duration-700 ${isDarkMode ? "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600" : "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"}`}
        >
          A CENA NOTURNA PREMIUM
        </h2>
        <div className="h-[2px] w-12 bg-yellow-500/50 mx-auto mt-4 rounded-full" />
      </div>
      <div
        className={`space-y-4 text-[13px] sm:text-[15px] font-medium leading-relaxed transition-colors duration-700 ${isDarkMode ? "text-neutral-300" : "text-neutral-600"}`}
      >
        <p>
          A{" "}
          <strong className="text-yellow-500 font-semibold tracking-wide">
            La Belli Master Hall
          </strong>{" "}
          nasceu em Ponta Grossa com a proposta de transformar eventos em{" "}
          <strong
            className={`transition-colors duration-700 ${isDarkMode ? "text-white" : "text-neutral-900"}`}
          >
            experiências inesquecíveis
          </strong>
          . Muito além de uma casa de shows, tornando-se referência em
          entretenimento VIP.
        </p>
        <div
          className={`p-5 rounded-xl border my-6 shadow-sm relative overflow-hidden group transition-colors duration-700 ${isDarkMode ? "bg-neutral-900 border-yellow-500/20 hover:border-yellow-400/40" : "bg-neutral-50/80 border-yellow-200/60 hover:border-yellow-400/50"}`}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-100/0 via-yellow-200/20 to-yellow-100/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          <p
            className={`italic relative z-10 text-center leading-snug font-medium transition-colors duration-700 ${isDarkMode ? "text-yellow-400" : "text-yellow-700"}`}
          >
            "Estrutura moderna, grandes atrações e um ambiente pensado para quem
            busca viver momentos únicos."
          </p>
        </div>
        <p>
          Com atmosfera sofisticada, iluminação impactante e espaços exclusivos,
          marcamos presença ao receber festas temáticas, DJs renomados, shows
          nacionais e eventos de alto padrão.
        </p>
        <div
          className={`mt-8 text-center pt-5 border-t transition-colors duration-700 ${isDarkMode ? "border-neutral-800" : "border-neutral-200"}`}
        >
          <span className="block text-yellow-600 font-semibold pb-2 tracking-[0.2em] text-[10px] uppercase">
            O Palco das Melhores Noites
          </span>
        </div>
      </div>
    </ModalBase>
  );
}

export function ReservaModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [reason, setReason] = useState("");
  const { isDarkMode } = useTheme();

  const handleConfirm = () => {
    if (!name.trim()) return alert("Por favor, informe seu nome.");
    const text = `Olá! Tenho interesse em contato/reserva.\n\n*Nome:* ${name}\n*Idade:* ${age}\n*Motivo:* ${reason}`;
    const url = `https://wa.me/5542999734758?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-6 mt-1">
        <h2
          className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent transition-colors duration-700 mb-2 ${isDarkMode ? "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600" : "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"}`}
        >
          Reservas & VIP
        </h2>
        <p
          className={`text-xs sm:text-sm font-medium transition-colors duration-700 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}
        >
          Preencha os dados e fale com nossa equipe.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-[0.15em] font-semibold mb-1.5 ml-1">
            Nome Completo
          </label>
          <input
            type="text"
            placeholder="Ex: João da Silva"
            className={`w-full border rounded-xl px-4 py-3.5 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all text-sm shadow-sm ${isDarkMode ? "bg-neutral-800 border-neutral-700 placeholder-neutral-500 text-neutral-200" : "bg-white border-neutral-200 placeholder-neutral-400 text-neutral-800"}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-[0.15em] font-semibold mb-1.5 ml-1">
            Idade
          </label>
          <input
            type="number"
            placeholder="Sua Idade"
            className={`w-full border rounded-xl px-4 py-3.5 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all text-sm shadow-sm ${isDarkMode ? "bg-neutral-800 border-neutral-700 placeholder-neutral-500 text-neutral-200" : "bg-white border-neutral-200 placeholder-neutral-400 text-neutral-800"}`}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-[0.15em] font-semibold mb-1.5 ml-1">
            Motivo do Contato
          </label>
          <input
            type="text"
            placeholder="Ex: Reserva de Camarotes, Aniversário"
            className={`w-full border rounded-xl px-4 py-3.5 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all text-sm shadow-sm ${isDarkMode ? "bg-neutral-800 border-neutral-700 placeholder-neutral-500 text-neutral-200" : "bg-white border-neutral-200 placeholder-neutral-400 text-neutral-800"}`}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <button
          onClick={handleConfirm}
          className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-yellow-500 hover:from-yellow-400 hover:to-yellow-400 text-white font-bold rounded-xl px-4 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-[0_8px_20px_rgba(234,179,8,0.3)]"
        >
          <Send className="w-4 h-4" />
          <span className="tracking-wide text-[13px] sm:text-sm">
            Confirmar no WhatsApp
          </span>
        </button>
      </div>
    </ModalBase>
  );
}

export function LocationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { isDarkMode } = useTheme();

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-6 mt-1">
        <h2
          className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent transition-colors duration-700 mb-2 ${isDarkMode ? "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600" : "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"}`}
        >
          Localização
        </h2>
        <p
          className={`text-[11px] sm:text-xs font-medium leading-snug transition-colors duration-700 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}
        >
          R. Prefeito Campos Melo, 2197 - Oficinas
          <br />
          Ponta Grossa - PR, 84036-120
        </p>
      </div>
      <div
        className={`rounded-xl overflow-hidden border shadow-md relative aspect-[4/3] sm:aspect-video mt-4 transition-colors duration-700 ${isDarkMode ? "border-neutral-800 bg-neutral-900" : "border-neutral-200 bg-neutral-50"}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.8227544660954!2d-50.163124624621084!3d-25.107860577768506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a5e64d3736f%3A0x6e73c518d0240367!2sLabelli%20Master%20Hall!5e0!3m2!1spt-BR!2sbr!4v1779469377241!5m2!1spt-BR!2sbr"
          className="w-full h-full border-0 absolute inset-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <button
        onClick={() => {
          window.open(
            "https://maps.google.com/?q=Labelli+Master+Hall+Ponta+Grossa",
            "_blank",
          );
          onClose();
        }}
        className={`w-full mt-6 font-bold rounded-xl px-4 py-3.5 sm:py-4 flex items-center justify-center gap-2 transition-all border group shadow-sm text-[13px] sm:text-sm ${isDarkMode ? "bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700 hover:border-yellow-500" : "bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-yellow-400"}`}
      >
        <Navigation className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
        <span className="tracking-wide">Abrir no Mapa </span>
      </button>
    </ModalBase>
  );
}

export function AvaliacaoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const { isDarkMode } = useTheme();

  const handleStarClick = (value: number) => {
    setRating(value);
    if (value === 5) {
      setTimeout(() => {
        window.open(
          "https://search.google.com/local/writereview?placeid=ChIJb3PTZF4a6JQRZwMk0BjFc24",
          "_blank",
        );
        onClose();
        setRating(0); // reset
      }, 300);
    } else {
      setTimeout(() => setShowFeedback(true), 400);
    }
  };

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setShowFeedback(false);
        setRating(0);
      }}
    >
      <div className="text-center mb-6 mt-1">
        <h2
          className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent transition-colors duration-700 mb-2 ${isDarkMode ? "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600" : "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"}`}
        >
          Avalie sua Experiência
        </h2>
      </div>

      {!showFeedback ? (
        <div className="flex flex-col items-center justify-center py-6">
          <p
            className={`text-[13px] sm:text-sm font-medium mb-8 text-center px-4 transition-colors duration-700 ${isDarkMode ? "text-neutral-300" : "text-neutral-600"}`}
          >
            Como foi sua experiência na La Belli Master Hall?
          </p>
          <div className="flex gap-2 sm:gap-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => handleStarClick(star)}
                className="transform transition-transform hover:scale-110 focus:outline-none p-1 sm:p-2"
              >
                <Star
                  className={`w-9 h-9 sm:w-11 sm:h-11 border-none transition-colors ${
                    star <= (hoverRating || rating)
                      ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]"
                      : "text-neutral-300 stroke-[1.5]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <form
          action="https://formsubmit.co/contato@labellimasterhall.com"
          method="POST"
          className="space-y-4 animate-[fade-in_0.5s_ease-out]"
        >
          <p className="text-[13px] sm:text-sm text-center text-yellow-600 font-semibold mb-5 px-2">
            O que houve e como podemos melhorar?
          </p>
          <input
            type="hidden"
            name="_subject"
            value="Novo Feedback - La Belli Master Hall"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="rating" value={rating} />

          <textarea
            name="feedback"
            placeholder="Conte-nos o que aconteceu e o que faltou para a experiência ser perfeita..."
            className={`w-full border rounded-xl px-4 py-4 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all shadow-sm min-h-[140px] resize-none text-sm ${isDarkMode ? "bg-neutral-800 border-neutral-700 placeholder-neutral-500 text-neutral-200" : "bg-white border-neutral-200 placeholder-neutral-400 text-neutral-800"}`}
            required
          />
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-yellow-500 to-yellow-500 hover:from-yellow-400 hover:to-yellow-400 text-white font-bold rounded-xl px-4 py-3.5 flex items-center justify-center transition-all shadow-[0_4px_15px_rgba(234,179,8,0.3)] hover:scale-[1.02]"
          >
            Enviar Feedback
          </button>
        </form>
      )}
    </ModalBase>
  );
}

export function DevModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const { isDarkMode } = useTheme();

  const handleDevContact = () => {
    if (!name.trim()) return alert("Por favor, informe seu nome.");
    const text = `Olá, me chamo ${name}. Vi o link da La Belli Master Hall e quero saber como ter um site incrível e elegante igual a este! 🚀`;
    const url = `https://wa.me/5541988710303?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-6 mt-2">
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center mx-auto mb-5 text-yellow-500 transition-colors duration-700 ${isDarkMode ? "bg-neutral-800 border-yellow-500/40 shadow-[0_0_20px_rgba(234,179,8,0.15)]" : "bg-white border-yellow-300 shadow-[0_4px_15px_rgba(234,179,8,0.2)]"}`}
        >
          <Camera className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <h2
          className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent transition-colors duration-700 mb-2 ${isDarkMode ? "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600" : "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"}`}
        >
          Seu Site Premium
        </h2>
        <p
          className={`text-[11px] sm:text-[13px] font-medium leading-relaxed max-w-xs mx-auto transition-colors duration-700 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}
        >
          Este é um portal digital desenvolvido por{" "}
          <strong
            className={`font-bold transition-colors duration-700 ${isDarkMode ? "text-white" : "text-neutral-800"}`}
          >
            InteligenciArte.IA
          </strong>
          .
        </p>
        <button
          onClick={() =>
            window.open("https://instagram.com/inteligenciarte.ia", "_blank")
          }
          className="text-yellow-600 text-[11px] sm:text-xs font-semibold hover:text-yellow-500 hover:underline mt-2.5 inline-block transition-colors"
        >
          Siga @inteligenciarte.ia no Instagram
        </button>
      </div>

      <div
        className={`border rounded-xl p-5 mb-2 text-center shadow-sm transition-colors duration-700 ${isDarkMode ? "bg-neutral-800/50 border-neutral-700" : "bg-neutral-50 border-neutral-200"}`}
      >
        <p
          className={`text-[12px] sm:text-[13px] font-medium italic mb-5 leading-snug transition-colors duration-700 ${isDarkMode ? "text-neutral-300" : "text-neutral-600"}`}
        >
          "Quer um site exclusivo, animado e incrível como esse para o seu
          negócio? Fale comigo!"
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Qual o seu nome?"
            className={`w-full border rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all text-center shadow-sm ${isDarkMode ? "bg-neutral-900 border-neutral-700 placeholder-neutral-500 text-neutral-200" : "bg-white border-neutral-200 placeholder-neutral-400 text-neutral-800"}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleDevContact}
            className="w-full bg-gradient-to-r from-neutral-800 to-neutral-900 text-white hover:from-black hover:to-black font-bold tracking-wide rounded-lg px-4 py-3.5 text-[13px] sm:text-sm transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex justify-center items-center gap-2 hover:scale-[1.02]"
          >
            <span>Fazer Orçamento no WhatsApp</span>
            <span className="text-lg leading-none">🚀</span>
          </button>
        </div>
      </div>
    </ModalBase>
  );
}

export function IngressosModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { isDarkMode } = useTheme();

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-6 mt-1">
        <h2
          className={`text-xl sm:text-2xl font-bold bg-clip-text text-transparent transition-colors duration-700 mb-2 ${isDarkMode ? "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600" : "bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"}`}
        >
          Eventos & Ingressos
        </h2>
        <p
          className={`text-xs sm:text-sm font-medium transition-colors duration-700 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}
        >
          Garanta seu lugar nos melhores eventos.
        </p>
      </div>

      <div className="space-y-4">
        {/* Ticket Item */}
        <div
          className={`p-4 rounded-xl border flex flex-col sm:flex-row gap-4 items-center justify-between transition-colors duration-700 hover:border-yellow-500/50 ${isDarkMode ? "bg-neutral-900/50 border-neutral-800" : "bg-neutral-50 border-neutral-200"}`}
        >
          <div className="flex flex-col text-center sm:text-left w-full sm:w-auto">
            <h3
              className={`font-bold text-lg ${isDarkMode ? "text-white" : "text-neutral-900"}`}
            >
              Japa NK
            </h3>
            <p
              className={`text-xs font-medium mt-1 ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}
            >
              Em breve na La Belli Master Hall
            </p>
          </div>
          <button
            onClick={() =>
              window.open(
                "https://www.ingressonacional.com.br/evento/33753/japa-nk",
                "_blank",
              )
            }
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-500 hover:from-yellow-400 hover:to-yellow-400 text-white font-bold rounded-lg transition-transform transform hover:scale-[1.02] shadow-[0_4px_15px_rgba(234,179,8,0.3)] text-sm whitespace-nowrap"
          >
            Comprar Ingresso
          </button>
        </div>
      </div>
    </ModalBase>
  );
}
