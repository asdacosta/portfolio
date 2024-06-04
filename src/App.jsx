import "./reset.css";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Load } from "./components/Load/Load";
import { About } from "./components/About/About";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const loadVariants = {
  exit: {
    opacity: 0,
    scale: 0.1,
    transition: { duration: 0.5 },
  },
};

function App() {
  const [loadDisplay, setLoadDisplay] = useState(true);

  function completeLoad() {
    setLoadDisplay(false);
  }

  return (
    <>
      <AnimatePresence>
        {loadDisplay && (
          <motion.div key="load" exit="exit" variants={loadVariants}>
            <Load onComplete={completeLoad} />
          </motion.div>
        )}
      </AnimatePresence>
      {!loadDisplay && <Nav />}
      {!loadDisplay && <About />}
    </>
  );
}

export default App;
