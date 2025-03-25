import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import axios from 'axios';
import Backend from 'i18next-http-backend';


// export async function translateText(text:string[], targetLang:string) {
//     try {
//         const textTranslate = text.map(async (text) => {
//         const response = await axios.post("http://127.0.0.1:8000/translate/", {
//             text: text,
//             target_lang: targetLang
//         });
//         console.log("Tradução:", response.data.translated_text);
//         return response.data.translated_text;
//     })
//     return Promise.all(textTranslate)
//     } catch (error) {
//         console.error("Erro ao traduzir:", error);
//     }
// }

// Função para fazer a tradução via API

// Função de tradução via API (exemplo)
const fetchTranslation = async (language: string, key: string) => {
    try {
      // Chame sua API de tradução aqui
      const response = await axios.post('https://sua-api-de-traducao.com/translate', {
        text: key,
        target_lang: language,
      });
      return response.data.translated_text || key; // Supondo que a API retorne 'translated_text'
    } catch (error) {
      console.error('Erro ao traduzir:', error);
      return key; // Retorna o texto original em caso de erro
    }
  };
  
  // Configuração do i18next para usar a API para traduções
  i18n
    .use(initReactI18next) // Conecta o i18next com o React
    .init({
      lng: 'en', // Idioma padrão
      fallbackLng: 'en', // Idioma de fallback caso a tradução não exista
      interpolation: {
        escapeValue: false, // O React já escapa os valores automaticamente
      },
      backend: {
        // Definindo o caminho dinâmico para carregar as traduções via API
        loadPath: async (language: string, namespace: string) => {
          const translations = await fetchTranslation(language, namespace); 
          return translations; // Retorna o texto traduzido
        },
      },
      nsSeparator: false, // Impede problemas com separadores de namespaces
      resources: {}, // Não precisamos de arquivos de tradução estáticos
    });
  
  export { i18n };