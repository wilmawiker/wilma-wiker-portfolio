import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cairo", sans-serif;
  text-decoration: none;
  padding: 0.5em;
  border: 1px solid black;
  box-shadow: 3px 3px;

  &:hover {
    box-shadow: 3px 3px pink;
    color: pink;
  }
`;
