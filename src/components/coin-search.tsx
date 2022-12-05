import React, { useState } from "react";
import { Coin } from "../types/coin";
import CoinItem from "./coin-item";

type CoinSearchProps = {
  coins: Coin[];
};

const CoinSearch = ({ coins }: CoinSearchProps) => {
  const [searchText, setSearchText] = useState<string>("");

  const filteredArray = () => {
    return coins.filter((coin) => {
      if (searchText === "") {
        return coins;
      } else if (coin.name.toLowerCase().includes(searchText.toLowerCase())) {
        return coins;
      }
    });
  };

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col justify-between pt-4 pb-6 text-center md:flex-row md:text-right">
        <h1 className="my-2 text-2xl font-bold">Search Crypto</h1>
        <form>
          <input
            type="text"
            className="w-full rounded-2xl border-input bg-primary px-4 py-2 shadow-xl"
            placeholder="Search a coin"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead className="border-b">
          <tr>
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray().map((coin: Coin) => (
            <CoinItem coin={coin} key={coin?.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
