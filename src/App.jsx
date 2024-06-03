import "./reset.css";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Load } from "./components/Load/Load";
import { About } from "./components/About/About";

function App() {
  return (
    <>
      <Load />
      <Nav />
      <About />
    </>
  );
}

export default App;
