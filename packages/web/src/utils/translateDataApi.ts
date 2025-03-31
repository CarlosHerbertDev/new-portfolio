
import { Apidata } from "@interfaces/types";
import translateText from "./translateTexts";

export async function traduzirObjetos(array: Apidata[], lang: string) {

    return Promise.all(
      array.map(async (obj) => {
        const novoObjeto:Apidata = { ...obj };

        await Promise.all(
            Object.keys(novoObjeto).map(async (key) => {
                 
            if (lang === 'en' && (key === 'description' || key === 'title')) {
                localStorage.setItem(`chavezinha${key}`, novoObjeto[key])
              }else if (lang === 'pt' && (key === 'description' || key === 'title')) {
                const novo = localStorage.getItem(`chavezinha${key}`)
                console.log(novo, 'getitem')
                
                if (novo !== null) {
                  if (key === 'description') {
                    console.log(novo)
                    
                    console.log(novoObjeto[key])
                    novoObjeto[key] = `${novo}`
                    
                    
                  } else if (key === 'title') {
                    novoObjeto[key] = novo;
                  }
                }
                return
                }

              if (key === 'description') {
                const novo = await translateText(novoObjeto[key], lang);
                novoObjeto.description = novo 
              }

              if (key === 'title') {
                const novo = await translateText(novoObjeto[key], lang);
                novoObjeto.title = novo 
              }

            })

          );
        console.log(novoObjeto);
        
        return novoObjeto;

      })
    );
  }