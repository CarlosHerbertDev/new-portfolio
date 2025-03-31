
import {Translate} from 'translate'

export default async function translateText(text:string, langFrom:string) {

    let detectedLanguage = ''
    
    if (langFrom === detectedLanguage) return text
    
    if (langFrom === 'en') {
        detectedLanguage = 'pt'
    } else if (langFrom === 'pt') {
        detectedLanguage = 'en'
    }

    if(detectedLanguage === langFrom) return text
    
    const translator = Translate({engine: "google", from:detectedLanguage, to: langFrom});

    const result = await translator(text)

    return result;

}

