

import {Translate} from 'translate'

export default async function translateText(text:string, langFrom:string) {
    // const language = navigator.language.split('-')[0]
    // console.log(language);
    console.log(langFrom);
    
   if (langFrom === '') return text
    
    let detectedLanguage = ''

    
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

