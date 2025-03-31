import { getInfo } from "@api/service"
import { useContext, useEffect, useState } from "react"
import { Apidata } from "@interfaces/types"
import { traduzirObjetos } from "@utils/translateDataApi"
import { LanguageContext } from "@contexts/tooglerLang/createContextLang"


export function useContentApi(typeName:string) {
    const [dataAPI, setDataAPI] = useState<Apidata[]>([])
    const {lang} = useContext(LanguageContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fecxhData = async () => {
        try {
            const data = await getInfo(typeName)
            const translateData = await traduzirObjetos(data, lang)
            setDataAPI(translateData)
            
        }catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
        fecxhData()


    }, [lang])

    return { dataAPI, loading }
}

