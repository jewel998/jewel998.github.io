const profileSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jyotirmoy Barman",
  jobTitle: "Senior Software Developer",
  url: "https://jewel998.github.io/",
  sameAs: ["https://github.com/jewel998"],
  knowsAbout: [
    "Full-Stack Development",
    "Software Architecture",
    "Frontend Engineering",
    "Node.js",
    "TypeScript",
    "AWS",
    "GCP",
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
    />
  );
}
