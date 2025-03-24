// async function translateText(text: string, targetLang: string): Promise<string> {
//     const response = await fetch("https://libretranslate.com/translate", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             q: text,
//             source: "auto",
//             target: targetLang,
//             format: "text",
//             api_key: "", // Pode ser vazio para testes
//         }),
//     });

//     const data = await response.json();
//     return data.translatedText;
// }

// // Exemplo de uso
// translateText("Olá, mundo!", "en").then(console.log);