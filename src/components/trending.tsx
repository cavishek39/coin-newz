import React from "react";
import { useQuery } from "@tanstack/react-query";

type TrendingProps = {};

const TRENDING_COINS_API = "https://api.coingecko.com/api/v3/search/trending";

const Trending = () => {
  const { data: trendingData, isLoading } = useQuery({
    queryKey: ["trending"],
    queryFn: () =>
      fetch(TRENDING_COINS_API).then((response) => response.json()),
    // onSuccess: (result) => {
    //   console.log(`Trending data ${JSON.stringify(result)}`);
    // },
  });

  if (isLoading) return <h2>Loading Trending data...</h2>;

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="py-4 text-2xl font-bold">Trending Coins</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trendingData?.coins?.map(({ item }: any) => (
          <div
            key={item?.coin_id}
            className="rounded-div flex justify-between p-4 duration-300 ease-in-out hover:scale-105"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  className="rounded-full pr-4"
                  src={item?.small}
                  alt={item?.small}
                />
                <div>
                  <p className="font-bold">{item?.name}</p>
                  <p>{item?.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="m-2 w-4"
                  src="https://cdn.pixabay.com/photo/2013/12/08/12/12/bitcoin-225079__340.png"
                  alt="/"
                />
                <p>{item?.price_btc?.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
