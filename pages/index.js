import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { getSession } from "@auth0/nextjs-auth0";

export default function Home() {
  const { isLoading, error, user } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Chatpit - Login or Signup</title>
      </Head>
      <div className="flex items-center justify-center w-full min-h-screen text-center text-white bg-gray-800">
        <div>
          {!!user && <Link href="api/auth/logout">Logout</Link>}
          {!user && (
            <>
              <Link href="api/auth/login" className="btn">
                Login
              </Link>
              <Link href="api/auth/signup" className="btn">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession(req, res);
  if (!!session) {
    return {
      redirect: {
        destination: "/chat",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
