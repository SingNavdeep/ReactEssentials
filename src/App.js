import './App.css';
import {useEffect, useState} from "react";

function App({login}) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(setUserData);
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setUserData);
  }, []);

  if(userData) {
    return <div>{JSON.stringify(userData)}</div>
  }
    return <div>No user data</div>
}

export default App;
