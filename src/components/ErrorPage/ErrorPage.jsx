import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section>
      <h2>Unexpected Error</h2>
      <p>
        Click <Link to="/">here</Link> to go back to home.
      </p>
      <p>Kindly specify the error trigger in Connect. Thank you!</p>
    </section>
  );
}

export { ErrorPage };
