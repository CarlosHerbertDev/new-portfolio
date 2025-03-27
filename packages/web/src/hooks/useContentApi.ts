import { getInfo } from "@api/service"
import { useEffect, useState } from "react"
import { Apidata } from "@interfaces/types"


export function useContentApi(typeName:string) : Apidata[] {
    const [dataAPI, setDataAPI] = useState<Apidata[]>([])

    useEffect(() => {
        const fecxhData = async () => {
        const data = await getInfo(typeName)
        setDataAPI(data)
        
    }

    fecxhData()

    }, [])

    return dataAPI
}

