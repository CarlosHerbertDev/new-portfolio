import { Sling as Hamburger } from 'hamburger-react'
import { ConatinerHamburguer, MenuList, MenuWrapper } from "./style"
import { useEffect, useState } from 'react'

const MenuMobile = () => {
  const [isOpen, setOpen] = useState(false)

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
                <MenuList>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </MenuList>
            </MenuWrapper>
        </>
    )
}

export default MenuMobile
