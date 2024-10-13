import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Text from "./components/Text";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggele = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(65 67 68)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar
        tittle="TextUtils"
        about="About TextUtiles"
        mode={mode}
        toggeleMode={toggele}
      />
      <div className="container">
        {/* <Text tittle="Enter Text To Analyze" mode={mode} /> */}
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
