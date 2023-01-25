import Router from "next/router";
import * as S from "./styled";

export const Header = () => {
  return (
    <S.Container>
      <span onClick={() => Router.push("/")}>Home</span>
      <span onClick={() => Router.push("/contact")}>Contato</span>
      <span onClick={() => Router.push("/about")}>About Us</span>
    </S.Container>
  );
};
