import { getInfo } from "@api/service"
import { Apidata } from "@interfaces/types";
import { useEffect, useState } from "react"

export function Project() {
  const [projects, setProjects] = useState<Apidata[]>([]);
  useEffect(() => {
    const fecthdetails = async () => {
      const response = await getInfo('curriculum')
      
          setProjects(response)
      console.log(response)
    }
    fecthdetails()
  }, [])

  console.log(projects);
  

  return (
    <>
    <h1>App</h1>
    </>
  )
}


