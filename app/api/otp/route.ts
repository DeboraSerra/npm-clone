import fs from "fs";

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const otp = formData.get("otp");

  const usersFilePath = "data/users.json";
  const usersData = fs.readFileSync(usersFilePath, "utf-8");
  const users = JSON.parse(usersData);

  const user = users.find(
    (u: { username: string; otp: string }) => u.username === username
  );

  if (user) {
    const newUsers = users.map((u: { username: string }) => {
      if (u.username === username) {
        return { ...u, otp: otp };
      }
      return u;
    });
    fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, 2));
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
};
