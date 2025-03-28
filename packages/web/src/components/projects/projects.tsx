import { LanguageContext } from "@contexts/tooglerLang/createContextLang";
import { useContentApi } from "@hooks/useContentApi";
import { useTranslation } from "@hooks/useTranslate";
import { ReactElement, useContext } from "react";


export const Projects = (): ReactElement => {
  const {lang, setLang} = useContext(LanguageContext)
  const dataAPI = useContentApi('project')
  useTranslation(lang)

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
      
      <button onClick={(() => lang === 'en' ? setLang('pt') : setLang('en'))}>
      tradução 
    </button>

      </>
  )
}

