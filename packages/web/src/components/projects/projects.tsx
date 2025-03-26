
import { useEffect, useState } from "react"
import translateText from "./teste";
import { Apidata } from "@interfaces/types";
import { getInfo } from "@api/service";


export function Projects() {
  // const [text, setText] = useState('');
  // const [teste, setTeste] = useState('pt')
  // const [translated, setTranslated] = useState<string[]>([])
const  [project, setProject] = useState<Apidata[]>([])

  const [language, setLanguage] = useState<string>('pt');
  useEffect(() => {
    const fecthdetails = async () => {
      const elements = Array.from(document.querySelectorAll('h1, h2, p, span, li')); // Converte a NodeList em Array
      
      // Usando map para traduzir os textos
        await Promise.all(
          elements.map(async (el) => {
            const originalText = el.textContent || '';
            if (originalText) {
              const translatedText = await translateText(originalText, language);
              el.textContent = translatedText;
            }
          })
        );
      
      const response = await getInfo('curriculum')
      setProject(response)
      


      // const trans = response.map((project) => {
      //   return {title: project.title, description: project.description}
      // })
      
      // const translated = await translateText(texts, 'en')
      // const tran = await translateText(trans, 'en')
      // setTranslated([translated, tran])
      

      

    }
    fecthdetails()
  }, [language])
  
  // function testando(text: string) {
  //   // const translated = await translateText(text, lang)
  //   // return translated

  //   setText(text)
  //   return text
  // }


  return (
    <>
            
    
    <h1>Projetos</h1>

   
    {project.map((project) => {
      return (
        <div key={project._id}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      )
    
    })}
      
      <button onClick={(() => language === 'pt' ? setLanguage('en') : setLanguage('pt'))}>
      tradução 
    </button>

      </>
  )
}

