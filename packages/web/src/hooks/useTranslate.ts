
import translateText from "@utils/translateDataApi";
import { useEffect } from "react";


export function useTranslation(language: string) {
  useEffect(() => {
    const translateElements = async () => {
      const elements = Array.from(document.querySelectorAll("h2, p, span"));

      await Promise.all(
        elements.map(async (el, index) => {
          const originalText = el.textContent || "";
          if (originalText) {
            const translatedText = await translateText(originalText, language);

          if (language === 'en') {
            localStorage.setItem(`chavezinha${index}`, originalText)
            const eita = localStorage.getItem(`cha${index}`)
            console.log(eita)
            
            eita ? el.textContent = eita : el.textContent = translatedText
          } else if (language === 'pt'){
            localStorage.setItem(`cha${index}`, originalText)
            const novo = localStorage.getItem(`chavezinha${index}`)
            el.textContent = novo
          }
          }
        })
      );
    };

    translateElements();
  }, [language]); // Atualiza quando a linguagem mudar
}