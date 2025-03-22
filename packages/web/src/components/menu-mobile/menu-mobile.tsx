import { Sling as Hamburger } from 'hamburger-react'
import { ConatinerHamburguer, MenuList, MenuWrapper } from "./style"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
                <MenuList onClick={() => setOpen(false)}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/projects'}>Projects</Link>   
                    <Link to={'/curriculum'}>Curriculum</Link>   
                    <Link to={'/about'}>About</Link>
                </MenuList>
            </MenuWrapper>
        </>
    )
}

export default MenuMobile
