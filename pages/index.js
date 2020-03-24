import fetch from "isomorphic-unfetch";

import apiUrl from "../utils/api-url";

const Index = ({ Code, Name }) => (
  <div>
    <p>Poke It With A Stick</p>
    {Name} (code {Code})
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(apiUrl("/api/status", req));
  return await res.json();
};

export default Index;
