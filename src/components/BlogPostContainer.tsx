import { Post } from "@prisma/client";
import React from "react";
import Card from "./Card";

export interface Props {
  blogPosts: Post[];
}

const BlogPostContainer = ({ blogPosts }: Props) => {
  return (
    <div className="m-4 grid lg:grid-cols-3 grid-cols-1 gap-8 justify-center  ">
      {blogPosts.map((post) => (
        <Card key={post.slug} blogPost={post} />
      ))}
    </div>
  );
};

export default BlogPostContainer;
