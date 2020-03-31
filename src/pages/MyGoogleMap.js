import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper  } from "google-maps-react";
 import InfoWindowEx from "../component/InfoWindowEx";

class MyGoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      data: [      ]
    };
  }

  componentDidMount() {
    fetch('https://curecovid19.in/readings/readings/world_stats')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      this.setState({ data: data.data })
    })
    .catch(console.log)
  }
  

  

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.data,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  showDetails = place => {
    console.log(place);
  };

  render() {
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          className={"map"}
          zoom={2}
        >
          {this.state.data.map((place, i) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                key={place.id}
                data={place}
                position={{ lat: place.lat, lng: place.lon }}
              />
            );
          })}
          <InfoWindowEx
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h3>{this.state.selectedPlace.place}</h3>
              <button
                type="button"
                onClick={this.showDetails.bind(this, this.state.selectedPlace)}
              >
                Show details
              </button>
            </div>
          </InfoWindowEx>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA"
})(MyGoogleMap);

