import fs from "fs";

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  const usersFilePath = "data/users.json";
  const usersData = fs.readFileSync(usersFilePath, "utf-8");
  const users = JSON.parse(usersData);

  const user = users.find(
    (u: { username: string; password: string }) =>
      u.username === username && u.password === password
  );
  console.log({ user: { username, password } });
  if (user) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    users.push({ username, password });
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
};
