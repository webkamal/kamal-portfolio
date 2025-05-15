import { notFound } from "next/navigation";
import axios from "axios";
import Comments from "../../components/disqus/Comments"; // Fixed import path

export default async function Post({ params }: { params: { slug: string } }) {
  const { data: posts } = await axios.get(
    `https://webkamal.com/wp-json/wp/v2/posts?slug=${params.slug}`
  );

  if (!posts || posts.length === 0) return notFound();

  const post = posts[0];

  return (
    <div className="container mx-auto py-8 max-w-3xl">
      <article className="prose lg:prose-xl">
        <h1>{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </article>

      <div className="mt-16">
        <Comments
          shortname="webkamal-1"
          config={{
            url: `http://localhost:3000/blog/${params.slug}`,
            identifier: post.id.toString(),
            title: post.title.rendered,
          }}
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { data: posts } = await axios.get(
    "https://webkamal.com/wp-json/wp/v2/posts"
  );
  return posts.map((post: any) => ({ slug: post.slug }));
}
