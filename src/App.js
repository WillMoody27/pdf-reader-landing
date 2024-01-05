import "./css/App.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
