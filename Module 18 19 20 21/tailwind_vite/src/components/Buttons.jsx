import React from "react";

function Buttons() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Cool Tailwind Buttons</h1>

      <div className="ml-20 mt-4">
        <button className="bg-primary hover:bg-blue-300 text-white rounded cursor-pointer py-2 px-6">
          Primary Button
        </button>
      </div>
      <div className="ml-20 mt-4">
        <button className="border border-blue-500 hover:bg-blue-400 py-2 px-6 rounded cursor-pointer">
          Outline
        </button>
      </div>
      <div className="ml-20 mt-4">
        <button className="bg-radial from-pink-400 from-40% to-blue-700 py-2 px-6 cursor-pointer rounded">
          Gradient
        </button>
      </div>
      <div className="mt-4 ml-20">
        <button
          disabled
          className="bg-gray-600 cursor-not-allowed py-2 px-6 rounded text-white"
        >
          Disabled
        </button>
      </div>
    </div>
  );
}

export default Buttons;
