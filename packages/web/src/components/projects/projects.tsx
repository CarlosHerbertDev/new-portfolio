
import { useState } from "react"
import  {useTranslation}from "../../hooks/usetranslate";
import { useContentApi } from "../../hooks/useContentApi";



export function Projects() {
  const [language, setLanguage] = useState<string>('');
  useTranslation(language)
  const dataAPI = useContentApi('project')

  return (
    <>
    <h1>Contéudo</h1>
    <h2> eu quero brilhar</h2>

   
    {dataAPI.map((dataAPI) => {
      return (
        <div key={dataAPI._id}>
          <h1>{dataAPI.title}</h1>
          <p>{dataAPI.description}</p>
        </div>
      )
    
    })}
      
      <button onClick={(() => language === 'en' ? setLanguage('pt') : setLanguage('en'))}>
      tradução 
    </button>

      </>
  )
}

