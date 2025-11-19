import { neon } from "@neondatabase/serverless";

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  const sql = neon(`${process.env.DATABASE_URL}`);
  const user =
    await sql`SELECT * FROM npm_clone WHERE username = ${username} AND password = ${password}`;

  console.log({ user: { username, password } });
  if (user.length > 0) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    await sql`INSERT INTO npm_clone (username, password) VALUES (${username}, ${password})`;

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
};
