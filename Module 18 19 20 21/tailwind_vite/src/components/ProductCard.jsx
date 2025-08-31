import React from "react";

function ProductCard() {
  return (
    <div className="@container border rounded-xl shadow-md bg-white max-w-[700px] mt-[60px] p-3">
      <div className="flex flex-col gap-4">
        <img
          src="https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_SL1500_.jpg"
          alt="Product"
          className="w-full h-[280px] rounded-lg @min-[400px]:h-[400px] @min-[600px]:h-[550px]"
        />
        <div className="flex-1">
          <h2 className="text-lg font-bold @min-[600px]:text-gray-600">
            Premium Wireless Headphones
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Noise cancellation, Premium sound and 30 hrs battery life
          </p>
          <div className="flex justify-between items-center gap-2">
            <span className="text-primary font-bold">$199</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
