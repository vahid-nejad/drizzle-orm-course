import prisma from "@/lib/prisma";

// size of page = 10
// Offest based Pagination
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);

//   const pgnum = +(searchParams.get("pgnum") ?? 0);
//   const pgsize = +(searchParams.get("pgsize") ?? 10);

//   const posts = await prisma.post.findMany({
//     skip: pgnum * pgsize,
//     take: pgsize,
//   });

//   return new Response(JSON.stringify(posts));
// }

// Cursor Based Pagination
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const cursor = +(searchParams.get("cursor") ?? 0);
  const pgsize = +(searchParams.get("pgsize") ?? 10);

  const posts = await prisma.post.findMany({
    cursor: {
      id: cursor,
    },
    take: pgsize,
  });

  return new Response(JSON.stringify(posts));
}
