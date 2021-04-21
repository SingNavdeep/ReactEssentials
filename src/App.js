import './App.css';
import restaurant from './restaurant.jpeg'

const dishes = ["Mac and cheese", "Pizza", "Burger", "Coffee(Hot and cold)", "Tea"];
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <img src={restaurant} alt="actual restaurant pic"></img>
      <ul style={{textAlign:"left"}}>
        {props.menuItems.map((item) => (
          <li key={item.index}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}
function App() {
  var currYear = new Date().getFullYear();
  var dishesObj = dishes.map((dishName, i) => ({index:i, title: dishName}));

  return (
    <div className="App">
      <Header name="Navdeep"/>
      <Main adjective= "amazing" menuItems={dishesObj}/>
      <Footer year={currYear}/>
    </div>
  );
}

export default App;
