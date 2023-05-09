import "@/styles/globals.css";
import { getClient } from "@/utils/apollo/Client";
import { ApolloProvider } from "@apollo/client";
const Noop = ({ children }) => <>{children}</>;
export default function App({ Component, pageProps }) {
  const client = getClient();
  const Layout = Component?.Layout || Noop;
  return (
    <ApolloProvider client={client}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
