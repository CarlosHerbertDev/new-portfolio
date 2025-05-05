
import { Apidata } from "@interfaces/types";
import translateText from "./translateTexts";

export async function traduzirObjetos(array: Apidata[], lang: string) {

    return Promise.all(
      array.map(async (obj) => {
        const novoObjeto:Apidata = { ...obj };

        await Promise.all(
            Object.keys(novoObjeto).map(async (key) => {
                 
            if (lang === 'en' && (key === 'description' || key === 'title')) {
                localStorage.setItem(`${key}`, novoObjeto[key])
              }else if (lang === 'pt' && (key === 'description' || key === 'title')) {
                const getOriginalText = localStorage.getItem(`{key}`)
                console.log(getOriginalText, 'getitem')
                
                if (getOriginalText !== null) {
                  if (key === 'description') {
                    console.log(getOriginalText)
                    
                    console.log(novoObjeto[key])
                    novoObjeto[key] = `${getOriginalText}`
                    
                    
                  } else if (key === 'title') {
                    novoObjeto[key] = getOriginalText;
                  }
                }
                return
                }

              if (key === 'description') {
                const getOriginalText = await translateText(novoObjeto[key], lang);
                novoObjeto.description = getOriginalText 
              }

              if (key === 'title') {
                const getOriginalText = await translateText(novoObjeto[key], lang);
                novoObjeto.title = getOriginalText 
              }

            })

          );
        console.log(novoObjeto);
        
        return novoObjeto;

      })
    );
  }