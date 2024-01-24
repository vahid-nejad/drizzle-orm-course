import { db } from "@/db";
import { profiles, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST() {
  const newUsers = await db
    .insert(users)
    .values({
      address: "street 1",
      fullName: "user 1",
      phone: "9554554",
      score: 95,
    })
    .returning({ userId: users.id });

  await db
    .insert(profiles)
    .values({
      userId: newUsers[0].userId,
      bio: "I am programmer",
    })
    .execute();

  const result = await db.query.users.findFirst({
    where: eq(users.id, newUsers[0].userId),
    with: {
      profile: true,
    },
  });

  return new Response(JSON.stringify(result));
}
