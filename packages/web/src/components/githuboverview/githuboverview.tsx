import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
  
export default function GitHubOverview() {

    const username = 'CarlosHerbertDev';
    const { t } =  useTranslation()
    

  return (
    <motion.div 
    className="flex flex-col gap-5 bg-terciary text-white p-6 rounded-2xl shadow-xl max-w-5xl mx-auto my-10 border-1 border-secundary"
    initial={{ opacity: 0, y: 150 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }} 
    viewport={{ once: true }}
    >
      <h2 className="text-2xl text-hover mb-4 max-[466px]:text-xl">{t("activity")}</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="flex gap-4 mt-5 max-sm:flex-col max-sm:gap-10">

          <div className='flex flex-col gap-3'>
            <h4>{t("contributions")}</h4>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="Estatísticas GitHub"
            />
          </div>
          <div className='flex flex-col gap-3'>
            <h4>{t("languages")}</h4>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
              alt="Linguagens mais usadas"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}