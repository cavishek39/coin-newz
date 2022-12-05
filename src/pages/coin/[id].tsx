import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";

const CoinPage = () => {
  const coinInfoUrl =
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

  const { data, isLoading } = useQuery({
    queryKey: ["coin-info"],
    queryFn: () => fetch(coinInfoUrl).then((response) => response.json()),
    // onSuccess(data) {
    //   console.log(`Coin info ${JSON.stringify(data)}`);
    // },
  });

  return (
    <div>
      <div>
        <img src={data?.image?.large} alt="/" className="w-12" />
        <div>
          <p className="font-bold">{`${data?.name} price`}</p>
          <p>{`${data?.symbol?.toUpperCase()}/INR`}</p>
        </div>
      </div>

      <div>
        <div>
          <div>
            {data?.market_data?.current_price ? (
              <p>₹{data?.market_data?.current_price.inr?.toLocaleString()}</p>
            ) : null}
            <p>{"7 days"}</p>
          </div>
          <div>
            <Sparklines data={data?.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div>
            <div>
              <p>{"Market Cap"}</p>
              {data?.market_data?.market_cap ? (
                <p>{`₹${data?.market_data?.market_cap.inr.toLocaleString()}`}</p>
              ) : null}
            </div>
            <div>
              <p>{"Volume (24h)"}</p>
              {data?.market_data?.market_cap ? (
                <p>{`₹${data?.market_data?.total_volume.inr.toLocaleString()}`}</p>
              ) : null}
            </div>
          </div>

          <div>
            <div>
              <p>{"24h High"}</p>
              {data?.market_data?.high_24h ? (
                <p>{`₹${data?.market_data?.high_24h.inr.toLocaleString()}`}</p>
              ) : null}
            </div>
            <div>
              <p>{"24h Low"}</p>
              {data?.market_data?.low_24h ? (
                <p>{`₹${data?.market_data?.low_24h.inr.toLocaleString()}`}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div>
          <p>Market Stats</p>
          <div>
            <div>
              <p>Market Rank</p>
              {data?.market_cap_rank}
            </div>
            <div>
              <p>Hashing Algorithm</p>
              {data?.hashing_algorithm ? (
                <p>{data?.hashing_algorithm}</p>
              ) : null}
            </div>
            <div>
              <p>Trust Score</p>
              {data?.tickers ? (
                <p>{data?.liquidity_score?.toFixed(2)}</p>
              ) : null}
            </div>
          </div>

          <div>
            <div>
              <p>Price Change (24h)</p>
              {data?.market_data ? (
                <p>
                  {data?.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>

            <div>
              <p>Price Change (7d)</p>
              {data?.market_data ? (
                <p>{data.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p>Price Change (14d)</p>
              {data?.market_data ? (
                <p>
                  {data?.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <div>
              <p>Price Change (30d)</p>
              {data?.market_data ? (
                <p>
                  {data?.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (60d)</p>
              {data?.market_data ? (
                <p>
                  {data.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (1y)</p>
              {data?.market_data ? (
                <p>{data.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>

          <div>
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p>About {data?.name}</p>
        <p>{data?.description?.en}</p>
      </div>
    </div>
  );
};

export default CoinPage;
