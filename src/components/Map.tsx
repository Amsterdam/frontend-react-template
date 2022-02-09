import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { Map as ASCMap, ViewerContainer, BaseLayer, Zoom } from "@amsterdam/arm-core";
import { Heading } from "@amsterdam/asc-ui";

const StyledMap = styled(ASCMap)`
  width: 100%;
  height: 400px;
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const Map = () => {
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

export default Map;
