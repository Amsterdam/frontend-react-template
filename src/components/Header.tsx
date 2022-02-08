// import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header as ASCHeader, MenuItem, MenuButton, MenuInline } from "@amsterdam/asc-ui";

const Header = () => {
  return (
    <ASCHeader
      tall={false}
      title="Frontend React Project"
      homeLink="/"
      fullWidth
      css={{ zIndex: 20 }}
      navigation={
        <>
          <MenuInline>
            <MenuItem>
              {/* @ts-ignore */}
              <MenuButton as={Link} to="/home">
                Home
              </MenuButton>
            </MenuItem>
            <MenuItem>
              {/* @ts-ignore */}
              <MenuButton as={Link} to="/kaart">
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
