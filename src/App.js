import "./App.css";

import Navbar from "./components/Navbar";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Navbar tittle="TextUtils" about="About TextUtiles" />
      <div className="container">
        <Text tittle="Enter Text To Analyze" />
        <Button />
      </div>
    </>
  );
}

export default App;
