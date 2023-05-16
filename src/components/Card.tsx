import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { Post, Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blogPost: Post;
}
const Card = ({ blogPost }: Props) => {
  return (
    <div className=" mb-6 last:mb-0 lg:mb-0 flex flex-col gap-2 group  justify-center items-center  ">
      <Image
        src={blogPost.imageUrl}
        alt={blogPost.title}
        className={"rounded-md drop-shadow transition group-hover:scale-105"}
        width={400}
        height={300}
      />
      <h6 className="text-lg text-slate-800">{blogPost.title}</h6>
      <p className="text-slate-500 text-center">{blogPost.description}</p>
      <Link href={`/post/${blogPost.slug}`} className={"text-slate-500 hover:text-sky-500 flex"}>
        <span>See More</span>
        <ChevronDoubleRightIcon className="w-3" />
      </Link>
    </div>
  );
};

export default Card;
