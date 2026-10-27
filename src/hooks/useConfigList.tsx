import { useEffect, useState } from "react";
import { config } from "@/lib/config";

/**
 * Subscribes to a remote-config array value and keeps it in sync.
 *
 * Shows the bundled `fallback` instantly, then swaps in the remote value once
 * the API resolves. If the remote value hasn't loaded yet (or comes back empty
 * / malformed), the local fallback is kept.
 *
 * @param key      Config key to read (e.g. `"app.jobs"`).
 * @param fallback Bundled default list shown before the remote fetch resolves.
 */
export function useConfigList<T>(key: string, fallback: T[]): T[] {
  const [list, setList] = useState<T[]>(fallback);

  useEffect(() => {
    let active = true;

    const sync = async () => {
      const value = await config.get<T[]>(key, fallback);
      if (active) {
        setList(Array.isArray(value) && value.length > 0 ? value : fallback);
      }
    };

    // Re-read once the prefetch resolves and on every background update.
    void config.ready().then(sync);
    config.on("updated", sync);

    // Pick up a value that may already be resolved (memory/cache or default).
    void sync();

    return () => {
      active = false;
      config.off("updated", sync);
    };
  }, [key, fallback]);

  return list;
}
