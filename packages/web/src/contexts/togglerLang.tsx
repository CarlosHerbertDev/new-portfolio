import { ContextProps, ContextProviderType } from "@interfaces/types";
import { createContext, useState } from "react";


export const LanguageContext = createContext<ContextProviderType | undefined >(undefined)

export const LanguaageProvider = ({children} : ContextProps) => {
    const [lang, setLang] = useState<string>('')
    return (
        <LanguageContext.Provider value = {{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    )
}