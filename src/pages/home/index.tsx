import { HomeContact } from "./contact";
import { HomeFooter } from "./footer";
import { HomeHero } from "./hero";
import { HomeExpertise } from "./expertise";
import { HomeLayoutPage } from "@/layouts/home";

export function Home() {
  return (
    <HomeLayoutPage>
      <HomeHero />
      <HomeExpertise />
      <HomeContact />
      <HomeFooter />
    </HomeLayoutPage>
  );
}
