import StarRatingComponent from "./StarRatingComponent";
import { useState } from "react";

export default function ProductCard({rating = 5}) {
  
  

  return (
    <div className="flex flex-col">
      {/* backgroundless image container */}
      <div className=" flex items-center justify-center overflow-hidden w-[295px] h-[295px] rounded-[20px] bg-[#e5e5e5]">
        <img
          src="product images/cardImage0.png"
          alt=""
          className=" max-h-75 max-w-80 object-contain object-center"
        />
      </div>

      {/* description of image */}
      <div className=" flex flex-col gap-[5px]">
        <p className=" text-xl font-semibold">T-shirt with Tape Details</p>
          <StarRatingComponent rating={rating}/>
        <p className=" font-semibold text-2xl">$120</p>
      </div>
    </div>
  );
}
