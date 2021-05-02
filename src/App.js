import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact, NotExists, Services, History, Location} from "./pages";

function App({login}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
          <Route path="Location" element={<Location />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotExists />} />
      </Routes>
    </div>
  );
}

export default App;
