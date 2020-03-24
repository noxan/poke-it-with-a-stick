import cookie from "cookie";

export default async (req, res) => {
  const { password } = JSON.parse(req.body);

  if (password === process.env.APP_PASSWORD) {
    res.setHeader("Set-Cookie", cookie.serialize("auth", password));
    res.status(200).json({ message: "✅" });
  } else {
    res.status(401).json({ message: "❌" });
  }
};
