
import {Translate} from 'translate'

export default async function translateText(text:string, langFrom:string) {
    const language = navigator.language.split('-')[0]


    if(langFrom) if(langFrom === language) return text

    if(language === "en" && !langFrom) return text

    const translator =  Translate({engine: "google", from: langFrom || "en", to: language});

    const result = await translator(text)

    return result;

}

translateText("what?", "en").then(console.log)