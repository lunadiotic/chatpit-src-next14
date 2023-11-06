import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

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
              <Link href="api/auth/login" className="px-4 py-2 text-white rounded-md bg-emerald-500 hover:bg-emerald-600">Login</Link>
              <Link href="api/auth/signup" className="px-4 py-2 text-white rounded-md bg-emerald-500 hover:bg-emerald-600">Signup</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
