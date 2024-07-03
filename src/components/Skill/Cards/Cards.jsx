import { AllDevices } from "./AllDevices";
import { Analytics } from "./Analytics";
import { Author } from "./Author";
import { Bot } from "./Bot";
import { Mobile } from "./Mobile";
import { Research } from "./Research";
import { Team } from "./Team";

function Cards() {
  return (
    <>
      <AllDevices />
      <Mobile />
      <Analytics />
      <Bot />
      <Team />
      <Author />
      <Research />
    </>
  );
}

export { Cards };
