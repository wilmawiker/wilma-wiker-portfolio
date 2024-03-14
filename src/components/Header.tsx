import { HeaderStyled } from "../styled-components/HeaderStyled";
import { LinkStyled } from "../styled-components/LinkStyled";

export const Header = () => {
  return (
    <HeaderStyled>
      <p className="animation">Wilma Wiker</p>
      <ul>
        <li>
          <LinkStyled to="#about-me-content">About me</LinkStyled>
        </li>
        <li>
          <LinkStyled to="#projects-content">Projects</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/contact">Contact</LinkStyled>
        </li>
      </ul>
    </HeaderStyled>
  );
};
