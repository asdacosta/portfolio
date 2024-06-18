import workStyles from "./Work.module.css";
import resumeImg from "../../assets/Works/resumeWork.png";
import weatherImg from "../../assets/Works/weatherWork.png";
import todoImg from "../../assets/Works/todoListWork.png";
import tictacImg from "../../assets/Works/tictacWork.png";
import shopCartImg from "../../assets/Works/shoppingCartWork.png";
import battleShipImg from "../../assets/Works/battleshipWork.png";
import memoryImg from "../../assets/Works/memoryWork.png";
import dashboardImg from "../../assets/Works/dashBoardWork.png";
import landingPageImg from "../../assets/Works/landingPageWork.png";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkBox } from "./LinkBox";
// import coffeeImg from "../../assets/Works/coffeeShopWork.jpg";

function Work() {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const trackRef = useRef(null);

  const [revealLinkBox, setRevealLinkBox] = useState({
    firstImg: false,
    secImg: false,
    thirdImg: false,
    fourthImg: false,
    fifthImg: false,
    sixthImg: false,
    seventhImg: false,
    eigthImg: false,
    ninthImg: false,
    tenthImg: false,
  });
  const firstBox = useRef(null);
  const secBox = useRef(null);
  const thirdBox = useRef(null);
  const fourthBox = useRef(null);
  const fifthBox = useRef(null);
  const sixthBox = useRef(null);
  const seventhBox = useRef(null);
  const eightBox = useRef(null);
  const ninthBox = useRef(null);

  const handleOnDown = (clientX) => {
    setMouseDownAt(clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (clientX) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = mouseDownAt - clientX;
    const maxDelta = window.innerWidth / 2;

    const speedFactor = 0.2;
    const newPercentage = (mouseDelta / maxDelta) * -100 * speedFactor;

    const nextPercentageUnconstrained = prevPercentage + newPercentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPercentage(nextPercentage);
    animateTrackAndImages(nextPercentage);
  };

  const handleOnScroll = (deltaX) => {
    const maxDelta = window.innerWidth / 2;

    const speedFactor = 0.1;
    const newPercentage = (deltaX / maxDelta) * -100 * speedFactor;

    const nextPercentageUnconstrained = percentage + newPercentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    setPercentage(nextPercentage);
    setPrevPercentage(nextPercentage); // Ensure continuity when switching between scroll and drag

    animateTrackAndImages(nextPercentage);
  };

  const animateTrackAndImages = (nextPercentage) => {
    if (trackRef.current) {
      trackRef.current.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      const images = trackRef.current.getElementsByTagName("img");

      const imagePositionMultiplier = 1; // Adjust this multiplier to control the rate
      for (const image of images) {
        const imageNextPercentage = nextPercentage * imagePositionMultiplier;
        image.animate(
          {
            objectPosition: `${100 + imageNextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    }
  };

  const handleMouseDown = (event) => handleOnDown(event.clientX);
  const handleTouchStart = (event) => handleOnDown(event.touches[0].clientX);
  const handleMouseMove = (event) => handleOnMove(event.clientX);
  const handleTouchMove = (event) => handleOnMove(event.touches[0].clientX);
  const handleMouseUp = () => handleOnUp();
  const handleTouchEnd = () => handleOnUp();

  const handleWheel = (event) => {
    if (event.deltaY === 0) {
      // Only handle horizontal scroll
      event.preventDefault();
      handleOnScroll(event.deltaX);
    }
  };

  const handleImgBoxEnter = (event) => {
    switch (event.currentTarget) {
      case firstBox.current:
        setRevealLinkBox((prev) => ({ ...prev, firstImg: true }));
        break;
      case secBox.current:
        setRevealLinkBox((prev) => ({ ...prev, secImg: true }));
        break;
      case thirdBox.current:
        setRevealLinkBox((prev) => ({ ...prev, thirdImg: true }));
        break;
      case fourthBox.current:
        setRevealLinkBox((prev) => ({ ...prev, fourthImg: true }));
        break;
      case fifthBox.current:
        setRevealLinkBox((prev) => ({ ...prev, fifthImg: true }));
        break;
      case sixthBox.current:
        setRevealLinkBox((prev) => ({ ...prev, sixthImg: true }));
        break;
      case seventhBox.current:
        setRevealLinkBox((prev) => ({ ...prev, seventhImg: true }));
        break;
      case eightBox.current:
        setRevealLinkBox((prev) => ({ ...prev, eigthImg: true }));
        break;
      case ninthBox.current:
        setRevealLinkBox((prev) => ({ ...prev, ninthImg: true }));
        break;
    }
  };

  const handleImgBoxLeave = () => {
    setRevealLinkBox((prev) => {
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });
      return newState;
    });
  };

  return (
    <section className={workStyles.work}>
      <div className={workStyles.wheelIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6.45,17.45L1,12L6.45,6.55L7.86,7.96L4.83,11H19.17L16.14,7.96L17.55,6.55L23,12L17.55,17.45L16.14,16.04L19.17,13H4.83L7.86,16.04L6.45,17.45Z" />
        </svg>
      </div>
      <section
        ref={trackRef}
        data-mouse-down-at={mouseDownAt}
        data-prev-percentage={prevPercentage}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        className={workStyles.workSlide}
      >
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={firstBox}
        >
          <img src={resumeImg} alt="Resume" draggable="false" />
          <LinkBox revealBox={revealLinkBox.firstImg} />
        </section>
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={secBox}
        >
          <img src={weatherImg} alt="Weather Forecast" draggable="false" />
          <LinkBox revealBox={revealLinkBox.secImg} />
        </section>
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={thirdBox}
        >
          <img src={todoImg} alt="Todo list" draggable="false" />
          <LinkBox revealBox={revealLinkBox.thirdImg} />
        </section>
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={fourthBox}
        >
          <img src={tictacImg} alt="Tic-tac-toe Game" draggable="false" />

          <LinkBox revealBox={revealLinkBox.fourthImg} />
        </section>
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={fifthBox}
        >
          <img src={shopCartImg} alt="Shopping Cart" draggable="false" />

          <LinkBox revealBox={revealLinkBox.fifthImg} />
        </section>
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={sixthBox}
        >
          <img src={battleShipImg} alt="Battleship Game" draggable="false" />

          <LinkBox revealBox={revealLinkBox.sixthImg} />
        </section>
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={seventhBox}
        >
          <img src={memoryImg} alt="Memory Game" draggable="false" />

          <LinkBox revealBox={revealLinkBox.seventhImg} />
        </section>
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={eightBox}
        >
          <img src={dashboardImg} alt="Dashboard" draggable="false" />

          <LinkBox revealBox={revealLinkBox.eigthImg} />
        </section>
        <section
          onMouseEnter={handleImgBoxEnter}
          onMouseLeave={handleImgBoxLeave}
          ref={ninthBox}
        >
          <img src={landingPageImg} alt="Landing Page" draggable="false" />

          <LinkBox revealBox={revealLinkBox.ninthImg} />
        </section>
        {/* <section>
          <img src={coffeeImg} alt="Coffee shop" />
        </section> */}
      </section>
      {/* <section className={workStyles.experience}>
        <h2>Experience</h2>
        <p>
          <span>24 months</span> ~ <span>2 years</span>
        </p>
      </section> */}
    </section>
  );
}

export { Work };
