import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

const router = createRouter({ routeTree, scrollRestoration: true });

export function Router() {
  return <RouterProvider router={router} />;
}
