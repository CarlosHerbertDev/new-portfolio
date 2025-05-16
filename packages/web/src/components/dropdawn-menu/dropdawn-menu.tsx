import React, { useContext, useState } from 'react'
import { LanguageContext } from "@contexts/tooglerLang/createContextLang";
import { languages } from "../../data/languages";

export default function DropDawnMenu() {
    const [select, setSelect] = useState('pt');
    const {lang, setLang } = useContext(LanguageContext)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleChange = (value:string) => {
            setSelect(value);
            setDropdownOpen(false);
            setLang(value)
    };
    const selectedLang = languages.find(lang => lang.name === select)


  return (
    <div>
         <div className="flex justify-start items-center flex-row gap-[10px]">
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
                        <div className="flex w-full ">
                            <p>
                                CarlosHerbertDev
                            </p>
                        </div>      
                            </div>
    </div>
  )
}

