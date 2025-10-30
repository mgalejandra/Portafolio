import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
  const { t } = useLanguage();
  return (
    <Typewriter
      options={{
        strings: t.type,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
