import { useEffect, useRef } from "react";
import aboutStyles from "./About.module.css";

function About() {
  const expertiseRef = useRef(null);
  const cursorRef = useRef(null);
  const infoRef = useRef(null);

  return (
    <section className={aboutStyles.about}>
      <h1 className={aboutStyles.header}>Da Costa Silvanus</h1>
      <p className={aboutStyles.intro}>
        I'm a
        <span ref={expertiseRef} className={aboutStyles.expertise}>
          {" "}
          Web Developer
        </span>{" "}
        <span ref={cursorRef} className={aboutStyles.cursor}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </span>
      </p>
      <section className={aboutStyles.infoBox}>
        <p ref={infoRef} className={aboutStyles.info}>
          I create and maintain websites, ensuring they are visually appealing,
          user-friendly, and function smoothly across devices.
        </p>
        <p className={aboutStyles.progress}></p>
      </section>
      <button className={aboutStyles.resume}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
        </svg>
        Resume
      </button>
    </section>
  );
}

export { About };
