import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const items = [
    { id: "es", label: "ES", flag: "🇪🇸", aria: "Cambiar a Español" },
    { id: "en", label: "EN", flag: "🇬🇧", aria: "Switch to English" },
    { id: "fr", label: "FR", flag: "🇫🇷", aria: "Passer en Français" },
  ];

  return (
    <div className="lang-toggle" role="group" aria-label="Language selector">
      {items.map((it) => (
        <motion.button
          key={it.id}
          className={`lang-btn ${lang === it.id ? "active" : ""}`}
          onClick={() => setLang(it.id)}
          aria-pressed={lang === it.id}
          aria-label={it.aria}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <span aria-hidden>{it.flag}</span>
          <span className="lang-code">{it.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

export default LanguageToggle;


