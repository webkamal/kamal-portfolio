import Link from "next/link";
import axios from "axios";

export default async function Blog() {
  const { data: posts } = await axios.get(
    "https://webkamal.com/wp-json/wp/v2/posts"
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="space-y-8">
        {posts.map((post: any) => (
          <article key={post.id}>
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              <h2 className="text-2xl font-semibold">{post.title.rendered}</h2>
            </Link>
            <div
              className="prose mt-2"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </article>
        ))}
      </div>
    </div>
  );
}
