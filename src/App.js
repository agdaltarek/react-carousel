import "./App.css";
import Carousel from "./components/Carousel";
import { DataCarousel } from "./components/DataCarousel";

function App() {
  return <Carousel slides={DataCarousel} />;
}

export default App;
