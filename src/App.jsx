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
  const [navDisplay, setNavDisplay] = useState(false);

  function completeLoad() {
    setLoadDisplay(false);
  }

  function completeNav() {
    setNavDisplay(true);
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
      {!loadDisplay && <Nav onComplete={completeNav} />}
      {navDisplay && <About />}
    </>
  );
}

export default App;
