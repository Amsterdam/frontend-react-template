import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Map, ViewerContainer, BaseLayer, Zoom } from "@amsterdam/arm-core";
import { Heading } from "@amsterdam/asc-ui";

const StyledMap = styled(Map)`
  width: 100%;
  height: 400px;
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const Kaart = () => {
  return (
    <StyledDiv>
      <div>
        <Heading>Kaarten</Heading>
      </div>

      <div>
        <StyledMap>
          <ViewerContainer bottomRight={<Zoom />} />
          <BaseLayer />
        </StyledMap>
      </div>
    </StyledDiv>
  );
};

export default Kaart;
