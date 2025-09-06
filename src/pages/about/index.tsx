import { HomeLayoutPage } from "@/layouts/home";
import { HomeFooter } from "@/pages/home/footer";
import { HomeContact } from "@/pages/home/contact";
import { AboutExperience } from "./experience";
import { AboutHero } from "./hero";

export function About() {
  return (
    <HomeLayoutPage>
      <AboutHero />
      <AboutExperience />
      <HomeContact />
      <HomeFooter />
    </HomeLayoutPage>
  );
}
