import prisma from "./prisma";

export async function getAllPosts() {
  return await prisma.post.findMany();
}

export async function getPostBySlug(slug: string) {
  return await prisma.post.findFirst({
    where: {
      slug: slug,
    },
    include: {
      author: true,
    },
  });
}
