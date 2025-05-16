import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react"; // Or any other social icons

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com/yourusername" target="_blank">
        <Github className="h-5 w-5 hover:text-primary transition-colors" />
      </Link>
      <Link href="https://linkedin.com/in/yourprofile" target="_blank">
        <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
      </Link>
      <Link href="https://twitter.com/yourhandle" target="_blank">
        <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
      </Link>
    </div>
  );
}
