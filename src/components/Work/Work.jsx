import workStyles from "./Work.module.css";
import { useEffect, useRef, useState } from "react";
import { LinkBox } from "./LinkBox";
import { images } from "./imageDetails.js";

function Work() {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  const wheelIconRef = useRef(null);
  const trackRef = useRef(null);

  const firstBox = useRef(null);
  const secBox = useRef(null);
  const thirdBox = useRef(null);
  const fourthBox = useRef(null);
  const fifthBox = useRef(null);
  const sixthBox = useRef(null);
  const seventhBox = useRef(null);
  const eightBox = useRef(null);
  const ninthBox = useRef(null);
  const boxRefs = [
    firstBox,
    secBox,
    thirdBox,
    fourthBox,
    fifthBox,
    sixthBox,
    seventhBox,
    eightBox,
    ninthBox,
  ];

  useEffect(() => {
    animateTrackAndImages(0);
  }, []);

  useEffect(() => {
    const checkCollision = () => {
      const wheelIconBound = wheelIconRef.current.getBoundingClientRect();
      boxRefs.forEach((boxRef, index) => {
        const targetImg = boxRef.current.getBoundingClientRect();
        if (
          wheelIconBound.top < targetImg.bottom &&
          wheelIconBound.bottom > targetImg.top &&
          wheelIconBound.left < targetImg.right &&
          wheelIconBound.right > targetImg.left
        ) {
          setCurrentImageIndex(index);
        }
      });
    };

    window.addEventListener("scroll", checkCollision);
    window.addEventListener("resize", checkCollision);
    checkCollision();

    // Set intervals to update currentImageIndex realtime after initial scroll trigger.
    const interval = setInterval(() => {
      if (mouseDownAt === 0) checkCollision();
    }, 200);
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", checkCollision);
      window.removeEventListener("resize", checkCollision);
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [percentage]);

  const handleOnDown = (event) => {
    setMouseDownAt(event.clientX || event.touches[0].clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (event) => {
    if (mouseDownAt === 0) return;

    const mouseDelta =
      parseFloat(mouseDownAt) - event.clientX || event.touches[0].clientX;
    const maxDelta = window.innerWidth / 2;
    const speedFactor = 0.3;
    const newPercentage = (mouseDelta / maxDelta) * -100 * speedFactor;
    const nextPercentageUnconstrained = parseFloat(
      prevPercentage + newPercentage
    );

    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    const newRotation = rotation + (mouseDelta / maxDelta) * 360 * 0.2;

    setPercentage(nextPercentage);
    animateTrackAndImages(nextPercentage);
    setRotation(newRotation);
  };

  const handleOnScroll = (deltaX) => {
    const maxDelta = window.innerWidth / 2;
    const speedFactor = 0.1;
    const newPercentage = (deltaX / maxDelta) * -100 * speedFactor;
    const nextPercentageUnconstrained = parseFloat(percentage + newPercentage);

    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    const newRotation = rotation + (deltaX / maxDelta) * 360 * 0.2;

    setPercentage(nextPercentage);
    setPrevPercentage(nextPercentage); // Ensure continuity when switching between scroll and drag
    animateTrackAndImages(nextPercentage);
    setRotation(newRotation);
  };

  const animateTrackAndImages = (nextPercentage) => {
    if (trackRef.current) {
      const imgs = trackRef.current.getElementsByTagName("img");
      const imgHalfWidth = imgs[0].offsetWidth / 2;

      let minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth}px)`;
      let maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth}px)`;

      if (nextPercentage > -10) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 18}px)`;
      } else if (nextPercentage > -20 && nextPercentage <= -10) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 2}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 16}px)`;
      } else if (nextPercentage > -30 && nextPercentage <= -20) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 4}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 14}px)`;
      } else if (nextPercentage > -40 && nextPercentage <= -30) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 6}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 12}px)`;
      } else if (nextPercentage > -50 && nextPercentage <= -40) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 8}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 10}px)`;
      } else if (nextPercentage > -60 && nextPercentage <= -50) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 10}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 8}px)`;
      } else if (nextPercentage > -70 && nextPercentage <= -60) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 12}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 6}px)`;
      } else if (nextPercentage > -80 && nextPercentage <= -70) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 14}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 4}px)`;
      } else if (nextPercentage > -90 && nextPercentage <= -80) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 16}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth / 2}px)`;
      } else if (nextPercentage < -90) {
        minTranslate = `calc(${nextPercentage}% - ${imgHalfWidth / 18}px)`;
        maxTranslate = `calc(${nextPercentage}% + ${imgHalfWidth}px)`;
      }

      const translateValue =
        nextPercentage <= -50 ? maxTranslate : minTranslate;

      trackRef.current.animate(
        {
          transform: `translate(${translateValue}, -50%)`,
        },
        { duration: 2000, fill: "forwards" }
      );

      for (const image of imgs) {
        const objectPositionValue = `${100 + nextPercentage}%`;
        image.animate(
          {
            objectPosition: `${objectPositionValue} center`,
          },
          { duration: 2000, fill: "forwards" }
        );
      }
    }
  };

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
      <div className={workStyles.wheelIcon} ref={wheelIconRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6.45,17.45L1,12L6.45,6.55L7.86,7.96L4.83,11H19.17L16.14,7.96L17.55,6.55L23,12L17.55,17.45L16.14,16.04L19.17,13H4.83L7.86,16.04L6.45,17.45Z" />
        </svg>
      </div>
      <section
        ref={trackRef}
        data-mouse-down-at={mouseDownAt}
        data-prev-percentage={prevPercentage}
        onTouchStart={handleOnDown}
        onMouseDown={handleOnDown}
        onTouchEnd={handleOnUp}
        onMouseUp={handleOnUp}
        onTouchMove={handleOnMove}
        onMouseMove={handleOnMove}
        onWheel={handleWheel}
        className={workStyles.workSlide}
      >
        {images.map((image, index) => (
          <section
            key={index}
            onMouseEnter={handleImgBoxEnter}
            onMouseLeave={handleImgBoxLeave}
            className={workStyles.workImages}
            ref={boxRefs[index]}
          >
            <p
              className={
                revealLinkBox[image.index]
                  ? `${workStyles.workName} ${workStyles.revealName}`
                  : workStyles.workName
              }
            >
              {image.alt}
            </p>
            <img src={image.src} alt={image.alt} draggable="false" />

            <LinkBox
              revealBox={revealLinkBox[image.index]}
              links={image.links}
              technologies={image.technologies}
            />
          </section>
        ))}
      </section>
      <section className={workStyles.slider}>
        <span className={workStyles.index}>{currentImageIndex + 1}</span>
        <span>
          <svg
            className={workStyles.wheel}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <path d="M2,11L4.05,11.1C4.3,8.83 5.5,6.85 7.25,5.56L6.13,3.84C5.86,3.36 6,2.75 6.5,2.47C7,2.2 7.59,2.36 7.87,2.84L8.8,4.66C9.78,4.24 10.86,4 12,4C13.14,4 14.22,4.24 15.2,4.66L16.13,2.84C16.41,2.36 17,2.2 17.5,2.47C18,2.75 18.14,3.36 17.87,3.84L16.75,5.56C18.5,6.85 19.7,8.83 19.95,11.1L22,11A1,1 0 0,1 23,12A1,1 0 0,1 22,13L19.95,12.9C19.7,15.17 18.5,17.15 16.75,18.44L17.87,20.16C18.14,20.64 18,21.25 17.5,21.53C17,21.8 16.41,21.64 16.13,21.16L15.2,19.34C14.22,19.76 13.14,20 12,20C10.86,20 9.78,19.76 8.8,19.34L7.87,21.16C7.59,21.64 7,21.8 6.5,21.53C6,21.25 5.86,20.64 6.13,20.16L7.25,18.44C5.5,17.15 4.3,15.17 4.05,12.9L2,13A1,1 0 0,1 1,12A1,1 0 0,1 2,11M9.07,11.35C9.2,10.74 9.53,10.2 10,9.79L8.34,7.25C7.11,8.19 6.27,9.6 6.05,11.2L9.07,11.35M12,9C12.32,9 12.62,9.05 12.9,9.14L14.28,6.45C13.58,6.16 12.81,6 12,6C11.19,6 10.42,6.16 9.72,6.45L11.1,9.14C11.38,9.05 11.68,9 12,9M14.93,11.35L17.95,11.2C17.73,9.6 16.89,8.19 15.66,7.25L14,9.79C14.47,10.2 14.8,10.74 14.93,11.35M14.93,12.65C14.8,13.26 14.47,13.8 14,14.21L15.66,16.75C16.89,15.81 17.73,14.4 17.95,12.8L14.93,12.65M12,15C11.68,15 11.38,14.95 11.09,14.86L9.72,17.55C10.42,17.84 11.19,18 12,18C12.81,18 13.58,17.84 14.28,17.55L12.91,14.86C12.62,14.95 12.32,15 12,15M9.07,12.65L6.05,12.8C6.27,14.4 7.11,15.81 8.34,16.75L10,14.21C9.53,13.8 9.2,13.26 9.07,12.65Z" />
          </svg>
        </span>
        <span>9</span>
      </section>
    </section>
  );
}

export { Work };
