import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}`,
        headers: {
          "CF-Access-Client-Id": `718764166307b11ddee33f443faaf3c4.access`,
          "CF-Access-Client-Secret": `83c1de65addf7b5e792a87f456cfe3956b132a4f8005156f27e3accce65c2f91`
        }
      }),
      cache: new InMemoryCache()
    });
  }

  return client;
};
