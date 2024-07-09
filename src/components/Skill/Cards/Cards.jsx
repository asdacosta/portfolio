import { AllDevices } from "./AllDevices";
import { Analytics } from "./Analytics";
import { Content } from "./Content";
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
      <Content />
      <Research />
    </>
  );
}

export { Cards };
