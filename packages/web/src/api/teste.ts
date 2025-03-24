import axios from "axios";

export async function translateText(text:string, targetLang:string) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/translate/", {
            text: text,
            target_lang: targetLang
        });

        console.log("Tradução:", response.data.translated_text);
        return response.data.translated_text;
    } catch (error) {
        console.error("Erro ao traduzir:", error);
    }
}