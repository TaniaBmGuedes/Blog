import { postsTable } from "@/db/drizzle/schema";
import { drizzleDb } from "@/db/drizzle";

(async () => {
  const posts = await drizzleDb.select().from(postsTable);

  console.log(posts);
})();
