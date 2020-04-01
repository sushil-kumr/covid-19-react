import React, {useState, Component,Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle,
  InfoWindow
} from "react-google-maps";

import InfoWindowEx from "../component/InfoWindowEx";
const demoFancyMapStyles = require("../js/mapStyles.json");

const options = {
  strokeColor: "#ff0000",
  fillColor: '#ff0000'
}

const Map = withScriptjs(withGoogleMap(props => {

const [display, setDisplay] = useState('none');
const [place, setPlace] = useState({});

function onMarkerClick(data, b="block") {
  setDisplay(b);
  setPlace(data);
};

  return (<>

    <div style={{display: display, width: "100%"}}>
              <br/>
              <h6>{`Country/State: ${place.place}`}</h6>
              <h6>Confirmed: {place.confirmed}</h6>
              <h6>Deceased: {place.deaths}</h6>
    </div>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={props.center}
      defaultOptions={{ styles: demoFancyMapStyles, 
                                mapTypeControl: false,
                                zoomControl: true,
                                streetViewControl: false,
                                draggingCursor: 'move' 
                      }}
    >
      {props.places.map(place => {
        return (
          <Fragment key={place.id}>
            <Circle
              onClick={()=>onMarkerClick(place)}
              defaultCenter={{
                lat: parseFloat(place.lat),
                lng: parseFloat(place.lon)
              }}
              radius={place.confirmed*7}
              options={options}
            >
          {/* <InfoWindow
            visible={showingInfoWindow}
          >
            <div>
              <h3>{selectedPlace.place}</h3>
              <h6>Active Cases : {selectedPlace.active}</h6>
              <h6>Confirmed Cases : {selectedPlace.confirmed}</h6>
              <h6>Deaths Cases : {selectedPlace.deaths}</h6>
              <h6>Recovered Cases : {selectedPlace.recovered}</h6>
            </div>
          </InfoWindow> */}
          </Circle>
          </Fragment>
        );
      })}
    </GoogleMap></>
  );
}))

export default class SampleMap extends Component {

  constructor(props){
    super(props)
    this.state ={
      data:[],
    }
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

  render() {
    return (
    <Map
    center={{ lat: 41.8719, lng: 12.5674 }}
    places={this.state.data}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `700px` }} />}
    mapElement={<div style={{ height: `85%` }} />}
  />
    )
  }
}


// const SampleMap = () => {
//   return (
   
//   )
// }




// export default (SampleMap);