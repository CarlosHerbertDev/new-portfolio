
import translateText from "@utils/translateDataApi";
import { useEffect } from "react";


export function useTranslation(language: string) {
  useEffect(() => {
    const translateElements = async () => {
      const elements = Array.from(document.querySelectorAll("h2, p, span"));

      await Promise.all(
        elements.map(async (el) => {
          const originalText = el.textContent || "";
          if (originalText) {
            const translatedText = await translateText(originalText, language);
            el.textContent = translatedText;
          }
        })
      );
    };

    translateElements();
  }, [language]); // Atualiza quando a linguagem mudar
}