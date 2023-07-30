import { db } from "@/db";
import { users } from "@/db/schema";
import {
  and,
  between,
  eq,
  gt,
  gte,
  ilike,
  inArray,
  isNotNull,
  isNull,
  like,
  lt,
  lte,
  ne,
  not,
  notBetween,
  notIlike,
  notInArray,
  notLike,
  or,
} from "drizzle-orm";

export async function GET() {
  // const result = await db
  //   .select()
  //   .from(users)
  //   .where(and(eq(users.id, 60), or(like(users.fullName, "Alan%"), gt(users.score, 90))));

  // const result = await db.query.users.findFirst({
  //   with: {
  //     profile: true,
  //     posts: true,
  //   },
  // });

  const result = await db.query.posts.findFirst({
    with: {
      author: true,
      postCategories: {
        columns: {
          categoryId: false,
          postId: false,
        },
        with: {
          category: {
            columns: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  // const result2 = await db.query.categories.findFirst({
  //   with: { posts: true },
  // });

  return new Response(JSON.stringify(result));
}
