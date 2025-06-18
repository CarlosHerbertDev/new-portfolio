// import { useContentApi } from "@hooks/useContentApi";
// import { motion } from "motion/react";
import GithubChart from "@components/table";
import { faInstagram, faGithub, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import {faGithub} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
export const Home = (): ReactElement => {
// const { dataAPI } = useContentApi('home')

return(
        <section className="container flex flex-col text-center mt-10 gap-10">

            <div className="w-full flex items-center justify-between mt-10 gap-8 max-h-[900px] h-full">
                <div className="h-full flex flex-col self-start items-start">
                    <h1 className="text-3xl text-center text-hover">Olá, seja bem-vindo ao meu portfolio</h1>
                    <h2 className="text-2xl mt-4">Meu nome é Carlos Herbert</h2>
                    <h3 className="text-center text-lg mt-2">Desenvolvedor FullSatck</h3>
             <GithubChart />
                </div>

                <div className="flex flex-col self-start gap-15 items-center justify-center h-full">
                    <div className="w-[350px] h-[350px] rounded-full bg-terciary border-2 border-secundary">


                    </div>
                    <ul className="icons">
                        <li>
                             <FontAwesomeIcon icon={faLinkedin} />
                        </li>
                        <li>
                             <FontAwesomeIcon icon={faWhatsapp} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />                        </li>
                        <li>
                             <FontAwesomeIcon icon={faInstagram} />
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