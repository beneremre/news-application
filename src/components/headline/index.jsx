import React from "react";
import { Image, Wrapper } from "./styles";
import Icon from "../../assets/head.png";

function Headline() {
  return (
    <Wrapper>
      <Image src={Icon} alt={"pageIcon"} />
    </Wrapper>
  );
}

export default Headline;
