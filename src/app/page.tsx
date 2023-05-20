import BlogPostContainer from "@/components/BlogPostContainer";
import { getAllPosts } from "@/lib/getData";
import { Metadata } from "next";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <div className="flex justify-center">
        <h1 className="m-2 text-center text-2xl font-bold capitalize bg-gradient-to-r from-red-600 to-purple-500 inline bg-clip-text text-transparent">
          Wellcome to dummy blog
        </h1>
      </div>
      <BlogPostContainer blogPosts={posts} />
    </main>
  );
}
