import './App.css';

function SecretComponent() {
  return <h1>Secret info for authorized users only.</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this.</h1>
}

function App(props) {
    return (
      <> //react fragment
        {props.authorized ? <SecretComponent /> : <RegularComponent />}
      </>
    );
}

export default App;
