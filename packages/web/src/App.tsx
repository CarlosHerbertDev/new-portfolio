import { LanguageProvider } from "@contexts/tooglerLang/togglerLang";
import { ReactElement } from "react";
import { AppRoutes } from "./pages/routes";
import './utils/i18n'
import { AnimatedBackground } from "@components/animated-background/animated-background";


function App() : ReactElement {

  return (
    <>
      <LanguageProvider>
        <AnimatedBackground />
        <AppRoutes />
      </LanguageProvider>
    </>
  )
}

export default App
