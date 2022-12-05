import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Coin } from "../types/coin";

type CoinItemProps = {
  coin: Coin;
};

const CoinItem = ({ coin }: CoinItemProps) => {
  return (
    <tr
      key={coin.market_cap_rank?.toString()}
      className="h-[80px] overflow-hidden border-b"
    >
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="flex items-center">
          <img
            className="mr-2 w-6 rounded-full"
            src={coin.image}
            alt={coin.id}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "15px",
            }}
          />
          <p className="hidden sm:table-cell">{coin.name}</p>
        </div>
      </td>
      <td>{coin.symbol?.toUpperCase()}</td>
      <td>{`₹${coin.current_price?.toLocaleString()}`}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {`${coin.price_change_percentage_24h.toFixed(2)}%`}
          </p>
        ) : (
          <p className="text-red-600">
            {`${coin.price_change_percentage_24h.toFixed(2)}%`}
          </p>
        )}
      </td>
      <td className="hidden w-[180px] md:table-cell">
        {`₹${coin.total_volume.toLocaleString()}`}
      </td>
      <td className="w-[180px] sm:table-cell">
        {`₹${coin.market_cap.toLocaleString()}`}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
