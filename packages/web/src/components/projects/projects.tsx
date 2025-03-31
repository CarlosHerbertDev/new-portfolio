import { getInfo } from "@api/service";
import { LanguageContext } from "@contexts/tooglerLang/createContextLang";
// import { useContentApi } from "@hooks/useContentApi";
import { useTranslation } from "@hooks/useTranslate";
import { Apidata } from "@interfaces/types";
import { traduzirObjetos } from "@utils/teste";
import { ReactElement, useContext, useEffect, useState } from "react";
import { data } from "react-router-dom";


export const Projects = (): ReactElement => {
  const {lang} = useContext(LanguageContext)
  const [dataAPI, setDataAPI] = useState<Apidata[]>([])
  const [loading, setLoading] = useState(true)
  
      useEffect(() => {
        const fecxhData = async () => {
        try {
          const data = await getInfo('project')
          const teste = await traduzirObjetos(data, lang)
          console.log(teste)
          
          setDataAPI(teste)
        }catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
        
        
        
      }
        
          fecxhData()
  
  
      }, [lang])


  // const data = useContentApi('project')



  // useTranslation(lang, loading)


  

  

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
      </>
  )
}

