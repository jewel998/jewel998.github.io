import { useEffect, useState } from "react";
import {
  config,
  PROJECTS_DEFAULT,
  PROJECTS_KEY,
  type Project,
} from "@/lib/config";

/**
 * Returns the portfolio projects list from remote config.
 *
 * Shows the bundled {@link PROJECTS_DEFAULT} instantly, then swaps in the
 * remote value once the API resolves. If the remote value hasn't loaded yet
 * (or comes back empty / malformed), the local default is kept.
 */
export function useProjects(): Project[] {
  const [projects, setProjects] = useState<Project[]>(() => readProjects());

  useEffect(() => {
    const sync = () => setProjects(readProjects());

    // Re-read once the SDK is ready and on every background/refresh update.
    config.on("ready", sync);
    config.on("updated", sync);

    // Pick up a value that may have resolved between render and effect.
    sync();

    return () => {
      config.off("ready", sync);
      config.off("updated", sync);
    };
  }, []);

  return projects;
}

/** Read the current projects value, falling back to defaults when not loaded. */
function readProjects(): Project[] {
  const value = config.get<Project[]>(PROJECTS_KEY);
  return Array.isArray(value) && value.length > 0 ? value : PROJECTS_DEFAULT;
}
