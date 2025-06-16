// import { useContentApi } from "@hooks/useContentApi";
// import { motion } from "motion/react";
import { ReactElement } from "react";
import image from "@assets/perfil.jpg";

export const Home = (): ReactElement => {
// const { dataAPI } = useContentApi('home')

return(
        <section className="container flex-col text-center justify-center items-center mt-20">

            <div className="w-full flex items-center justify-between">
                <div className="w-full max-w-1/2 flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-4xl text-center">Olá! Meu nome é Herbert</h1>
                    <h2 className="text-center">Desenvolvedor FullSatck</h2>
                </div>
                <div className="w-full max-w-1/2 flex items-center justify-center">
                    <img src={image} alt="" className="w-[350px] h-[320px] rounded-[50%]"/>
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