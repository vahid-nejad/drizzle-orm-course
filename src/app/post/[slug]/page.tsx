import { getAllPosts, getPostBySlug } from "@/lib/getData";

import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }: Props) => {
  const post = await getPostBySlug(params.slug);
  return (
    <div className="p-2 flex flex-col gap-2 ">
      <Image
        src={post?.bannerUrl ?? ""}
        alt={post?.title ?? ""}
        width={900}
        height={300}
        className="rounded-2xl drop-shadow-md"
      />
      <h3 className="text-slate-800 text-2xl font-bold">{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
};

export default BlogPostPage;
