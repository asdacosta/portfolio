// Nav.jsx
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import navStyles from "./Nav.module.css";
import { motion } from "framer-motion";
import "@dotlottie/player-component";
import { MenuContext } from "../../App";
import { scroller } from "react-scroll";
import { navVariants as variants } from "./navVariants";

const NAV_ITEMS = [
  { id: "about", label: "About", target: "About", hidden: false },
  { id: "skill", label: "Skill", target: "Skill", hidden: false },
  { id: "work", label: "Work", target: "Work", hidden: false },
  { id: "blog", label: "Blog", target: "Blog", hidden: true }, // hidden (display:none)
  { id: "connect", label: "Connect", target: "Connect", hidden: false },
];

const Nav = React.memo(function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { page } = useContext(MenuContext); // keep only what's used

  // Scroll to a named section — stable callback
  const highlightTab = useCallback((tabName) => {
    scroller.scrollTo(tabName, {
      duration: 1000,
      smooth: true,
    });
  }, []);

  // Handler factory that returns an onClick handler for nav buttons
  const makeNavClick = useCallback(
    (target) => () => {
      highlightTab(target);
    },
    [highlightTab]
  );

  // Toggle menu animation (controls the dotlottie player safely)
  const handleMenuToggle = useCallback(() => {
    const player = menuRef.current;
    // Toggle state first (so UI classes reflect new state synchronously)
    const nextOpen = !isMenuOpen;
    setIsMenuOpen(nextOpen);

    if (!player) return;

    // dotlottie player API: wrap in try/catch to be resilient
    try {
      // Slightly faster than default for snappier UX
      if (typeof player.setSpeed === "function") player.setSpeed(1.2);
      // direction: 1 => forward, -1 => reverse
      if (typeof player.setDirection === "function")
        player.setDirection(nextOpen ? 1 : -1);
      if (typeof player.play === "function") player.play();
    } catch (err) {
      // silent fail — player might be a different DOM element in some environments
      // console.debug("dotlottie control failed", err);
    }
  }, [isMenuOpen]);

  // Ensure any playing animation is stopped when component unmounts
  useEffect(() => {
    return () => {
      const player = menuRef.current;
      try {
        if (player && typeof player.stop === "function") player.stop();
      } catch (e) {
        /* ignore */
      }
    };
  }, []);

  const homeButtonClass = useMemo(
    () => `${navStyles.home} ${isMenuOpen ? navStyles.dimHome : ""}`,
    [isMenuOpen]
  );

  return (
    <nav className={navStyles.nav}>
      <motion.button
        key="home"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants.navBlurVariant}
        className={homeButtonClass}
        aria-label="Go to About"
        onClick={makeNavClick("About")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          aria-hidden
        >
          <path d="M0 96C0 60.7 28.7 32 64 32h96c123.7 0 224 100.3 224 224s-100.3 224-224 224H64c-35.3 0-64-28.7-64-64V96zm160 0H64V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160z" />
        </svg>
      </motion.button>

      <motion.section
        className={navStyles.others}
        variants={variants.containerVariant}
        initial="hidden"
        animate="visible"
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.map((item) => (
          <motion.button
            key={item.id}
            className={page === item.id ? navStyles.highlight : ""}
            variants={variants.buttonVariant}
            onClick={makeNavClick(item.target)}
            style={item.hidden ? { display: "none" } : undefined}
            aria-current={page === item.id ? "page" : undefined}
          >
            {item.label}
          </motion.button>
        ))}
      </motion.section>

      <motion.div
        key="theme"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants.navBlurVariant}
        className={navStyles.themeBox}
      >
        <section className={navStyles.theme}>
          <div className={navStyles.bar}>
            <span />
          </div>
          <div className={navStyles.switch}>
            <button type="button" aria-pressed="true">
              ON
            </button>
            <button type="button" aria-pressed="false">
              OFF
            </button>
          </div>
        </section>
      </motion.div>

      <motion.div
        key="menu"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants.navBlurVariant}
        className={navStyles.menu}
      >
        <div className={navStyles.menuListBox}>
          <div
            className={`${navStyles.menuList} ${
              isMenuOpen ? navStyles.animateList : ""
            }`}
            role="menu"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id + "-menu"}
                className={page === item.id ? navStyles.highlight : ""}
                onClick={makeNavClick(item.target)}
                role="menuitem"
                style={item.hidden ? { display: "none" } : undefined}
              >
                {item.label === "About" ? "Home" : item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Wrap dotlottie player inside a button to keep a consistent clickable target and provide aria */}
        <button
          type="button"
          className={navStyles.menuIcon}
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <dotlottie-player
            ref={menuRef}
            mode="normal"
            src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/menu.lottie"
            style={{ width: "2.5rem", height: "2.5rem" }}
            aria-hidden
          />
        </button>
      </motion.div>
    </nav>
  );
});

export { Nav };
