import { HomeLayoutPage } from "@/layouts/home";
import { HomeFooter } from "@/pages/home/footer";
import { HomeContact } from "@/pages/home/contact";
import { AboutExperience } from "./experience";
import { AboutHero } from "./hero";
import { StructuredData } from "@/components/seo/structured-data";

export function About() {
  return (
    <HomeLayoutPage>
      <StructuredData />
      <AboutHero />
      <AboutExperience />
      <HomeContact />
      <HomeFooter />
    </HomeLayoutPage>
  );
}
