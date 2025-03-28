import { ContextProviderType } from "@interfaces/types"
import { createContext } from "react"

const defaultvalue: ContextProviderType = {
    lang: '',
    setLang: () => {}
}

export const LanguageContext = createContext<ContextProviderType>(defaultvalue)