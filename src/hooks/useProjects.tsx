import { PROJECTS_DEFAULT, PROJECTS_KEY, type Project } from "@/lib/config";
import { useConfigList } from "@/hooks/useConfigList";

/**
 * Returns the portfolio projects list from remote config.
 *
 * Shows the bundled {@link PROJECTS_DEFAULT} instantly, then swaps in the
 * remote value once the API resolves. If the remote value hasn't loaded yet
 * (or comes back empty / malformed), the local default is kept.
 */
export function useProjects(): Project[] {
  return useConfigList<Project>(PROJECTS_KEY, PROJECTS_DEFAULT);
}
