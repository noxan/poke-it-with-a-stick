import fetch from "isomorphic-unfetch";

import apiUrl from "../utils/api-url";

const startAction = async () => await fetch(apiUrl("/api/start"));
const stopAction = async () => await fetch(apiUrl("/api/stop"));

const Index = ({ Code, Name }) => (
  <div>
    <h1>Poke It With A Stick</h1>
    <p>
      {Name} (code {Code})
    </p>
    <p>
      <button onClick={startAction}>Start</button>
      <button onClick={stopAction}>Stop</button>
    </p>
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(apiUrl("/api/status", req));
  return await res.json();
};

export default Index;
