import { component as Component } from "../react/index.js";
import styled from "../styled-components/index.js";

const TitleStyled = styled.h1`
  color: red;
  font-family: system-ui;
  color: orange;
  font-size: 50px;
  text-shadow: 2px 2px 0 black;
  line-height: 100vh;
`;

const props = {
  message: `Won't give up`,
};

const Title = Component`<marquee> ${"message"} </marquee>`(props);

export default TitleStyled(Title);
