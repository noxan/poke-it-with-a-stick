import { setCookie } from "nookies";

export default async (req, res) => {
  const { password } = JSON.parse(req.body);

  if (password === process.env.APP_PASSWORD) {
    res.status(200).json({ message: "✅" });
  } else {
    res.status(401).json({ message: "❌" });
  }
};
