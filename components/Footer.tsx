import Link from "next/link";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Kamal Khanal</h3>
          <p className="text-muted-foreground">
            Senior Full-Stack Developer building modern web experiences.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <Link
              href="/"
              className="block text-muted-foreground hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block text-muted-foreground hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="block text-muted-foreground hover:text-primary"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <SocialLinks />
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kamal Khanal. All rights reserved.
      </div>
    </footer>
  );
}
