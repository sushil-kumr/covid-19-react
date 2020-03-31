import React, { Component } from "react";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    GoogleMapLoader 
  } from "react-google-maps";
  
  const MapWithAMarker = withGoogleMap(props =>
    <GoogleMapLoader
  containerElement={<div/>}
  googleMapElement={
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
    }
    />
  );
  
  
  export default class SampleMap extends Component {
      render() {
          return (
              <div>
                <MapWithAMarker
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />  
              </div>
          )
      }
  }
  