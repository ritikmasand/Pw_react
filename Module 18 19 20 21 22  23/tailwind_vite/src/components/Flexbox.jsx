import React from "react";

const members = [
  {
    name: "Ritik Masand",
    role: "Front-End Engineer",
    img: "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000",
  },
  {
    name: "Vikram Goel",
    role: "Back-End Engineer",
    img: "https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg",
  },
  {
    name: "Prachi Dawer",
    role: "UI Engineer",
    img: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp",
  },
];

function Flexbox() {
  return (
    <div className="p-10 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center"> Meet our Team </h1>

      <div className="flex justify-around items-center m-10 gap-4 sm:flex-col">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-60 text-center hover:shadow-lg transition duration-300 flex items-center flex-col gap-2"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-20 h-20 rounded-full mb-4"
            />

            <h2 className="text-xl font-semibold"> {member.name}</h2>
            <p className="text-gray-500"> {member.role} </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flexbox;
