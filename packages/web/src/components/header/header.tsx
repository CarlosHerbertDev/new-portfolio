import { ReactElement, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import MenuMobile from "@components/menu-mobile/menu-mobile";
import { LanguageContext } from "@contexts/tooglerLang/createContextLang";
import { useTranslation } from "react-i18next";
import teste from '../../assets/react.svg' 

export const Header = (): ReactElement => {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const {lang, setLang } = useContext(LanguageContext)
    const { t, i18n: { changeLanguage }} =  useTranslation()

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (lang !== '') {
            changeLanguage(lang)
        }
    }, [lang])

    return (

            <header className="container justify-between">
                <div className="flex justify-center items-center flex-row gap-[10px]">
                    <p>
                        CarlosHerbertDev
                    </p>
                    <button onClick={(() => lang === 'en' ? setLang('pt') : setLang('en'))}>
                        <img src={lang === 'en'? `${teste}` : `${teste}`} alt="" />
                    </button>
                </div>
                
                
                {isMobile ? (
                    <MenuMobile />
                ) : (
                    <ul className="flex justify-center items-center gap-[30px]">
                        <li>
                            <Link to ={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to ={`/projects`}> {t('projects')} </Link>
                        </li>
                        <li>
                            <Link to ={`/curriculum`}> {t('curriculum')} </Link>
                        </li>
                        <li>
                            <Link to ={`/about`}> {t('about')} </Link>
                        </li>
                    </ul>
                )
            }
            </header>
        )

}