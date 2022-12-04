import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import CoinItem from "./coin-item";

type CoinSearchProps = {
  coins: any;
};
const CoinSearch = ({ coins }: CoinSearchProps) => {
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type="text" placeholder="Search a coin" />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin: any) => (
            <CoinItem coin={coin} key={coin?.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
