import "./App.css";
import { useState } from "react";
import Card from "./Card";
import React from "react";
function App() {
  // const [isActive, setActive] = useState("true");

  // const ToggleClass = () => {
  //   setActive(!isActive);
  // };

  const [isActive, setActive] = useState("btn-1");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <h1 className={isActive ? "Show" : "hide"}>Text 1</h1> */}
          {isActive === "btn-1" && <h1>Text 1</h1>}
          {isActive === "btn-2" && <h1>Text 2</h1>}
          {isActive === "btn-3" && <h1>Text 3</h1>}
          {isActive === "btn-4" && <h1>Text 4</h1>}
          {isActive === "btn-5" && <h1>Text 5</h1>}
        </div>

        <button onClick={() => setActive("btn-1")}>Button 1</button>
        <button onClick={() => setActive("btn-2")}>Button 2</button>
        <button onClick={() => setActive("btn-3")}>Button 3</button>
        <button onClick={() => setActive("btn-4")}>Button 4</button>
        <button onClick={() => setActive("btn-5")}>Button 5</button>

        {/* <div className="div">
          <button
            onClick={(e) => {
              setActive("Firstname");
            }}
          >
            One
          </button>
          <button onClick={() => setActive("Secoundname")}>Tow</button>
          <button
            onClick={(e) => {
              setActive("ThirdName");
            }}
          >
            Three
          </button>

          <div className="card">
            {active === "Firstname" && <Card title="1" />}
            {active === "Secoundname" && <Card title="2" />}
            {active === "ThirdName" && <Card title="3" />}
          </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
