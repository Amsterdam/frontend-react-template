import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import { GeoJSON as GeoJSONType } from "geojson";
import { MapOptions, GeoJSONOptions } from "leaflet";
import {
  Map as ARMMap,
  GeoJSON,
  ViewerContainer,
  BaseLayer,
  Marker,
  Zoom,
  getCrsRd,
  AMSTERDAM_MAPS_OPTIONS,
} from "@amsterdam/arm-core";
import { Heading, themeSpacing } from "@amsterdam/asc-ui";
import useFetchData from "../hooks/useFetchData";

const StyledMap = styled(ARMMap)`
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const StyledDiv = styled.div`
  margin-top: ${themeSpacing(10)};
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${themeSpacing(5)};
`;

const mapOptions: MapOptions = {
  ...AMSTERDAM_MAPS_OPTIONS,
  crs: getCrsRd(),
  zoom: 7,
  attributionControl: false,
};
/*
const options = {
    pointToLayer(feature, latlng) {
      return L.marker(latlng, {
        icon: L.divIcon(createFeatureIcon(feature)),
      });
    },
    onEachFeature: (feature, layer) => {
      layer.on('click', (e) => {
        e.originalEvent.stopPropagation();
        const latlng = {
          lat: feature.geometry.coordinates[1],
          lng: feature.geometry.coordinates[0],
        };

        const currentZoom = mapInstance.getZoom();
        onMarkerClick(feature);
        if (currentZoom < 11) mapInstance.flyTo(latlng, 11);
      });
    },
  };
*/
const convertCoordinates = (coordinates: any) => {
  console.log("coordinates", coordinates);
  const newCoordinates = coordinates[0].map((c: any) => [c[1], c[0]]);
  console.log("newCoordinates", [newCoordinates]);

  return [newCoordinates];
};

const Map = () => {
  const { data, get } = useFetchData();
  const [json, setJson] = useState<GeoJSONType | undefined>();
  const [options, setOptions] = useState<GeoJSONOptions>({});

  useEffect(() => {
    get("https://api.data.amsterdam.nl/v1/gebieden/stadsdelen/?_format=geojson");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      const features = [
        // zuidoost
        {
          ...data.features[0],
          geometry: {
            ...data.features[0].geometry,
            coordinates: data.features[0].geometry.coordinates,
          },
        },
        // centrum
        {
          ...data.features[4],
          geometry: {
            ...data.features[4].geometry,
            coordinates: convertCoordinates(data.features[4].geometry.coordinates),
          },
        },
      ];

      const newJson: GeoJSONType = {
        type: "FeatureCollection",
        //@ts-ignore
        crs: {
          type: "name",
          properties: {
            name: "urn:ogc:def:crs:OGC:1.3:CRS84",
          },
        },
        features,
      };

      // console.log("data", data);
      console.log("newJson", newJson);
      console.log("mapOptions", mapOptions);

      setJson(newJson);
      setOptions({});
    }
  }, [data]);

  return (
    <StyledDiv data-testid="map">
      <div>
        <StyledHeading>Kaart</StyledHeading>
      </div>

      <div>
        <StyledMap options={mapOptions}>
          {/* @ts-ignore */}
          <GeoJSON args={[json]} options={options} />
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
