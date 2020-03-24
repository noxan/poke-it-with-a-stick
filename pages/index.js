import fetch from "isomorphic-unfetch";

import apiUrl from "../utils/api-url";

const Index = ({ Code, Name }) => (
  <div>
    <h1>Poke It With A Stick</h1>
    <p>
      {Name} (code {Code})
    </p>
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(apiUrl("/api/status", req));
  return await res.json();
};

export default Index;
