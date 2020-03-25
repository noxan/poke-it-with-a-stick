import cookie from "cookie";

import { checkAuth } from "../utils/api-auth";

export default async (req, res) => {
  const { password } = JSON.parse(req.body);

  if (checkAuth(password)) {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("auth", password, { path: "/" }),
    );
    res.status(200).json({ message: "✅" });
  } else {
    res.status(401).json({ message: "❌" });
  }
};
