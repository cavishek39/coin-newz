import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";

const CoinPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const coinInfoUrl = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&sparkline=true`;

  const { data, isLoading } = useQuery({
    queryKey: ["coin-info"],
    queryFn: () => fetch(coinInfoUrl).then((response) => response.json()),
    onSuccess(data) {
      console.log(`Coin info ${JSON.stringify(data?.name)}`);
    },
    onError: (err) => {
      console.error(`Something went wrong ${err}`);
    },
  });

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="rounded-div my-12 py-8">
      <div className="flex py-8">
        <img src={data?.image?.large} alt="/" className="mr-8 w-20" />
        <div>
          <p className="text-3xl font-bold">{`${data?.name} price`}</p>
          <p>{`${data?.symbol?.toUpperCase()}/INR`}</p>
        </div>
      </div>

      <div className=" grid gap-8 md:grid-cols-2">
        <div>
          <div className="flex justify-between">
            {data?.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                ₹{data?.market_data?.current_price.inr?.toLocaleString()}
              </p>
            ) : null}
            <p>{"7 days"}</p>
          </div>
          <div>
            <Sparklines data={data?.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">{"Market Cap"}</p>
              {data?.market_data?.market_cap ? (
                <p>{`₹${data?.market_data?.market_cap.inr.toLocaleString()}`}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">{"Volume (24h)"}</p>
              {data?.market_data?.market_cap ? (
                <p>{`₹${data?.market_data?.total_volume.inr.toLocaleString()}`}</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">{"24h High"}</p>
              {data?.market_data?.high_24h ? (
                <p>{`₹${data?.market_data?.high_24h.inr.toLocaleString()}`}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">{"24h Low"}</p>
              {data?.market_data?.low_24h ? (
                <p>{`₹${data?.market_data?.low_24h.inr.toLocaleString()}`}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Rank</p>
              {data?.market_cap_rank}
            </div>
            <div>
              <p className="text-sm text-gray-500">Hashing Algorithm</p>
              {data?.hashing_algorithm ? (
                <p>{data?.hashing_algorithm}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Trust Score</p>
              {data?.tickers ? (
                <p>{data?.liquidity_score?.toFixed(2)}</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p>Price Change (24h)</p>
              {data?.market_data ? (
                <p>
                  {data?.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>

            <div>
              <p className="text-sm text-gray-500">Price Change (7d)</p>
              {data?.market_data ? (
                <p>{data.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (14d)</p>
              {data?.market_data ? (
                <p>
                  {data?.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Price Change (30d)</p>
              {data?.market_data ? (
                <p>
                  {data?.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (60d)</p>
              {data?.market_data ? (
                <p>
                  {data.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (1y)</p>
              {data?.market_data ? (
                <p>{data.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-around p-8 text-accent">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="py-4">
        <p className="text-xl font-bold">About {data?.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.description?.en),
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinPage;
