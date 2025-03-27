import Globalstyle from "@styles/global-style";
import { AppRoutes } from "./pages/routes";
import { ReactElement } from "react";
import { LanguageContext } from "@contexts/togglerLang";


function App() : ReactElement {


  return (
    <>
    <LanguageContext>
      <Globalstyle />
      <AppRoutes />
    </LanguageContext>
    </>
  )
}

export default App
