import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { parseCookies } from "nookies";

export default withApollo(({ ctx, headers, initialState }) => {
  const cookies = parseCookies(ctx);
  const token = cookies.AUTH_TOKEN;
  const cache = new InMemoryCache().restore({ initialState });
  cache.writeData({
    data: {
      isLoggedIn: !!token
    }
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: process.env.SERVER_URL, // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      fetch,
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ""
      }
    }),
    cache,
    resolvers: {}
  });
});
