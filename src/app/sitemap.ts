import { getAllPosts } from "@/lib/getData";

export default async function sitemap() {
  const baseUrl = "https://www.dummyblog.com";

  const posts = await getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: post.updatedAt,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },

    ...postUrls,
  ];
}
