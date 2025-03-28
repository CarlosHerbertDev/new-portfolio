import { LanguageProvider } from "@contexts/tooglerLang/togglerLang";
import Globalstyle from "@styles/global-style";
import { ReactElement } from "react";
import { AppRoutes } from "./pages/routes";


function App() : ReactElement {


  return (
    <>
    <LanguageProvider>
      <Globalstyle />
      <AppRoutes />
    </LanguageProvider>
    </>
  )
}

export default App
