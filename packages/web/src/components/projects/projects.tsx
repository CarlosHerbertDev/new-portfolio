import { useContentApi } from "@hooks/useContentApi";
import { motion } from "motion/react";
import { ReactElement} from "react";


export const Projects = (): ReactElement => {
  const { dataAPI, loading } = useContentApi('curriculum')


  if (loading) {
    return <p>carregando...</p>
  }  

  return (
     <section className="container">
       <h1>Contéudo</h1>
       <h2> eu quero brilhar</h2>
   
       {dataAPI.map((data) => {
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
   
       })}

     </section>   
  )
}

