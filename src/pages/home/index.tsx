import { HomeContact } from "./contact";
import { HomeFooter } from "./footer";
import { HomeHero } from "./hero";
import { HomeExpertise } from "./expertise";
import { HomeLayoutPage } from "@/layouts/home";
import { HomeAbout } from "./about";
import { StructuredData } from "@/components/seo/structured-data";

export function Home() {
  return (
    <HomeLayoutPage>
      <StructuredData />
      <HomeHero />
      <HomeAbout />
      <HomeExpertise />
      <HomeContact />
      <HomeFooter />
    </HomeLayoutPage>
  );
}
