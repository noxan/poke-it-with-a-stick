import fetch from "isomorphic-unfetch";
import { parseCookies, setCookie } from "nookies";

import apiUrl from "../utils/api-url";
import StatusPanel from "../components/StatusPanel";
import LoginPanel from "../components/LoginPanel";

const startAction = async () =>
  await fetch(apiUrl("/api/start"), { credentials: "include" });
const stopAction = async () =>
  await fetch(apiUrl("/api/stop"), { credentials: "include" });
const loginAction = async (data) => {
  const res = await fetch(apiUrl("/api/login"), {
    credentials: "include",
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.ok) {
    setCookie(null, "auth", data.password);
    console.log("auth ok");
  } else {
    // TODO: error handling
  }
};

const Index = ({ auth, ...props }) => (
  <div>
    <h1>Poke It With A Stick</h1>
    {auth ? (
      <StatusPanel
        startAction={startAction}
        stopAction={stopAction}
        {...props}
      />
    ) : (
      <LoginPanel loginAction={loginAction} />
    )}
  </div>
);

Index.getInitialProps = async (ctx) => {
  const { req } = ctx;
  const { auth } = parseCookies(ctx);

  if (auth) {
    const res = await fetch(apiUrl("/api/status", req), {
      headers: {
        cookie: `auth=${auth}`,
      },
    });
    return { ...(await res.json()), auth };
  }

  return { auth: false };
};

export default Index;
