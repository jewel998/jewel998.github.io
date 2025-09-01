import { Home } from "@/pages/home";
import { HomeLayout } from "@/pages/layouts/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  );
}
