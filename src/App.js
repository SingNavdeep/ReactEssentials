import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [emotion, setEmotion] = useState("Happy");

  function changeEmotion(e) {
    //console.log(`Current emotion is ${e.target.innerText}`);
    setEmotion(e.target.innerText);
  }
  function logEffect() {
    console.log(`Selected emotion is ${emotion}`);
  }
  /*
    useEffect is a hook that is called everytime after a component is rendered or re-rendered
    It takes a callback function.
  */
  useEffect(logEffect);

  return (
    <>
      <h1>Current emotion is {emotion}.</h1>
      {/*
        onclick takes a callback function. we can also define that function inline.
      */}
      <button name = "happy" onClick = {changeEmotion}>Happy</button>
      <button name = "frustrate" onClick = {(e) => setEmotion(e.target.innerText)}>Frustrated</button>
      <button name = "enthuse" onClick = {changeEmotion}>Enthusiastic</button>
    </>
  );
}

export default App;
