import { Link, useLocation, matchPath } from "react-router-dom";
import { Header as ASCHeader, MenuItem, MenuButton, MenuInline } from "@amsterdam/asc-ui";

const Header = () => {
  const location = useLocation();
  
  return (
    <ASCHeader
      tall={false}
      data-testid="header"
      title="Frontend React Template"
      homeLink="/"
      fullWidth
      css={{ zIndex: 20 }}
      navigation={
        <>
          <MenuInline>
            <MenuItem>
              {/* @ts-ignore */}
              <MenuButton as={Link} to="/home" active={!!matchPath(location.pathname, "/home")} data-testid="header-home-button">
                Home
              </MenuButton>
            </MenuItem>
            <MenuItem>
              {/* @ts-ignore */}
              <MenuButton as={Link} to="/kaart" active={!!matchPath(location.pathname, "/kaart")}>
                Kaart
              </MenuButton>
            </MenuItem>
          </MenuInline>
        </>
      }
    />
  );
};

export default Header;
