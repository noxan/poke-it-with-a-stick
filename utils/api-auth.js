export const checkAuth = (password) => password === process.env.APP_PASSWORD;

export const checkAuthCookie = (req) =>
  req.cookies.auth === process.env.APP_PASSWORD;
