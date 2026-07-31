import * as React from "react";
import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";

const pageMetadata = {
  "/": {
    title: "Jyotirmoy Barman | Senior Software Developer",
    description:
      "Jyotirmoy Barman is a senior software developer focused on full-stack engineering, scalable architecture, and product delivery across modern web and cloud platforms.",
  },
  "/about": {
    title: "About | Jyotirmoy Barman",
    description:
      "Learn about Jyotirmoy Barman's experience, skills, and engineering background across full-stack delivery and software architecture.",
  },
  "/projects": {
    title: "Projects | Jyotirmoy Barman",
    description:
      "Explore projects built by Jyotirmoy Barman spanning full-stack development, AI/ML, and modern web applications.",
  },
  "/contact": {
    title: "Contact | Jyotirmoy Barman",
    description:
      "Contact Jyotirmoy Barman for collaborations, software engineering opportunities, or product development discussions.",
  },
} as const;

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();

  React.useEffect(() => {
    const metadata = pageMetadata[location.pathname as keyof typeof pageMetadata] ?? pageMetadata["/"];
    document.title = metadata.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", metadata.description);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute("content", metadata.title);
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute("content", metadata.description);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    const baseUrl = "https://jewel998.github.io";
    const path = location.pathname.endsWith("/") ? location.pathname : location.pathname + "/";
    const canonicalPath = baseUrl + path;

    if (canonicalTag) {
      canonicalTag.setAttribute("href", canonicalPath);
    }
  }, [location.pathname]);

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
