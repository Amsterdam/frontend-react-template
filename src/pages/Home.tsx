import styled from "styled-components";
import { Heading, themeSpacing } from "@amsterdam/asc-ui";

const StyledDiv = styled.div`
  margin-top: ${themeSpacing(10)};
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${themeSpacing(5)};
`;

const Home = () => {
  return (
    <>
      <StyledDiv data-testid="home"> 
        <StyledHeading>Home</StyledHeading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </StyledDiv>
    </>
  );
};

export default Home;
