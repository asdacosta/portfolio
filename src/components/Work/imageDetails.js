import resumeImg from "../../assets/Works/resumeWork.png";
import weatherImg from "../../assets/Works/weatherWork.png";
import todoImg from "../../assets/Works/todoListWork.png";
import tictacImg from "../../assets/Works/tictacWork.png";
import shopCartImg from "../../assets/Works/shoppingCartWork.png";
import battleShipImg from "../../assets/Works/battleshipWork.png";
import memoryImg from "../../assets/Works/memoryWork.png";
import dashboardImg from "../../assets/Works/dashBoardWork.png";
import landingPageImg from "../../assets/Works/landingPageWork.png";

const images = [
  {
    src: resumeImg,
    alt: "Resume",
    technologies: ["React", "CSS", "Vite"],
    links: {
      live: "https://resume-nu-lake.vercel.app/",
      code: "https://github.com/asdacosta/resume",
    },
    index: "firstImg",
  },
  {
    src: weatherImg,
    alt: "Weather Forecast",
    technologies: ["JavaScript", "CSS", "Webpack"],
    links: {
      live: "https://asdacosta.github.io/weather-forecast/",
      code: "https://github.com/asdacosta/weather-forecast",
    },
    index: "secImg",
  },
  {
    src: todoImg,
    alt: "Todo list",
    technologies: ["JavaScript", "CSS", "Webpack"],
    links: {
      live: "https://asdacosta.github.io/todo-list/",
      code: "https://github.com/asdacosta/todo-list",
    },
    index: "thirdImg",
  },
  {
    src: tictacImg,
    alt: "Tic-tac-toe Game",
    technologies: ["JavaScript", "CSS", null],
    links: {
      live: "https://asdacosta.github.io/tic-tac-toe-game/",
      code: "https://github.com/asdacosta/tic-tac-toe-game",
    },
    index: "fourthImg",
  },
  {
    src: shopCartImg,
    alt: "Shopping Cart",
    technologies: ["React", "CSS", "Vite"],
    links: {
      live: "https://shopping-cart-sage-three.vercel.app/",
      code: "https://github.com/asdacosta/shopping-cart",
    },
    index: "fifthImg",
  },
  {
    src: battleShipImg,
    alt: "Battleship Game",
    technologies: ["JavaScript", "CSS", "Webpack"],
    links: {
      live: "https://asdacosta.github.io/battleship/",
      code: "https://github.com/asdacosta/battleship",
    },
    index: "sixthImg",
  },
  {
    src: memoryImg,
    alt: "Memory Game",
    technologies: ["React", "CSS", "Vite"],
    links: {
      live: "https://memory-card-snowy-three.vercel.app/",
      code: "https://github.com/asdacosta/memory-card",
    },
    index: "seventhImg",
  },
  {
    src: dashboardImg,
    alt: "Dashboard",
    technologies: ["HTML", "CSS", null],
    links: {
      live: "https://asdacosta.github.io/admin-dashboard/",
      code: "https://github.com/asdacosta/admin-dashboard",
    },
    index: "eigthImg",
  },
  {
    src: landingPageImg,
    alt: "Landing Page",
    technologies: ["HTML", "CSS", null],
    links: {
      live: "https://asdacosta.github.io/landing-page/",
      code: "https://github.com/asdacosta/landing-page",
    },
    index: "ninthImg",
  },
];

export { images };
