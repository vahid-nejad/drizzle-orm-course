import prisma from "@/lib/prisma";
import { log } from "console";

interface Body {
  name: string;
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body: Body = await request.json();

  const updatedUser = await prisma.user.upsert({
    where: {
      id: +params.id,
    },
    update: {
      name: "userFounded",
    },
    create: {
      name: "newUser",
      email: "newUser@prisma.io",
    },
  });
  return new Response(JSON.stringify(updatedUser));
}
