import { HomeLayoutPage } from "@/layouts/home";
import { HomeFooter } from "@/pages/home/footer";
import { HomeContact } from "@/pages/home/contact";
import { ProjectsHero } from "./hero";
import { ProjectsGrid } from "./grid";

export function Projects() {
  return (
    <HomeLayoutPage>
      <ProjectsHero />
      <ProjectsGrid />
      <HomeContact />
      <HomeFooter />
    </HomeLayoutPage>
  );
}
