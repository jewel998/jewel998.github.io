import { HomeLayoutPage } from "@/layouts/home";
import { HomeSection } from "@/layouts/home/section";
import { HomeFooter } from "@/pages/home/footer";

export function About() {
  return (
    <HomeLayoutPage>
      <HomeSection></HomeSection>
      <HomeFooter />
    </HomeLayoutPage>
  );
}
