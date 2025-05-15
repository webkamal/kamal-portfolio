interface Project {
  title: string;
  description: string;
  url: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Jagadamba Holidays",
    description: "Laravel + Next.js travel site with 20% SEO boost.",
    url: "https://jagadambaholidays.com",
    tech: ["Laravel", "Next.js", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
