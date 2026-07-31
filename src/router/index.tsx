import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

const router = createRouter({
  routeTree,
  scrollRestoration: true,
  defaultPendingMinMs: 0,
});

// Ensure the initial route is loaded before we render anything
const routerReady = router.load();

export function Router() {
  return <RouterProvider router={router} />;
}

export { routerReady };
