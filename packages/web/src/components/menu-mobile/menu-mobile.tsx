import { Sling as Hamburger } from 'hamburger-react'
import { ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MenuMobile = (): ReactElement => {
  const [isOpen, setOpen] = useState(false)
  const { t } =  useTranslation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isOpen]);

  return (
        <div>
            <div className='relative flex items-center w-[48px] h-[40px] border-1 rounded-sm z-2'>
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded/>    
            </div>  
              <div 
                className={`z-1 w-[50%] h-full fixed top-0 right-0 text-black flex justify-center items-center transition-transform duration-300 ease-in-out bg-blue-500 ${isOpen ? 'translate-x-[0]' : 'translate-x-[100%]'}`}
              >
                <ul
                  className='flex flex-col justify-center items-center gap-[40px]' 
                  onClick={() => setOpen(false)}
                >
                   <li>
                      <Link to={'/'}>Home</Link>
                  </li> 
                  <li>
                    <Link to={'/projects'}>{t('projects')}</Link>   
                  </li>
                  <li>
                    <Link to={'/curriculum'}>{t('curriculum')}</Link>   
                  </li>
                  <li>
                    <Link to={'/about'}>{t('about')}</Link>
                  </li>
                </ul>
              </div>  
        </div>
    )
}

export default MenuMobile
