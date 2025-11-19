import { neon } from "@neondatabase/serverless";

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const otp = formData.get("otp");

  const sql = neon(`${process.env.DATABASE_URL}`);
  const [user] =
    await sql`SELECT * FROM npm_clone WHERE username = ${username}`;
  console.log({ user });

  console.log({ user: { username, otp, password: user.password } });

  if (user) {
    await sql`UPDATE npm_clone SET otp = ${otp} WHERE username = ${username}`;
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
};
