import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alrt, setAlrt] = useState(null);
  const showAlert = (msg, type) => {
    setAlrt({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlrt(null);
      console.log("timeOout");
    }, 2000);
  };

  const toggele = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(65 67 68)";
      showAlert("dark mode activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode activated", "success");
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Text />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <>
      <Navbar
        tittle="TextUtils"
        about="About TextUtiles"
        mode={mode}
        toggeleMode={toggele}
      />
      <Alert alert={alrt} />
      <div className="container">
        <Text
          showAlert={showAlert}
          tittle="Enter Text To Analyze"
          mode={mode}
        />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
