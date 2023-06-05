import prisma from "@/lib/prisma";

export async function POST() {
  const creatingDuplicateUser = prisma.user.create({
    data: {
      name: "duplicated",
      email: "John@prisma.io",
    },
  });

  const depositUpdate = prisma.post.update({
    where: {
      id: 2,
    },
    data: {
      likeNum: {
        increment: 5,
      },
    },
  });

  const result = await prisma.$transaction([depositUpdate, creatingDuplicateUser]);

  return new Response(JSON.stringify(result));
}
