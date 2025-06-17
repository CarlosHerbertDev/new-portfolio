// import { useContentApi } from "@hooks/useContentApi";
// import { motion } from "motion/react";
import GithubChart from "@components/table";
import { ReactElement } from "react";
export const Home = (): ReactElement => {
// const { dataAPI } = useContentApi('home')

return(
        <section className="container flex-col text-center justify-center items-center mt-30 ">

            <div className="w-full flex flex-col items-center justify-center mt-10 gap-8">

                <div className="h-full flex flex-col gap-10 mt-20">
                    <h1 className="text-4xl text-center text-hover">Olá, sou Carlos Herbert e esse é meu portfolio!</h1>
                    <h2 className="text-3xl">Desenvolvedor Fullstack</h2>
                    {/* <h3 className="text-center text-2xl">Desenvolvedor FullSatck</h3> */}
                </div>
                <div className="flex w-full items-center justify-between">
                    <div className="w-150 h-150 rounded-full bg-terciary border-2 border-secundary">

                    </div>
             <GithubChart />
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