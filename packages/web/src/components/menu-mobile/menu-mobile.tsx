import { Sling as Hamburger } from 'hamburger-react'
import { ConatinerHamburguer, MenuList, MenuWrapper } from "./style"
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
            <ConatinerHamburguer>
                <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded/>    
            </ConatinerHamburguer>  
            <MenuWrapper $isOpen={isOpen}>
                <MenuList onClick={() => setOpen(false)}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/projects'}>{t('projects')}</Link>   
                    <Link to={'/curriculum'}>{t('curriculum')}</Link>   
                    <Link to={'/about'}>{t('about')}</Link>
                </MenuList>
            </MenuWrapper>
        </>
    )
}

export default MenuMobile
