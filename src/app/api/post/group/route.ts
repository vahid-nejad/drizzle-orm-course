import prisma from "@/lib/prisma";

export async function GET() {
  const groupPosts = await prisma.post.groupBy({
    by: ["authorId"],
    _sum: {
      likeNum: true,
    },
    _avg: {
      likeNum: true,
    },
    _count: {
      likeNum: true,
    },
  });
  return new Response(JSON.stringify(groupPosts));
}
