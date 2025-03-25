import { getInfo } from "@api/service"
import { Apidata } from "@interfaces/types";
import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import translateText from "./teste";


export function Projects() {
  const [projects, setProjects] = useState<string[]>([]);
  // const [text, setText] = useState('');
  // const [teste, setTeste] = useState('pt')
  // const [translated, setTranslated] = useState<string[]>([])
  const texts = ["Olá, mundo!", "Bem-vindo ao site!", "Tradução automática"]

  const [language, setLanguage] = useState<string>('en');
  useEffect(() => {
    const fecthdetails = async () => {
      // const response = await getInfo('curriculum')
      translateText('o que?', 'en').then(console.log)
   
      
    
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
            

    <div>
      <h1> {projects[2]}</h1>
    </div>


    <button onClick={(() => language === 'pt' ? setLanguage('en') : setLanguage('pt'))}>
tradução 

    </button>



      </>
  )
}

