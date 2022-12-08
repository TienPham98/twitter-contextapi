import Image from "next/image";
import React from "react";

const TrendingList = () => {
  return (
    <div className="mt-4 flex items-center">
      <div>
        <p className="text-gray-500 text-[14px] mb-1">Business · LIVE</p>
        <h1 className="font-medium pr-2">
          CNBC: Dogecoin is up 35% since Monday as Elon Musks deal to buy
          Twitter approaches a close.
        </h1>
      </div>

      <div>
        <Image
          className="rounded-[20px]"
          src="/dogecoin-logo.png"
          alt=""
          height="120"
          width="120"
        />
      </div>
    </div>
  );
};

export default TrendingList;
