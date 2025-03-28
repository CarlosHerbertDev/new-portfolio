import { ContextProps } from "@interfaces/types";
import { useState } from "react";
import { LanguageContext } from "./createContextLang";


export const LanguageProvider = ({children} : ContextProps) => {
    const [lang, setLang] = useState<string>('')
    return (
        <LanguageContext.Provider value={{lang, setLang}}>
            {children}
        </LanguageContext.Provider>
    )
}