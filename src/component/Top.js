import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop:20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/kairos.jpg"
            alt="logo"
            style={{ display: "block", width: 60 }}
          />
        </div>
        <Header as="h1">Kairos.J</Header>
      </div>
      <Gnb />
    </div>
  );
}
