import { useContext, useState } from 'react'
import { LanguageContext } from "@contexts/tooglerLang/createContextLang";
import { languages } from "../../data/languages";
import arrow from "@assets/arrow-bottom.png"
import arrowHover from "@assets/arrow-hover.png"

export default function DropDawnMenu() {
    const [select, setSelect] = useState('pt');
    const {setLang } = useContext(LanguageContext)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleChange = (value:string) => {
            setSelect(value);
            setDropdownOpen(false);
            setLang(value)
    };
    const selectedLang = languages.find(lang => lang.label === select)


return (
    <div>
        <div className="flex justify-start items-center flex-row gap-[10px]">
                                <div className="relative w-full flex justify-start items-center">
                                    <button 
                                        className={`p-1 w-full cursor-pointer bg-terciary text-justify text-base text-white border-1 border-secundary ${isDropdownOpen ? 'rounded-t-sm' : 'rounded'}`}
                                        onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                            <div className="flex justify-center items-center gap-[7px]">
                                                {selectedLang && <img src={selectedLang.flag} alt={selectedLang.label} className='h-[25px]' />}
                                                <img src={isDropdownOpen? arrowHover : arrow} alt="arrow-bottom"  className={`w-[10px] h-[10px] ease-in-out duration-200 ${isDropdownOpen? 'rotate-180' : 'rotate-0'}`}/>
                                                
                                            </div>
                                                {isDropdownOpen && (
                                                <ul className="absolute right-0 left-0 top-full z-1 rounded-b-sm bg-terciary text-white w-[120px]">
                                                    {
                                                        languages.map((lang) => (
                                                            <li 
                                                                key={lang.name} 
                                                                className = 'itemdrop'
                                                                onClick={() => handleChange(lang.label)}>
                                                                    <div className="ml-[3px] flex justify-start items-center gap-[7px] text-justify text-xs ">
                                                                        <img src={lang.flag} alt={lang.label} />
                                                                        {lang.name}
                                                                    </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )}
                                    </button>
                                </div>  
                            </div>
    </div>
  )
}

