import Link from "next/link";
import * as S from "./styled";

export const Header = () => {
  return (
    <S.Container>
      <Link href="/">Home</Link>
      <Link href="/contact">Contato</Link>
      <Link href="/about">About Us</Link>
    </S.Container>
  );
};
