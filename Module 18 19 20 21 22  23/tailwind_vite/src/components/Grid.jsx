import React from "react";

const Products = [
  {
    name: "Wireless headphones",
    price: "$2499",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533161cv12d.jpg",
  },
  {
    name: "Smartwatch",
    price: "$5499",
    img: "https://m.media-amazon.com/images/I/71qq-p26D4L._AC_.jpg",
  },
  {
    name: "bluetooth Speaker",
    price: "$1499",
    img: "https://mms.businesswire.com/media/20150903005485/en/484022/5/150422_JBL_Xtreme_all_029_FS_x1.jpg?download=1",
  },
  {
    name: "Gaming Mouse",
    price: "$499",
    img: "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-1-black.png",
  },
  {
    name: "Portable Powerbank",
    price: "$699",
    img: "https://m.media-amazon.com/images/I/81d2v+86WzL._AC_SL1500_.jpg",
  },
  {
    name: "DSLR Camera",
    price: "$6499",
    img: "https://i5.walmartimages.com/asr/95e980d9-0bdb-41ac-8877-8b293360a7b1_1.0d0b555285b2159a778089ab4c060be6.jpeg",
  },
];

function Grid() {
  return (
    <div className="p-10 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-60 text-center hover:shadow-lg transition duration-300"
          >
            <img src={product.img} className="w-full h-40 rounded mb-4" />
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <h2 className="text-gray-600 mb-2">{product.price}</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
