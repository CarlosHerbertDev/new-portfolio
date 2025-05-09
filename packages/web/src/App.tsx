import { LanguageProvider } from "@contexts/tooglerLang/togglerLang";
import { ReactElement } from "react";
import { AppRoutes } from "./pages/routes";
import './utils/i18n'
import '@styles/index.css'


function App() : ReactElement {

  return (
    <>
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
    </>
  )
}

export default App
