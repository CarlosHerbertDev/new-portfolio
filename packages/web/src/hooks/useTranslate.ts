
import translateText from "@utils/translateDataApi";
import { useEffect } from "react";


export function useTranslation(language: string, loading: boolean) {
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
            // const test = localStorage.getItem(`teste${index}`)
            // if (test) {
            //   el.textContent = test; // Corrigido: Usando "test" ao invés de "teste"
            // } else {
            //   el.textContent = translatedText;
            // }          
            el.textContent = translatedText;

          } else if (language === 'pt'){
            const novo = localStorage.getItem(`chavezinha${index}`)
            // localStorage.setItem(`teste${index}`, originalText)
            el.textContent = novo
          }
          }
        })
      );
    };
    // if (loading) {
      translateElements();
    // }
  }, [language]); // Atualiza quando a linguagem mudar
}