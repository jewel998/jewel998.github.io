import { JOBS_DEFAULT, JOBS_KEY, type Job } from "@/lib/config";
import { useConfigList } from "@/hooks/useConfigList";

/**
 * Returns the work-history ("jobs") list from remote config.
 *
 * Shows the bundled {@link JOBS_DEFAULT} instantly, then swaps in the remote
 * value once the API resolves. If the remote value hasn't loaded yet (or comes
 * back empty / malformed), the local default is kept.
 */
export function useJobs(): Job[] {
  return useConfigList<Job>(JOBS_KEY, JOBS_DEFAULT);
}
