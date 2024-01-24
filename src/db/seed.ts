import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import "dotenv/config";
import { categories, postOnCategories, posts, profiles, users } from "./schema";
import { faker } from "@faker-js/faker";
import { aw } from "drizzle-orm/column.d-b7dc3bdb";
import { profile } from "console";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  console.log("seeding started!");

  let userId = 0;
  for (let index = 0; index < 10; index++) {
    const user = await db
      .insert(users)
      .values({
        address: faker.location.streetAddress(),
        fullName: faker.person.fullName(),
        phone: faker.phone.number(),
        score: faker.number.int({ min: 0, max: 100 }),
      })
      .returning();
    userId = user[0].id;

    const profile = await db.insert(profiles).values({
      userId,
      bio: faker.person.bio(),
    });
  }

  const cats = await db
    .insert(categories)
    .values([
      {
        name: "Sport",
      },
      { name: "Economics" },
    ])
    .returning();

  const insertedPosts = await db
    .insert(posts)
    .values([
      {
        authorId: userId,
        text: faker.lorem.sentence(),
      },
      {
        authorId: userId,
        text: faker.lorem.sentence(),
      },
    ])
    .returning();

  await db.insert(postOnCategories).values([
    {
      categoryId: cats[0].id,
      postId: insertedPosts[0].id,
    },
    {
      categoryId: cats[1].id,
      postId: insertedPosts[0].id,
    },
    {
      categoryId: cats[0].id,
      postId: insertedPosts[1].id,
    },
    {
      categoryId: cats[1].id,
      postId: insertedPosts[1].id,
    },
  ]);

  console.log("seeding finished!");

  console.log("migration ended...");
  process.exit(0);
}

main()
  .then()
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
