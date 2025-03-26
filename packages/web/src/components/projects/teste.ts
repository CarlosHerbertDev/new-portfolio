
import { franc } from 'franc-min';
import {Translate} from 'translate'

export default async function translateText(text:string, langFrom:string) {
    // const language = navigator.language.split('-')[0]
    
    let detectedLanguage = ''
    console.log(detectedLanguage);
    
    if (langFrom === 'en') {
        detectedLanguage = 'pt'
    } else if (langFrom === 'pt') {
        detectedLanguage = 'en'
    }

    if(detectedLanguage === langFrom) return text
    
    // Caso o idioma não seja detectado corretamente, use o idioma padrão (inglês)

    const translator = Translate({engine: "google", from:detectedLanguage, to: langFrom});

    const result = await translator(text)

    return result;

}

