import "./reset.css";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Load } from "./components/Load/Load";
import { About } from "./components/About/About";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { createContext, useEffect, useRef, useState } from "react";
import { Skill } from "./components/Skill/Skill";
import { Work } from "./components/Work/Work";
import { Connect } from "./components/Connect/Connect";
import { Outlet, useLocation } from "react-router-dom";
import { MouseTrail } from "./components/MouseTrail/MouseTrail";

const loadVariants = {
  exit: {
    opacity: 0,
    scale: 0.1,
    transition: { duration: 0.5 },
  },
};

export const MenuContext = createContext({
  page: "",
  setPage: () => {},
});

function App() {
  const [loadDisplay, setLoadDisplay] = useState(true);
  const [page, setPage] = useState("");
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  function completeLoad() {
    setLoadDisplay(false);
  }

  return (
    <>
      <MouseTrail />
      {location.pathname === "/" ? (
        <>
          <AnimatePresence>
            {loadDisplay && (
              <motion.div key="load" exit="exit" variants={loadVariants}>
                <Load onComplete={completeLoad} />
              </motion.div>
            )}
          </AnimatePresence>
          <MenuContext.Provider value={{ page, setPage }}>
            {!loadDisplay && (
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="progress-bar"
              />
            )}
            {!loadDisplay && <Nav />}
            {!loadDisplay && <About />}
            {!loadDisplay && <Skill />}
            {!loadDisplay && <Work />}
            {!loadDisplay && <Connect />}
          </MenuContext.Provider>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default App;
