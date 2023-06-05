import prisma from "@/lib/prisma";

export async function PUT() {
  const updatedUsers = await prisma.user.updateMany({
    where: {
      name: {
        contains: "e",
      },
    },
    data: {
      role: "ADMIN",
    },
  });
  return new Response(JSON.stringify(updatedUsers));
}
