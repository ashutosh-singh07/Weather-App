import React from "react";
import "./index.css";
import videoBg from "./assets/vbg.mp4";
import Weather from "./Components/Weather";

const App = () => {
  return (
    <div className="app">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="content">
        <Weather />
      </div>
    </div>
  );
};

export default App;
