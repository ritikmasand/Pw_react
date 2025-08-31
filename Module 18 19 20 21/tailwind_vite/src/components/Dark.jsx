import React, { useEffect, useState } from "react";

function Dark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div>
      <button
        onClick={() => setIsDark((prev) => !prev)}
        className="bg-indigo-500 px-4 py-2 text-white rounded m-10"
      >
        Toggle Dark Mode
      </button>
      <div className="m-10 bg-white dark:bg-gray-800 text-black dark:text-white p-3 rounded border dark:p-10 font-crazyFont dark:font-display">
        <h3 className="text-3xl mb-5">Enabling Dark/light Mode</h3>
        <p className="dark:text-gray-300 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptatibus fugit minus culpa laboriosam amet sed neque quisquam,
          ducimus, adipisci repudiandae quod odio reiciendis iusto magni
          nesciunt quasi beatae corrupti!
        </p>
      </div>
      <p className="bg-wall-300 text-avocado-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, ab!
      </p>
      <p className="btn-card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, modi!
        </p>
      </p>
    </div>
  );
}

export default Dark;
