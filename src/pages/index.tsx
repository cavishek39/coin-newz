import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

import { trpc } from "../utils/trpc";
import CoinSearch from "../components/coin-search";
import { Coin } from "../types/coin";
import Trending from "../components/trending";

const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true`;

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const { data: coinsData, isLoading } = useQuery<Coin[]>({
    queryKey: ["coins"],
    queryFn: () => fetch(API).then((response) => response.json()),
    onSuccess: (result) => {
      // console.log("Data as result", result);
    },
  });

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div>
      {!!coinsData && coinsData?.length > 0 && (
        <CoinSearch coins={coinsData as Coin[]} />
      )}
      <Trending />
    </div>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
