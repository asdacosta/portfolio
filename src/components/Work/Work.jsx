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
import coffeeImg from "../../assets/Works/coffeeShopWork.jpg";

function Work() {
  return (
    <section className={workStyles.work}>
      <section className={workStyles.workSlide}>
        <section>
          <img src={resumeImg} alt="Resume" />
        </section>
        <section>
          <img src={weatherImg} alt="Weather Forecast" />
        </section>
        <section>
          <img src={todoImg} alt="Todo list" />
        </section>
        <section>
          <img src={tictacImg} alt="Tic-tac-toe Game" />
        </section>
        <section>
          <img src={shopCartImg} alt="Shopping Cart" />
        </section>
        <section>
          <img src={battleShipImg} alt="Battleship Game" />
        </section>
        <section>
          <img src={memoryImg} alt="Memory Game" />
        </section>
        <section>
          <img src={dashboardImg} alt="Dashboard" />
        </section>
        <section>
          <img src={landingPageImg} alt="Landing Page" />
        </section>
        {/* <section>
          <img src={coffeeImg} alt="Coffee shop" />
        </section> */}
      </section>
      <section className={workStyles.experience}>
        <h2>Experience</h2>
        <p>2 years</p>
      </section>
    </section>
  );
}

export { Work };
