import prisma from "@/lib/prisma";

export async function GET() {
  // const users = await prisma.user.findMany({
  //   where: {
  //     OR: [
  //       {
  //         id: {
  //           not: {
  //             gt: 2,
  //           },
  //         },
  //       },
  //       {
  //         name: {
  //           startsWith: "s",
  //         },
  //       },
  //     ],
  //   },
  // });

  const users = await prisma.user.findMany({
    where: {
      posts: {
        none: {
          published: false,
        },
      },
    },
  });

  return new Response(JSON.stringify(users));
}
