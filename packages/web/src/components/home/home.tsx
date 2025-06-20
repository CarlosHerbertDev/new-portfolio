// import { useContentApi } from "@hooks/useContentApi";
// import { motion } from "motion/react";
import GithubChart from "@components/table";
import { faInstagram, faGithub, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import {faGithub} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
export const Home = (): ReactElement => {
    const { t } =  useTranslation()
// const { dataAPI } = useContentApi('home')

return(
        <section className="container flex flex-col text-center mt-10 gap-10">

            <div className="w-full flex items-center justify-between mt-10 gap-8 max-h-[900px] h-full">
                <div className="h-full flex flex-col self-start items-start">
                    <h1 className="text-3xl text-center text-hover">{t("welcome")}</h1>
                    <h2 className="text-2xl mt-4">{t("name")}</h2>
                    <h3 className="text-center text-lg mt-2">{t("work")}</h3>
             <GithubChart />
                </div>

                <div className="flex flex-col self-start gap-15 items-center justify-center h-full">
                    <div className="w-[350px] h-[350px] rounded-full bg-terciary border-2 border-secundary">


                    </div>
                    <ul className="icons">
                        <li>
                            <a href="https://www.linkedin.com/in/herbert-vieira-030325225/" target="_blank">
                             <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/5585997517048?text=Oi!%20Vim%20pelo%20seu%20portfolio!" target="_blank">
                             <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/CarlosHerbertDev" target="_blank"> 
                            <FontAwesomeIcon icon={faGithub} />                        
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/_vieira_herbert?igsh=N2M2OW1tc3Qzangy" target="_blank"> 
                             <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <iframe src="https://ghchart.rshah.org/CarlosHerbertDev" frameborder="0"></iframe> */}
            </div>

                

            {/* {dataAPI.map((data) => {
                return (
                    <div key={data._id}>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado
                            whileInView={{ opacity: 1, x: 0 }} // Torna-se visível e retorna para a posição original
                            transition={{ duration: 1.2 }} // Duração da animação  
                            viewport={{ once: true }}
                        >
                            {data.title}

                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado
                            whileInView={{ opacity: 1, x: 0 }} // Torna-se visível e retorna para a posição original
                            transition={{ duration: 1.2 }} // Duração da animação  
                            viewport={{ once: true }}
                        >
                            {data.description}

                        </motion.p>
                </div>

            )

                })} */}

                    

        </section>

        

        

    )

}