import { LanguageProvider } from "@contexts/tooglerLang/togglerLang";
import { ReactElement } from "react";
import { AppRoutes } from "./pages/routes";
import './utils/i18n'
import '@styles/index.css'
import { Plano } from "@components/plano-de-fundo";


function App() : ReactElement {

  return (
    <>
    <LanguageProvider>
      <Plano />
      <AppRoutes />
    </LanguageProvider>
    </>
  )
}

export default App
