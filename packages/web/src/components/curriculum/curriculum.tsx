import GithubChart from "@components/githuboverview/githuboverview";
import { ReactElement } from "react";

export const Curriculum = (): ReactElement => {
return(
     <section className="container">
         <h1>Curriculum</h1>
         <GithubChart />
     </section>
    )

}