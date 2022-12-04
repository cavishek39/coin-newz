import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinItem = ({ coin }: any) => {
  return (
    <tr key={coin.market_cap_rank?.toString()}>
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div>
          <img
            src={coin.image}
            alt={coin.id}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "15px",
            }}
          />
          <p>{coin.name}</p>
        </div>
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
      <td>{coin.market_cap}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
