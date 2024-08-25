import resumeImg from "../../assets/Works/resumeWork.png";
import weatherImg from "../../assets/Works/weatherWork.png";
import todoImg from "../../assets/Works/todoListWork.png";
import tictacImg from "../../assets/Works/tictacWork.png";
import shopCartImg from "../../assets/Works/shoppingCartWork.png";
import battleShipImg from "../../assets/Works/battleshipWork.png";
import memoryImg from "../../assets/Works/memoryWork.png";
import dashboardImg from "../../assets/Works/dashBoardWork.png";

import workStyles from "./Work.module.css";

const images = [
  {
    src: digiairxImg,
    alt: "Digital Agency",
    technologies: ["React", "CSS", "Vite"],
    links: {
      live: "https://digiairx.vercel.app/",
      code: "https://github.com/asdacosta/digiAirX",
    },
    index: "firstImg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z" />
      </svg>
    ),
  },
  {
    src: shopCartImg,
    alt: "E-commerce",
    technologies: ["React", "CSS", "Vite"],
    links: {
      live: "https://shopping-cart-sage-three.vercel.app/",
      code: "https://github.com/asdacosta/shopping-cart",
    },
    index: "secImg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
    ),
  },
  {
    src: resumeImg,
    alt: "Resume Builder",
    technologies: ["React", "CSS", "Vite"],
    links: {
      live: "https://resume-nu-lake.vercel.app/",
      code: "https://github.com/asdacosta/resume",
    },
    index: "thirdImg",
    icon: (
      <svg
        className={workStyles.resumeIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
      </svg>
    ),
  },
  {
    src: battleShipImg,
    alt: "Battleship Game",
    technologies: ["JavaScript", "CSS", "Webpack"],
    links: {
      live: "https://asdacosta.github.io/battleship/",
      code: "https://github.com/asdacosta/battleship",
    },
    index: "fourthImg",
    icon: (
      <svg
        className={workStyles.gameIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
      </svg>
    ),
  },
  {
    src: weatherImg,
    alt: "Weather Forecast",
    technologies: ["JavaScript", "CSS", "Webpack"],
    links: {
      live: "https://asdacosta.github.io/weather-forecast/",
      code: "https://github.com/asdacosta/weather-forecast",
    },
    index: "fifthImg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 224c0 53 43 96 96 96h47.2L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320H352h64c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H281.9l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z" />
      </svg>
    ),
  },
  {
    src: todoImg,
    alt: "Todo List",
    technologies: ["JavaScript", "CSS", "Webpack"],
    links: {
      live: "https://asdacosta.github.io/todo-list/",
      code: "https://github.com/asdacosta/todo-list",
    },
    index: "sixthImg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
      </svg>
    ),
  },
  {
    src: tictacImg,
    alt: "Tic-tac-toe Game",
    technologies: ["JavaScript", "CSS", null],
    links: {
      live: "https://asdacosta.github.io/tic-tac-toe-game/",
      code: "https://github.com/asdacosta/tic-tac-toe-game",
    },
    index: "seventhImg",
    icon: (
      <svg
        className={workStyles.gameIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
      </svg>
    ),
  },
  {
    src: memoryImg,
    alt: "Memory Game",
    technologies: ["React", "CSS", "Vite"],
    links: {
      live: "https://memory-card-snowy-three.vercel.app/",
      code: "https://github.com/asdacosta/memory-card",
    },
    index: "eightImg",
    icon: (
      <svg
        className={workStyles.gameIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
      >
        <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
      </svg>
    ),
  },
  {
    src: dashboardImg,
    alt: "Dashboard",
    technologies: ["HTML", "CSS", null],
    links: {
      live: "https://asdacosta.github.io/admin-dashboard/",
      code: "https://github.com/asdacosta/admin-dashboard",
    },
    index: "ninthImg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z" />
      </svg>
    ),
  },
];

export { images };
