import { getInfo } from "@api/service"
import { translateText } from "@api/teste";
import { Apidata } from "@interfaces/types";
import { useEffect, useState } from "react"


export function Projects() {
  const [projects, setProjects] = useState<Apidata[]>([]);
  // const [text, setText] = useState('en');
  const [teste, setTeste] = useState('pt')
  const [translated, setTranslated] = useState<string[]>([])
  const texts = ["Olá, mundo!", "Bem-vindo ao site!", "Tradução automática"]
  useEffect(() => {
    const fecthdetails = async () => {
      const response = await getInfo('curriculum')
      setProjects(response)
      const trans = response.map((project) => {
        return {title: project.title, description: project.description}
      })
      console.log(trans)
      
      const translated = await translateText(texts, 'en')
      // const tran = await translateText(trans, 'en')
      // setTranslated([translated, tran])
      

      

    }
    fecthdetails()
  }, [])
  
  // async function testando(params: string) {
  //   const translated = await translateText(params, 'en')
  //   return translated
  // }


  return (
    <>
            <h1>
              { teste === 'en' ? translated[1] : texts[1]}
              </h1>
            {projects.map((project) => (
              <div key={project._id}>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                
              </div>
            ))}











            <button onClick={() => teste === 'en' ? setTeste('pt') : setTeste('en')}>
            {texts[2]}
            </button>
      </>
  )
}

