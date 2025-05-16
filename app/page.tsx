import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Newsletter from "@/components/Newsletter";
import { getFeaturedPosts } from "@/lib/wordpress";

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  const projects = [
    {
      title: "Jagadamba Holidays",
      description: "Laravel + Next.js travel site",
      url: "https://jagadambaholidays.com",
      tech: ["Laravel", "Next.js"],
    },
    // Add 4 more projects...
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container py-24 lg:py-32">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm Kamal Khanal
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Senior Full-Stack Developer specializing in modern web
              technologies.
            </p>
            <div className="mt-10 flex gap-4">
              <Button asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Kamal Khanal"
              width={400}
              height={400}
              className="rounded-full border-8 border-primary/10 shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {projects.map((project) => (
              <Card key={project.title} className="min-w-[300px]">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Button asChild variant="link" className="p-0">
                    <Link href={project.url}>View Project →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Image
                    src={post.featured_image || "/placeholder.jpg"}
                    alt={post.title.rendered}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title.rendered}
                    </Link>
                  </h3>
                  <div
                    className="prose text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
