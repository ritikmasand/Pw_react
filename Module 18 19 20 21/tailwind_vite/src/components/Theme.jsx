import React, { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState("light");
  const changeTheme = (selectTheme) => {
    document.documentElement.classList.remove("dark", "pastel");
    if (selectTheme !== "light") {
      document.documentElement.classList.add(selectTheme);
    }
    setTheme(selectTheme);
  };
  return (
    //   <div
    //     className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-white text-black
    //    dark:bg-gray-800 dark:text-white pastel:bg-pink-50 pastel:text-pink-500"
    //   >
    //     <h1 className="text-3xl font-bold text-blue-500 dark:text-blue-300 pastel:text-pink-500">
    //       Reusable theming system
    //     </h1>
    //     <p className="text-lg">
    //       Easily toggle between Dark,Light and Pastel theme
    //     </p>
    <div className="flex gap-4">
      <button
        onClick={() => changeTheme("light")}
        className="px-4 py-2 bg-blue-500 text-white hover:scale-105 shadow transition-transform rounded"
      >
        Light
      </button>
      <button
        onClick={() => changeTheme("dark")}
        className="px-4 py-2 bg-gray-700 text-white hover:scale-105 shadow transition-transform rounded"
      >
        Dark
      </button>
      <button
        onClick={() => changeTheme("pastel")}
        className="px-4 py-2 bg-pink-400 text-white hover:scale-105 shadow transition-transform rounded"
      >
        Pastel
      </button>
    </div>
    //  <div
    //   className="mt-6 border rounded-xl shadow-lg p-4 bg-gray-100 text-black dark:bg-gray-800
    //  dark:text-white pastel:bg-purple-50 pastel:text-purple-800"
    // >
    //   <h2 className="text-xl font-semibold text-blue-500 dark:text-amber-400 pastel:text-purple-500">
    //     Themed Card
    //   </h2>
    //   <p className="mt-2">This card quickly adapts to the theme </p>
    // </div>

    // </div>
  );
}

export default Theme;
