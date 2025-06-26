import GitHubOverview from "@components/githuboverview/githuboverview";
import { faInstagram, faGithub, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
export const Home = (): ReactElement => {

    const { t } =  useTranslation()
// const { dataAPI } = useContentApi('home')

return(
        <section className="container flex flex-col text-center gap-10 mt-8 max-sm:mt-5">

            <div className="w-full flex items-center justify-between mt-10 max-xl:flex-col max-xl:gap-10 max-xl:flex max-xl:justify-center max-xl:w-auto">
                <div className="h-full flex flex-col self-start items-start max-xl:items-center max-xl:justify-center max-xl:w-full">
                    <motion.h1 
                    className="text-3xl text-center text-hover max-[466px]:text-2xl"
                    initial={{ opacity: 0, x: -150 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8 }} 
                    viewport={{ once: true }}
                    >
                        {t("welcome")}
                    </motion.h1>
                    <motion.h2 className="text-2xl mt-4  max-[466px]:text-xl"
                    initial={{ opacity: 0, x: -150 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.7 }} 
                    viewport={{ once: true }}
                    >
                        {t("name")}
                    </motion.h2>
                    <motion.h3 className="text-center text-lg mt-2  max-[466px]:text-lg"
                    initial={{ opacity: 0, x: -150 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6 }} 
                    viewport={{ once: true }}
                    >
                        {t("work")}
                    </motion.h3>
                    <div className="max-xl:hidden">
                        <GitHubOverview />
                    </div>
                </div>

                <div className="flex flex-col self-start gap-15 items-center justify-start max-xl:self-auto">
                    <motion.div
                    className="w-[350px] h-[350px] rounded-full bg-terciary border-2 border-secundary max-[466px]:h-[300px] max-[466px]:w-[300px]"
                    initial={{ opacity: 0, x: 150 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6 }} 
                    viewport={{ once: true }}
                    >


                    </motion.div>
                    <ul className="icons">

                        <motion.li
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }} 
                        viewport={{ once: true }}
                        >
                            <a href="https://www.linkedin.com/in/herbert-vieira-030325225/" target="_blank">
                             <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </motion.li>
                        <motion.li
                        initial={{ opacity: 0, y: 35 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6 }} 
                        viewport={{ once: true }}
                        >
                            <a  href="https://wa.me/5585997517048?text=Oi!%20Vim%20pelo%20seu%20portfolio!" target="_blank">
                             <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </motion.li>
                        <motion.li
                        initial={{ opacity: 0, y: 40 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.7 }} 
                            viewport={{ once: true }}
                        >
                            <a href="https://github.com/CarlosHerbertDev" target="_blank"> 
                            <FontAwesomeIcon icon={faGithub} />                        
                            </a>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, y: 45 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8 }} 
                            viewport={{ once: true }}
                        >
                            <a href="https://www.instagram.com/_vieira_herbert?igsh=N2M2OW1tc3Qzangy" target="_blank"> 
                             <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </motion.li>
                    </ul>
                    <div className="xl:hidden">
                    <GitHubOverview />
                    </div>
                </div>
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