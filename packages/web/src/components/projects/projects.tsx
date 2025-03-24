import { getInfo } from "@api/service"
import { translateText } from "@api/teste";
import { Apidata } from "@interfaces/types";
import { useEffect, useState } from "react"


export function Projects() {
  const [projects, setProjects] = useState<Apidata[]>([]);
  // const [text, setText] = useState('en');
  const [teste, setTeste] = useState('en')
  const [texts, setTexts] = useState<string[]>(["Olá, mundo!", "Bem-vindo ao site!", "Tradução automática"])

  useEffect(() => {
    const fecthdetails = async () => {
      const response = await getInfo('curriculum')
      const translated = await translateText(texts, teste)
      console.log(translated);
      setTexts(translated ?? [])
      setProjects(response)
      console.log(response)
      

      

    }
    fecthdetails()
  }, [teste])

  console.log(projects);
  
  // async function testando(params: string) {
  //   const translated = await translateText(params, 'en')
  //   return translated
  // }


  return (
    <>
            <h1>
              {texts[1]}
              </h1>
            <button onClick={() => teste === 'en' ? setTeste('pt') : setTeste('en')}>
            {texts[2]}
            </button>
      </>
  )
}

