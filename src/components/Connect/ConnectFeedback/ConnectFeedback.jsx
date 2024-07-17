import { Link } from "react-router-dom";
import feedbackStyles from "./ConnectFeedback.module.css";
import { useEffect, useRef, useState } from "react";

function ConnectFeedback() {
  const [hideLottie, setHideLottie] = useState(false);
  const sentLottieRef = useRef(null);

  const hideAnimationOnComplete = () => {
    const sent = sentLottieRef.current;
    if (!sent) return;
    sent.addEventListener("complete", () => setHideLottie(true));
  };
  useEffect(hideAnimationOnComplete, []);

  return (
    <section className={feedbackStyles.body}>
      {!hideLottie ? (
        <div className="sentLottie">
          <dotlottie-player
            ref={sentLottieRef}
            autoplay
            src="https://raw.githubusercontent.com/asdacosta/portfolio/main/src/assets/mailSentIndicator.lottie"
            style={{ width: "20rem", height: "20rem" }}
          ></dotlottie-player>
        </div>
      ) : (
        <>
          <h2>Email Received!</h2>
          <div className={feedbackStyles.message}>
            <p>Kindly expect a reply shortly.</p>
            <Link className={feedbackStyles.link} to="/">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z" />
                </svg>
                Back to Ace's Portfolio
              </p>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export { ConnectFeedback };
