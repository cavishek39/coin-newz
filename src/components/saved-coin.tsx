import Link from "next/link";
import React from "react";

const SavedCoin = () => {
  return (
    <div>
      <p>
        You don't have any coins saved. Please save a coin to add it to watch
        list.
        <Link href={"/"}>Click here</Link>
      </p>
    </div>
  );
};

export default SavedCoin;
