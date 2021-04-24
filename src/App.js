import './App.css';
import {useState, useEffect} from "react";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <>
    {/*
          when new state is dependent on prev state,
          pass a function to setChecked 
        */}
      <input 
        type = "checkbox" value = {checked}
        onChange = {() => setChecked(checked => !checked) } 
      />
      <p>{checked ? "checked" : "unchecked"}</p>
    </>
  );
}

export default App;
