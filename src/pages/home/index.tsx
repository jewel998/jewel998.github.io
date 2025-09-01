import { HomeContact } from "./contact";
import { HomeFooter } from "./footer";
import { HomeHero } from "./hero";

export function Home() {
  return (
    <div className="bg-background border border-t-0 relative">
      <HomeHero />
      <HomeContact />
      <HomeFooter />
    </div>
  );
}
