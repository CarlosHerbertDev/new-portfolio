import { useTranslation } from "react-i18next";

  
export default function GithubChart() {

    const username = 'CarlosHerbertDev';
     const { t } =  useTranslation()

  return (
    <section className=" flex flex-col gap-5 bg-terciary text-white p-6 rounded-2xl shadow-xl max-w-5xl mx-auto my-10 border-1 border-secundary">
      <h2 className="text-2xl text-hover mb-4 ">Minha Atividade no GitHub</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        {/* Gráfico de contribuições */}

        {/* Estatísticas de repositórios */}
        <div className="flex gap-4 mt-5">

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
        {/* <div className="bg-black border border-secundary rounded-xl p-4">
          <h3 className="text-lg mb-2 text-center">Contribuições</h3>
          <GitHubCalendar username='CarlosHerbertDev'/>
        </div> */}
    </section>
  )
}