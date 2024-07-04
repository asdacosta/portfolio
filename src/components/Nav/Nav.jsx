import navStyles from "./Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";
import "@dotlottie/player-component";
import { useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../../App";
import { scroller } from "react-scroll";
import { navVariants as variants } from "./navVariants";

function Nav() {
  const [menuOpened, setMenuClosed] = useState(false);
  const menuRef = useRef(null);
  const { page, setPage } = useContext(MenuContext);

  const openMenu = () => {
    const menu = menuRef.current;
    menu.setSpeed(1.2);

    if (menu && !menuOpened) {
      menu.setDirection(1);
      menu.play();
      setMenuClosed((prev) => true);
    }
  };

  const handleMenuClick = () => {
    const menu = menuRef.current;
    menu.setSpeed(1.2);

    if (menu && menuOpened) {
      setMenuClosed((prev) => false);
      menu.setDirection(-1);
      menu.play();
    } else if (menu && !menuOpened) {
      setMenuClosed((prev) => true);
      menu.setDirection(1);
      menu.play();
    }
  };

  const highlightTab = (tab) => {
    scroller.scrollTo(tab, {
      duration: 1000,
      smooth: true,
    });
  };

  return (
    <nav className={navStyles.nav}>
      <motion.button
        key="home"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants.navBlurVariant}
        className={navStyles.home}
        onClick={() => {
          highlightTab("About");
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M0 96C0 60.7 28.7 32 64 32h96c123.7 0 224 100.3 224 224s-100.3 224-224 224H64c-35.3 0-64-28.7-64-64V96zm160 0H64V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160z" />
        </svg>
      </motion.button>

      <motion.section
        className={navStyles.others}
        variants={variants.containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className={page === "about" ? navStyles.highlight : ""}
          key="about"
          variants={variants.buttonVariant}
          onClick={() => {
            highlightTab("About");
          }}
        >
          About
        </motion.button>
        <motion.button
          className={page === "skill" ? navStyles.highlight : ""}
          key="skill"
          variants={variants.buttonVariant}
          onClick={() => {
            highlightTab("Skill");
          }}
        >
          Skill
        </motion.button>
        <motion.button
          className={page === "work" ? navStyles.highlight : ""}
          key="work"
          variants={variants.buttonVariant}
          onClick={() => {
            highlightTab("Work");
          }}
        >
          Work
        </motion.button>
        <motion.button
          className={page === "blog" ? navStyles.highlight : ""}
          key="blog"
          variants={variants.buttonVariant}
          onClick={() => {
            highlightTab("Blog");
          }}
          style={{ display: "none" }}
        >
          Blog
        </motion.button>
        <motion.button
          className={page === "connect" ? navStyles.highlight : ""}
          key="connect"
          variants={variants.buttonVariant}
          onClick={() => {
            highlightTab("Connect");
          }}
        >
          Connect
        </motion.button>
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
            <span></span>
          </div>
          <div className={navStyles.switch}>
            <button>ON</button>
            <button>OFF</button>
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
              menuOpened ? navStyles.animateList : ""
            }`}
          >
            <button
              className={page === "about" ? navStyles.highlight : ""}
              onClick={() => {
                highlightTab("About");
              }}
            >
              Home
            </button>
            <button
              className={page === "skill" ? navStyles.highlight : ""}
              onClick={() => {
                highlightTab("Skill");
              }}
            >
              Skill
            </button>
            <button
              className={page === "work" ? navStyles.highlight : ""}
              onClick={() => {
                highlightTab("Work");
              }}
            >
              Work
            </button>
            <button
              className={page === "blog" ? navStyles.highlight : ""}
              onClick={() => {
                highlightTab("Blog");
              }}
              style={{ display: "none" }}
            >
              Blog
            </button>
            <button
              className={page === "connect" ? navStyles.highlight : ""}
              onClick={() => {
                highlightTab("Connect");
              }}
            >
              Connect
            </button>
          </div>
        </div>
        <button className={navStyles.menuIcon}>
          <dotlottie-player
            ref={menuRef}
            mode="normal"
            onMouseEnter={openMenu}
            onClick={handleMenuClick}
            src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/menu.lottie"
            style={{ width: "2.5rem", height: "2.5rem" }}
          ></dotlottie-player>
        </button>
      </motion.div>
    </nav>
  );
}

export { Nav };
