import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

const history = createHashHistory();
const router = createRouter({ routeTree, history, scrollRestoration: true });

export function Router() {
  return <RouterProvider router={router} />;
}
