import prisma from "@/lib/prisma";
import { log } from "console";

interface Body {
  name: string;
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body: Body = await request.json();

  const updatedUser = await prisma.user.update({
    where: {
      id: +params.id,
    },
    data: {
      name: body.name,
    },
  });
  return new Response(JSON.stringify(updatedUser));
}
