import React, { useState } from "react";
import "./styles.css";

var welcomeMessage = "Tushar";
var color = "blue";
var newCounter = 0;

export default function App() {

  const [counter, setCounter] = useState(0);

  function likeClickHandler(){
    
    newCounter = counter + 1;
    // console.log(counter);
    setCounter(newCounter);
  }

  console.log(newCounter);

  return (
    <div className="App"><h1 style={{color:color}}>Welcome {welcomeMessage}</h1>
    <button onClick={likeClickHandler}>Test Button</button>
    <div>{newCounter}</div>
    </div>
  );
}
