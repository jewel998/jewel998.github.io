import { HomeLayout } from "@/layouts/home";
import { Contact } from "@/pages/contact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <HomeLayout>
      <Contact />
    </HomeLayout>
  );
}
