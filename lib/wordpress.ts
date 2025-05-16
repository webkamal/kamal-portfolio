export async function getFeaturedPosts() {
  const res = await fetch(
    "https://webkamal.com/wp-json/wp/v2/posts?per_page=3&_embed"
  );
  return await res.json();
}

export async function getPost(slug: string) {
  const res = await fetch(
    `https://webkamal.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );
  return (await res.json())[0];
}
