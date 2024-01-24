import { db } from "@/db";
import { posts, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST() {
  const newUsers = await db
    .insert(users)
    .values({
      address: "street 1",
      fullName: "user 3",
      phone: "9554554",
      score: 95,
    })
    .returning({ userId: users.id });

  const userId = newUsers[0].userId;

  ["post 1", "post 2"].forEach(
    async (post) =>
      await db
        .insert(posts)
        .values({
          authorId: userId,
          text: post,
        })
        .execute()
  );

  const result = await db.query.users.findFirst({
    where: eq(users.id, userId),
    with: {
      posts: true,
    },
  });

  return new Response(JSON.stringify(result));
}
