import { db } from "@/db";
import { users } from "@/db/schema";

export async function POST() {
  const newUsers = await db
    .insert(users)
    .values({
      address: "street 1",
      fullName: "user 1",
      phone: "9554554",
      score: 95,
    })
    .returning();

  return new Response(JSON.stringify(newUsers));
}
