import { initConfig } from "@jewel998/config";
import ExperienceDefaults from "@/data/experience.json";
import ProjectsDefaults from "@/data/projects.json";

/** A single work-history entry ("job"), served via remote config or local defaults. */
export interface Job {
  title: string;
  logo: string;
  company: string;
  website: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

/** A single portfolio project, served via remote config or local defaults. */
export interface Project {
  title: string;
  description: string;
  tools: string[];
  categories: string[];
  year: number;
  image: string | null;
  github: string | null;
  npmjs?: string | null;
  live: string | null;
}

/** Config key under which the work-history array is published. */
export const JOBS_KEY = "app.jobs";

/** Config key under which the projects array is published. */
export const PROJECTS_KEY = "app.projects";

/** Local, bundled defaults shown instantly before remote config resolves. */
export const JOBS_DEFAULT = ExperienceDefaults as Job[];

/** Local, bundled defaults shown instantly before remote config resolves. */
export const PROJECTS_DEFAULT = ProjectsDefaults as Project[];

/**
 * Shared feature-flag / remote-config client.
 *
 * Serves the bundled defaults immediately (optimistic), then resolves the
 * remote values from the API in the background and emits "updated".
 */
export const config = initConfig({
  clientId: import.meta.env.VITE_CONFIG_CLIENT_ID,
  defaults: {
    [JOBS_KEY]: JOBS_DEFAULT,
    [PROJECTS_KEY]: PROJECTS_DEFAULT,
  },
});
