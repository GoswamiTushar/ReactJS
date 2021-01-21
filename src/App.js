import React, { useState } from "react";
import "./styles.css";

// var welcomeMessage = "Tushar";
// var color = "blue";
// var newCounter = 0;

export default function App() {
  // const [counter, setCounter] = useState(0);
  // function likeClickHandler(){
  //   newCounter = counter + 1;
  //   // console.log(counter);
  //   setCounter(newCounter);
  // }
  // console.log(newCounter);

  var emojiDictionary = {
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": " Grinning Squinting Face",
    "😅": " Grinning Face with Sweat",
    "🤣": " Rolling on the Floor Laughing",
    "😂": " Face with Tears of Joy",
    "🙂": " Slightly Smiling Face",
    "🙃": " Upside-Down Face",
    "😉": " Winking Face",
    "😊": " Smiling Face with Smiling Eyes",
    "😇": " Smiling Face with Halo",
    "🥰": " Smiling Face with Hearts",
    "😍": " Smiling Face with Heart-Eyes",
    "🤩": " Star-Struck",
    "😘": " Face Blowing a Kiss",
    "😗": " Kissing Face",
    "😚": " Kissing Face with Closed Eyes",
    "😙": " Kissing Face with Smiling Eyes"
  };

  // var shoppingList = ["Milk", "Eggs", "Bread", "Cheese"];

  var [emojiInput, setEmojiInput] = useState("");
  // var inlineDisplay = "inline";

  function getEmoji(emoji){
    console.log(emoji)
    setEmojiInput(emojiDictionary[emoji])
  };

  function emojiInputHandler(event){
      emojiInput = event.target.value;
      if (emojiInput in emojiDictionary){
        setEmojiInput(emojiDictionary[emojiInput]);
      } 
      else{
        setEmojiInput("We Don't have this emoji in our Database");
      }
  }

  return (
    <div className="App"><h1>EmojiPedia</h1>
    <input onChange={ emojiInputHandler }></input> 
    <h2>{ emojiInput }</h2>  
    <ul>
      {Object.keys(emojiDictionary).map(item=>{
        return <li
        onClick={()=>getEmoji(item)} 
        style={{display:"inline", fontSize:"2rem"}} key={item}> {item} 
        </li>
      })};
    </ul> 
    </div>
  );
}
