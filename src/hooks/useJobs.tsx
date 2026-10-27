import { useEffect, useState } from "react";
import { config, JOBS_DEFAULT, JOBS_KEY, type Job } from "@/lib/config";

/**
 * Returns the work-history ("jobs") list from remote config.
 *
 * Shows the bundled {@link JOBS_DEFAULT} instantly, then swaps in the remote
 * value once the API resolves. If the remote value hasn't loaded yet (or comes
 * back empty / malformed), the local default is kept.
 */
export function useJobs(): Job[] {
  const [jobs, setJobs] = useState<Job[]>(() => readJobs());

  useEffect(() => {
    const sync = () => setJobs(readJobs());

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

  return jobs;
}

/** Read the current jobs value, falling back to defaults when not loaded. */
function readJobs(): Job[] {
  const value = config.get<Job[]>(JOBS_KEY);
  return Array.isArray(value) && value.length > 0 ? value : JOBS_DEFAULT;
}
