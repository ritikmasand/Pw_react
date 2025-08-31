import React from "react";

function ProfileCard() {
  return (
    <div className="mx-auto text-center">
      <img
        src="https://res.cloudinary.com/vistaprint/images/w_1000,h_600,c_scale,w_448,h_268,dpr_2/f_auto,q_auto/v1705580305/ideas-and-advice-prod/en-us/featured_14223857a51/featured_14223857a51.png?_i=AA"
        className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
      ></img>

      <h2 className="mt-4 text-2xl font-bold text-gray-700"> Ritik Masand </h2>
      <p className="text-gray-600">Software Developer</p>
      <p className="mt-2 text-gray-600">
        Passionate about teaching and vibe-coding 🪄
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:bg-amber-400">
          Follow
        </button>
        <button className="bg-secondary px-4 py-2 rounded-lg hover:bg-gray-400">
          Message
        </button>
        <div className="bg-blue-300/50 text-primary p-4">This is a div </div>
      </div>

      <input
        placeholder="Enter your Input"
        className="border-white rounded-2xl p-3 focus:outline-amber-500 focus:bg-blue-700/80"
      />

      <div className="group hover:bg-green-500">
        <p className="text-lg group-hover:text-7xl">Profile Name</p>
        <p className="text-sm text-red-700">Photos</p>
      </div>

      <button
        className="bg-blue-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
        disabled
      >
        Submit
      </button>
   
    </div>
  );
}

export default ProfileCard;
