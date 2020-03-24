import fetch from "isomorphic-unfetch";

import apiUrl from "../utils/api-url";
import StatusPanel from "../components/StatusPanel";

const startAction = async () => await fetch(apiUrl("/api/start"));
const stopAction = async () => await fetch(apiUrl("/api/stop"));

const Index = ({ code, name }) => (
  <div>
    <h1>Poke It With A Stick</h1>
    <StatusPanel
      code={code}
      name={name}
      startAction={startAction}
      stopAction={stopAction}
    />
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(apiUrl("/api/status", req));
  return await res.json();
};

export default Index;
