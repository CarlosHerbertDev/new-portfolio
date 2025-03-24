import { getInfo } from "@api/service"
import { translateText } from "@api/teste";
import { Apidata } from "@interfaces/types";
import { useEffect, useState } from "react"


export function Projects() {
  const [projects, setProjects] = useState<Apidata[]>([]);
  const [text, setText] = useState('eu vim aqui');
  const [teste, setTeste] = useState(true)
  const texts = ["Olá, mundo!", "Bem-vindo ao site!", "Tradução automática"];

  useEffect(() => {
    const fecthdetails = async () => {
      const response = await getInfo('curriculum')
      const translated = await translateText(text, 'en')
      setText(translated)
        setProjects(response)
      console.log(response)
      

      

    }
    fecthdetails()
  }, [])

  console.log(projects);
  
  // async function testando(params: string) {
  //   const translated = await translateText(params, 'en')
  //   return translated
  // }


  return (
    <>
            <h1>
              eae
              </h1>
            <button onClick={() => setTeste(!teste)}>
              Traduzir
            </button>
      </>
  )
}

