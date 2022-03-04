import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { MapOptions } from "leaflet";
import { Map as ASCMap, ViewerContainer, BaseLayer, Marker, Zoom, getCrsRd } from "@amsterdam/arm-core";
import { Heading, themeSpacing } from "@amsterdam/asc-ui";

const StyledMap = styled(ASCMap)`
  width: 100%;
  height: 400px;
`;

const StyledDiv = styled.div`
  margin-top: ${themeSpacing(10)};
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${themeSpacing(5)};
`;

const mapOptions: MapOptions = {
  center: [52.3731081, 4.8932945],
  zoom: 10,
  maxZoom: 16,
  minZoom: 8,
  zoomControl: false,
  attributionControl: true,
  crs: getCrsRd(),
};

const Map = () => {
  return (
    <StyledDiv data-testid="map">
      <div>
        <StyledHeading>Kaart</StyledHeading>
      </div>

      <div>
        <StyledMap options={mapOptions}>
          <ViewerContainer bottomRight={<Zoom />} />
          <Marker
            latLng={{
              lat: 52.3731081,
              lng: 4.8932945,
            }}
          />
          <BaseLayer />
        </StyledMap>
      </div>
    </StyledDiv>
  );
};

export default Map;
