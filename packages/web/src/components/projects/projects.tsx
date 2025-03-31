import { useContentApi } from "@hooks/useContentApi";
import { ReactElement} from "react";


export const Projects = (): ReactElement => {
  const { dataAPI, loading } = useContentApi('curriculum')


  if (loading) {
    return <p>carregando...</p>
  }  

  return (
    <>
    <h1>Contéudo</h1>
    <h2> eu quero brilhar</h2>

    {dataAPI.map((data) => {
      return (
        <div key={data._id}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>

      )

    })}


      </>
  )
}

