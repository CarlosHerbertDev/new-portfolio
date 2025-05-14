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
        <>
            <div className='flex items-center with-[48px] h-[40px] z-2 border-1 rounded-sm'>
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded/>    
            </div>  
              <div 
                className={`w-[50%] fixed top-0 right-0 h-screen text-black z-1 flex justify-center items-center transition-transform duration-300 ease-in-out bg-blue-500 ${isOpen ? 'translate-x-[0]' : 'translate-x-[100%]'}`}
              >
                <div
                  className='flex flex-col justify-center items-center gap-[40px]' 
                  onClick={() => setOpen(false)}
                >
                    <Link to={'/'}>Home</Link>
                    <Link to={'/projects'}>{t('projects')}</Link>   
                    <Link to={'/curriculum'}>{t('curriculum')}</Link>   
                    <Link to={'/about'}>{t('about')}</Link>
                </div>
              </div>  
        </>
    )
}

export default MenuMobile
