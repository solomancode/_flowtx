import { Nav } from "../Nav/Nav";
import { HeaderStyle } from "./Header.style";

export function Header() {
  return (
    <HeaderStyle.Header>
      <img src={process.env.PUBLIC_URL + "/assets/logo.svg"} />
      <Nav />
    </HeaderStyle.Header>
  );
}
