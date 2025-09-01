import { HomeLayout } from "@/layouts/home";
import { About } from "@/pages/about";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <HomeLayout>
      <About />
    </HomeLayout>
  );
}
