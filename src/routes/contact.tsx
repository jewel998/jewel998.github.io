import { HomeLayout } from "@/pages/layouts/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return <HomeLayout></HomeLayout>;
}
