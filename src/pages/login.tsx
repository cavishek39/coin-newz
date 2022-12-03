import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>{`Welcome back, ${session?.user?.name}`}</p>
        <img
          src={session?.user?.image as string}
          alt=""
          style={{ height: "50px", width: "50px", borderRadius: "25px" }}
        />
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
