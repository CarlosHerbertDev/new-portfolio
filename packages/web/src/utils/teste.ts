
import { Apidata } from "@interfaces/types";
import translateText from "./translateDataApi";



export async function traduzirObjetos(array: Apidata[], lang: string) {

    return Promise.all(
      array.map(async (obj) => {
        const novoObjeto:Apidata = { ...obj };
        


        await Promise.all(
            Object.keys(novoObjeto).map(async (chave) => {
              const key = chave as keyof Apidata;
  
              if (typeof novoObjeto[key] === "string") {
                const novo = await translateText(novoObjeto[key] as string, lang);
                novoObjeto[key] = novo 
              }
            })


          );
        
  
        return novoObjeto;

      })
    );
  }