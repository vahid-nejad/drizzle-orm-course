import prisma from "@/lib/prisma";

interface Body {
  name: string;
  email: string;
}

export async function POST(request: Request) {
  //   const user = await prisma.user.create({
  //     data: {
  //       email: "sakura2@prisma.io",
  //       name: "Sakura Dev",
  //       role: "USER",
  //       posts: {
  //         create: [
  //           {
  //             title: "Crash Course of prisma",
  //             published: true,
  //             catgories: {
  //               connectOrCreate: {
  //                 where: {
  //                   id: 3,
  //                 },
  //                 create: {
  //                   name: "ORM",
  //                 },
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });

  const body: Body = await request.json();
  const user = await prisma.user.create({
    data: body,
  });
  //   const users = await prisma.user.createMany({
  //     data: [
  //       { name: "Yewande", email: "yewande@prisma.io" },
  //       { name: "Yewande", email: "yewande@prisma.io" },
  //       { name: "Angelique", email: "angelique@prisma.io" },
  //     ],
  //     skipDuplicates: true,
  //   });

  return new Response(JSON.stringify(user));
}
