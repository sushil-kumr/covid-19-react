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


const options = {
  strokeColor: "#ff0000",
  fillColor: '#ff0000'
}


const Map = withScriptjs(withGoogleMap(props => {

  
let [place,setPlace] = useState({});

function onMarkerClick(data) {
  console.log(data);
  setPlace(data)
  
};

  return (<>

    <div>
              <h3>{`Place/Country Name :${place.place}`}</h3>
              <h6>Active Cases : {place.active}</h6>
              <h6>Confirmed Cases : {place.confirmed}</h6>
              <h6>Deaths Cases : {place.deaths}</h6>
              <h6>Recovered Cases : {place.recovered}</h6>
    </div>
    <GoogleMap
      defaultZoom={2}
      defaultCenter={props.center}
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
              radius={place.confirmed*10}
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
      data:[]
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
    center={{ lat: 40.64, lng: -73.96 }}
    zoom={2}
    places={this.state.data}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `800px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
    )
  }
}


// const SampleMap = () => {
//   return (
   
//   )
// }




// export default (SampleMap);