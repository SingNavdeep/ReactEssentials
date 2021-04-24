import './App.css';
import {useReducer} from "react";

function App() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false);
  return (
    <>
    {/*
          when new state is dependent on prev state,
          pass a function to setChecked.
          The below arrow function for onChange callback can be moved to another function(toggle in this case) with reducer
        */}
      <input 
        type = "checkbox" value = {checked}
        onChange = {toggle} 
      />
      <p>{checked ? "checked" : "unchecked"}</p>
    </>
  );
}

export default App;
