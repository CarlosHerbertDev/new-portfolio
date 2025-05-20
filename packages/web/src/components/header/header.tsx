import { ReactElement, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import MenuMobile from "@components/menu-mobile/menu-mobile";
import { LanguageContext } from "@contexts/tooglerLang/createContextLang";
import { useTranslation } from "react-i18next";
import DropdawnMenu from "@components/dropdawn-menu/dropdawn-menu";
// import teste from '../../assets/react.svg' 
// import brasil from '../../assets/brasil.png' 
// import eua from '../../assets/eua.png' 

export const Header = (): ReactElement => {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const {lang} = useContext(LanguageContext)
    const { t, i18n: { changeLanguage }} =  useTranslation()
    // const [select, setSelect] = useState('pt')
    // const [isDropdownOpen, setDropdownOpen] = useState(false);
    // const handleChange = (value:string) => {
    //         setSelect(value);
    //         setDropdownOpen(false);
    //         setLang(value)
    //     };
    // const selectedLang = languages.find(lang => lang.name === select)



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


          <header className="container justify-between z-1">

                {isMobile ? (
                    <div className="flex justify-between items-center w-full z-2">
                        <DropdawnMenu />
                        <p className="text-white text-[20px] font-bold">
                            CarlosHerbertDev
                        </p>
                        <MenuMobile />
                    </div>
                ) : (
                
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center  gap-[15px]">
                         <p className="text-white text-[20px]">
                            CarlosHerbertDev</p>
                        <DropdawnMenu />
                    </div>   
                
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
                </div>

                )
            }
        
            </header>
        )

























































                {/* <div className="flex justify-start items-center flex-row gap-[10px]">
                        <div className="relative w-full inline-block">
                            <button 
                                className={`px-1 py-1 w-full cursor-pointer bg-white-400 text-yellow-800 border-1 border-indigo-800 ${isDropdownOpen ? 'rounded-t-sm' : 'rounded-sm'}`}
                                onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                    <div className="flex justify-center items-center gap-[7px]">
                                        {selectedLang && selectedLang.label}
                                        {selectedLang && <img src={selectedLang.flag} alt={selectedLang.label} />}
                                    </div>
                                        {isDropdownOpen && (
                                        <ul className="absolute right-0 left-0 top-full z-1 rounded-b-sm bg-gray-950 text-white p-0 max-w-[80px] overflow-auto">
                                            {
                                                languages.map((lang) => (
                                                    <li 
                                                        key={lang.name} 
                                                        className = 'itemdrop'
                                                        onClick={() => handleChange(lang.name)}>
                                                            <div className="flex justify-center items-center gap-[7px]">
                                                                {lang.label}
                                                                <img src={lang.flag} alt={lang.label} />
                                                            </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )}
                            </button>
                        </div>  
                    </div> */}


                    {/* <button onClick={(() => lang === 'en' ? setLang('pt') : setLang('en'))}>
                        <img src={lang === 'en'? `${brasil}` : `${eua}`} alt="" />
                        </button> */}
}