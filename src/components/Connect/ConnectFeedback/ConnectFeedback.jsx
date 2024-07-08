import { Link } from "react-router-dom";

function ConnectFeedback() {
  return (
    <section>
      <h2>Received!</h2>
      <p>Expect a reply shortly.</p>
      <Link to="/">Home</Link>
    </section>
  );
}

export { ConnectFeedback };
