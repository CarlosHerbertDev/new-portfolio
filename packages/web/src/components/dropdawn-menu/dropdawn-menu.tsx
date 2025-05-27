import { useContext, useState } from 'react'
import { LanguageContext } from "@contexts/tooglerLang/createContextLang";
import { languages } from "../../data/languages";

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
                                <div className="relative w-full inline-block">
                                    <button 
                                        className={`p-1 w-full cursor-pointer bg-[#302b63] text-justify text-[15px] text-white border-1 border-[#302b63] ${isDropdownOpen ? 'rounded-t-sm' : 'rounded-sm'}`}
                                        onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                            <div className="flex justify-center items-center gap-[7px]">
                                                {selectedLang && <img src={selectedLang.flag} alt={selectedLang.label} />}
                                                
                                            </div>
                                                {isDropdownOpen && (
                                                <ul className="absolute right-0 left-0 top-full z-1 rounded-b-sm bg-[#00000066] text-white w-[120px]">
                                                    {
                                                        languages.map((lang) => (
                                                            <li 
                                                                key={lang.name} 
                                                                className = 'itemdrop'
                                                                onClick={() => handleChange(lang.label)}>
                                                                    <div className="flex justify-start items-center gap-[7px] text-justify text-[15px] text-white">
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

