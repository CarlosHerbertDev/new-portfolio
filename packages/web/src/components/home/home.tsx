import { motion } from "motion/react";
import React from "react";

export const Home: React.FC = () => {
return(
        <>

            <h1>Home</h1>
            <motion.p
                initial={{ opacity: 0, x: -50 }} // Começa invisível e deslocado
                whileInView={{ opacity: 1, x: 0 }} // Torna-se visível e retorna para a posição original
                transition={{ duration: 1.2 }} // Duração da animação  
                viewport={{ once: true }}
            >
                    TESTE

            </motion.p>
        </>
        

    )

}