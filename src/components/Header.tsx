import { HeaderStyled } from "../styled-components/HeaderStyled";
import { LinkStyled } from "../styled-components/LinkStyled";

export const Header = () => {
  return (
    <HeaderStyled>
      <p>Wilma Wiker</p>
      <ul>
        <li>
          <LinkStyled to="/about-me">About me</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/contact">Contact</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/projects">Projects</LinkStyled>
        </li>
      </ul>
    </HeaderStyled>
  );
};
