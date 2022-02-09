import styled from "styled-components";
import { Heading } from "@amsterdam/asc-ui";

const StyledDiv = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <StyledDiv>
        <Heading>Home</Heading>
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
