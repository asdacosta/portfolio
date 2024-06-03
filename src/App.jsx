import "./reset.css";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Load } from "./components/Load/Load";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loadDisplay, setLoadDisplay] = useState("flex");

  useEffect(() => {
    setTimeout(() => {
      setLoadDisplay("none");
    }, 3100);
  }, []);

  return (
    <>
      <Load displayValue={loadDisplay} />
      <Nav />
    </>
  );
}

export default App;
