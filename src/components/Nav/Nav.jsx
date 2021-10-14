import { NavStyles } from "./Nav.styles";
import t from "../../i18n/en.json";

export function Nav() {
  return (
    <nav>
      <NavStyles.NavList>
        <NavStyles.NavItem>
          <NavStyles.NavLink href="#">{t.Download}</NavStyles.NavLink>
        </NavStyles.NavItem>
        <NavStyles.NavItem>
          <NavStyles.NavLink href="#">{t["Contact Us"]}</NavStyles.NavLink>
        </NavStyles.NavItem>
        <NavStyles.NavItem>
          <NavStyles.NavLink href="#">{t["About Us"]}</NavStyles.NavLink>
        </NavStyles.NavItem>
      </NavStyles.NavList>
    </nav>
  );
}
