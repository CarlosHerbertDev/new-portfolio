import { ReactElement, useContext, useEffect, useState } from "react";
import { Container, ContainerLogo, Navegation } from "./style";
import { Link } from "react-router-dom";
import MenuMobile from "@components/menu-mobile/menu-mobile";
import { LanguageContext } from "@contexts/tooglerLang/createContextLang";

export const Header = (): ReactElement => {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
    const {lang, setLang } = useContext(LanguageContext)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 800);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (

            <Container>
                <ContainerLogo>
                    <p>CarlosHerbertDev</p>
                    <button onClick={(() => lang === 'en' ? setLang('pt') : setLang('en'))}>
                        linguas
                    </button>
                </ContainerLogo>
                
                
                {isMobile ? (
                    <MenuMobile />
                ) : (
                    <Navegation>
                        <li>
                            <Link to ={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to ={`/projects`}>Projects</Link>
                        </li>
                        <li>
                            <Link to ={`/curriculum`}>Curriculum</Link>
                        </li>
                        <li>
                            <Link to ={`/about`}>About</Link>
                        </li>
                    </Navegation>
                )
            }
            </Container>
        )

}