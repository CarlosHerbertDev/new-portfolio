import { LanguageProvider } from "@contexts/tooglerLang/togglerLang";
import Globalstyle from "@styles/global-style";
import { ReactElement } from "react";
import { AppRoutes } from "./pages/routes";
import './utils/i18n'
import '@styles/index.css'


function App() : ReactElement {


  return (
    <>
    <LanguageProvider>
      {/* <Globalstyle /> */}
      <AppRoutes />
    </LanguageProvider>
    </>
  )
}

export default App
