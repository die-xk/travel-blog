import "./App.scss";
import Beach from "./components/Beach";
import Hero from "./components/Hero";
import Mountains from "./components/Mountains";
import Second from "./components/Second";
const App = () => {
  return (
    <div className="app">
      <Hero />
      <img className="imageCard" src="/1.jpg" alt="" />
      <Mountains />
      <Second />
      <img className="imageCard2" src="/3.jpg" alt="" />
      <Beach />
    </div>
  );
};

export default App;
