import Link from "next/link";
import Image from "next/image";

// Mock data (replace with real API calls)
const featuredProjects = [
  {
    title: "Jagadamba Holidays",
    description: "Laravel + Next.js travel site with 20% SEO boost.",
    url: "/projects",
    tech: ["Laravel", "Next.js"],
  },
];

const featuredPosts = [
  {
    title: "Why I Switched to Next.js",
    excerpt: "My journey from WordPress to modern web development",
    slug: "why-nextjs",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/profile.jpg" // Replace with your image
              alt="Kamal Khanal"
              width={300}
              height={300}
              className="rounded-full border-4 border-white shadow-lg mx-auto md:mx-0"
              priority
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Kamal Khanal</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Senior Full-Stack Developer specializing in Laravel & Next.js
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View My Work
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
              >
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="border rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.url}
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest Articles
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="border-b pb-8">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-semibold hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline inline-block mt-4"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
