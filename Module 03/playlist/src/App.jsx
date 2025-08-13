import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SongItem from "./components/SongItem";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      id: "1",
      title: "Tauba Tauba – Bad Newz",
      artist: "Karan Aujla",
      image:
        "https://ca.billboard.com/media-library/vicky-kaushal-and-karan-aujla-tauba-taubaa-from-bad-newz.jpg?id=52824944&width=1200&height=800&quality=90&coordinates=78%2C0%2C122%2C0",
    },
    {
      id: "2",
      title: "Aaj Ki Raat – Stree 2",
      artist: "Madhubanti Bagchi & Divya Kumar",
      image: "https://i.ytimg.com/vi/RbTNjD2_RMo/maxresdefault.jpg",
    },
    {
      id: "3",
      title: "Taras – Munjya",
      artist: "Sharvari Wagh",
      image: "https://i.ytimg.com/vi/gHtcs1-SfzU/maxresdefault.jpg",
    },
    {
      id: "4",
      title: "Sajni – Laapataa Ladies",
      artist: "Arijit Singh",
      image:
        "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240212145840.jpg",
    },
    {
      id: "5",
      title: "Husn – Single Release",
      artist: "Anuv Jain",
      image: "https://i.ytimg.com/vi/wnK3ft1f4bc/maxresdefault.jpg",
    },
    {
      id: "6",
      title: "Bhool Bhulaiyaa 3 – Title Track",
      artist: "Neeraj Shridhar, Diljit Dosanjh & Pitbull",
      image:
        "https://c.saavncdn.com/443/Bhool-Bhulaiyaa-3-Hindi-2024-20241108131003-500x500.jpg",
    },
    {
      id: "7",
      title: "Aayi Nai – Stree 2",
      artist: "Shraddha Kapoor & Rajkummar Rao",
      image: "https://i.ytimg.com/vi/nFgsBxw-zWQ/maxresdefault.jpg",
    },
  ];

  return (
    <>
      <h2>🎵 My Music Playlist</h2>
      {data.map((song) => (
        <SongItem
          title={song.title}
          artist={song.artist}
          id={song.id}
          image={song.image}
        />
      ))}
    </>
  );
}

export default App;
