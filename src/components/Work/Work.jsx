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
// import coffeeImg from "../../assets/Works/coffeeShopWork.jpg";

function Work() {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const trackRef = useRef(null);

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

  return (
    <section className={workStyles.work}>
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
        className={workStyles.workSlide}
      >
        <section>
          <img src={resumeImg} alt="Resume" draggable="false" />
        </section>
        <section>
          <img src={weatherImg} alt="Weather Forecast" draggable="false" />
        </section>
        <section>
          <img src={todoImg} alt="Todo list" draggable="false" />
        </section>
        <section>
          <img src={tictacImg} alt="Tic-tac-toe Game" draggable="false" />
        </section>
        <section>
          <img src={shopCartImg} alt="Shopping Cart" draggable="false" />
        </section>
        <section>
          <img src={battleShipImg} alt="Battleship Game" draggable="false" />
        </section>
        <section>
          <img src={memoryImg} alt="Memory Game" draggable="false" />
        </section>
        <section>
          <img src={dashboardImg} alt="Dashboard" draggable="false" />
        </section>
        <section>
          <img src={landingPageImg} alt="Landing Page" draggable="false" />
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
