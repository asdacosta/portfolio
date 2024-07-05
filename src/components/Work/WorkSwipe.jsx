import { Swiper as Swipe, SwiperSlide as Slide } from "swiper/react";
import { images } from "./ImageDetails.jsx";
import "./Work.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import "./WorkSwipe.css";
import { useRef } from "react";

function WorkSwipe() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Swipe
      cssMode
      modules={[Navigation, Pagination, A11y, Autoplay]}
      centeredSlides
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      lazy
      loop
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((image) => (
        <Slide key={image.alt}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            draggable="false"
          />
        </Slide>
      ))}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swipe>
  );
}

export { WorkSwipe };
