import { ReactElement, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import MenuMobile from "@components/menu-mobile/menu-mobile";
import { LanguageContext } from "@contexts/tooglerLang/createContextLang";
import { useTranslation } from "react-i18next";
import teste from '../../assets/react.svg' 
import brasil from '../../assets/brasil.png' 
import eua from '../../assets/eua.png' 

export const Header = (): ReactElement => {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const {lang, setLang } = useContext(LanguageContext)
    const { t, i18n: { changeLanguage }} =  useTranslation()
    const [select, setSelect] = useState('')
    const [isDropdownOpen, setDropdownOpen] = useState(false);

      const handleChange = (value:string) => {
            setSelect(value);
            setDropdownOpen(false);
        };



    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
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

                    {/* <button onClick={(() => lang === 'en' ? setLang('pt') : setLang('en'))}>
                        <img src={lang === 'en'? `${brasil}` : `${eua}`} alt="" />
                    </button> */}

                    <div className="relative w-full inline-block">
                        <button 
                            className="px-1 py-4 w-full rounded-sm cursor-pointer bg-green-400 text-yellow-800 border-1 border-indigo-800"
                            onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                {select || 'pt'}
                                    {isDropdownOpen && (
                                     <ul className="absolute right-0 left-0 top-full z-1 rounded-sm bg-gray-950 text-white p-0 max-w-[150px] overflow-auto">
                                        <li onClick={() => handleChange('pt')}> pt </li>
                                        <li onClick={() => handleChange('en')}> en </li>
                                    </ul>
                                )}
                        </button>
                    </div>
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