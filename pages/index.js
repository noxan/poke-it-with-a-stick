import fetch from "isomorphic-unfetch";
import { parseCookies } from "nookies";

import apiUrl from "../utils/api-url";
import StatusPanel from "../components/StatusPanel";
import LoginPanel from "../components/LoginPanel";

const startAction = async () => await fetch(apiUrl("/api/start"));
const stopAction = async () => await fetch(apiUrl("/api/stop"));
const loginAction = async (data) => {
  const res = await fetch(apiUrl("/api/login"), {
    method: "POST",
    body: JSON.stringify(data),
  });
  if (res.ok) {
    console.log("auth ok");
  } else {
    // TODO: error handling
  }
};

const Index = ({ code, name, auth }) => (
  <div>
    <h1>Poke It With A Stick</h1>
    {auth ? (
      <StatusPanel
        code={code}
        name={name}
        startAction={startAction}
        stopAction={stopAction}
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
    const res = await fetch(apiUrl("/api/status", req));
    return { ...(await res.json()), auth };
  }

  return { auth: false };
};

export default Index;
