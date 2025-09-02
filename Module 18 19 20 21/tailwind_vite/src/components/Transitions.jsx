import React from "react";

function Transitions() {
  return (
    <>
      <h1 className="text-5xl font-bold">Transitions</h1>
      <div className="w-32 h-32 transition hover:bg-blue-700 duration-700 ease-in-out">
        Hove Me
      </div>
      <div className="w-32 h-32 transition-colors duration-500 hover:bg-red-600 hover:scale-110 hover:rotate-6 delay-300">
        Only color change
      </div>
      <div className="w-32 h-32 transition-opacity opacity-100 duration-500 hover:opacity-50 bg-pink-400">
        Fade Effect
      </div>
      <h1 className="text-5xl font-bold">Animations</h1>
      <div className="w-12 h-12 bg-green-500 animate-bounce rounded-full mt-12 p-12"></div>
      <div className="w-12 h-12 bg-red-500 animate-pulse rounded mt-12 p-12"></div>
      <div className="w-12 h-12 bg-red-500 animate-ping rounded mt-12"></div>
      <div className="w-12 h-12 bg-red-500 animate-spin rounded mt-12"></div>
    </>
  );
}

export default Transitions;
