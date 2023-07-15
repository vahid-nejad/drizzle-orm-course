import { db } from "@/db";
import { users } from "@/db/schema";

export default async function Home() {
  const result = await db.select().from(users);
  return <div>{JSON.stringify(result)}</div>;
}
