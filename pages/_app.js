import "@/styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
