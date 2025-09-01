import { HomeContact } from "./contact";
import { HomeFooter } from "./footer";
import { HomeHero } from "./hero";
import { HomeExpertise } from "./expertise";

export function Home() {
  return (
    <div className="bg-background border border-t-0 relative">
      <HomeHero />
      <HomeExpertise />
      <HomeContact />
      <HomeFooter />
    </div>
  );
}
