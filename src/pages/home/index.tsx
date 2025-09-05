import { HomeContact } from "./contact";
import { HomeFooter } from "./footer";
import { HomeHero } from "./hero";
import { HomeExpertise } from "./expertise";
import { HomeLayoutPage } from "@/layouts/home";
import { HomeAbout } from "./about";

export function Home() {
  return (
    <HomeLayoutPage>
      <HomeHero />
      <HomeAbout />
      <HomeExpertise />
      <HomeContact />
      <HomeFooter />
    </HomeLayoutPage>
  );
}
