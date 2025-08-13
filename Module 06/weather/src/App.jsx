import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temprature: "",
    windSpeeed: "",
    weather: "",
  });
  const Api_Key = "1fdbf0a2f50cd3d40b9b0a5017429296";
  function getweather(e) {
    e.preventDefault();
    // console.log("Function trigerred");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
    )
      .then((res) => res.json())
      .then((resp) => {
        setWeather({
          temprature: `${resp.main.temp}` - 273,
          windSpeeed: `${resp.wind.speed} m/s`,
          weather: `${resp.weather[0].description}`,
        });
        console.log(resp);
      });
  }
  return (
    <>
      <form onSubmit={getweather}>
        <h1>Weather forecast</h1>
        <input
          type="text"
          placeholder="Enter your City"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
        <div> Temprature: {weather.temprature} </div>
        <div> WindSpeed : {weather.windSpeeed} </div>
        <div> Description: {weather.weather}</div>
      </form>
    </>
  );
}

export default App;
