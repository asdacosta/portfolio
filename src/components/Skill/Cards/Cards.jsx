import { PRs } from "./PRs";
import { Analytics } from "./Analytics";
import { Projects } from "./Projects";
import { Bot } from "./Bot";
import { Mobile } from "./Mobile";
import { ProblemSolve } from "./ProblemSolve";
import { Team } from "./Team";

function Cards() {
  return (
    <>
      <PRs />
      <Projects />
      <Team />
      <Bot />
      <Analytics />
      <Mobile />
      <ProblemSolve />
    </>
  );
}

export { Cards };
