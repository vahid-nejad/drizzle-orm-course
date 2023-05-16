import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.post.findFirst({
    where: {
      slug: params.slug,
    },
  });
  if (!post) {
    return {
      title: "Not Found",
      description: "This page not found!",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/post/${post.slug}`,
      languages: {
        "en-CA": `en-CA/post/${post.slug}`,
      },
    },
    twitter: {},
  };
}

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();

  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }: Props) => {
  const post = await prisma.post.findFirst({
    where: {
      slug: params.slug,
    },
  });
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
