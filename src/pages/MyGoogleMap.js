import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { GoogleMap } from "google-map-react"

import Marker from '../component/Marker';

import Loader from '../component/Loader';

import Async from 'react-async'

// const loadUsers = () =>
// fetch("https://cors-anywhere.herokuapp.com/http://curecovid19.in:8081/readings/world_stats")
// // fetch("http://192.168.1.157:5000/readings/get_summary")
// .then(res => (res.ok ? res : Promise.reject(res)))
// .then(res => res.json())

const MyMapComponent = (props) =>
    // <Async promiseFn={loadUsers} >
    //             {({ data, err, isLoading }) => {
    //                 if (isLoading) return (<Loader/>)
    //                 if (err) return `Something went wrong: ${err.message}`
    //                 if (data) return (
          <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
          >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
          </GoogleMap>
                    // )}}
  // </Async>

class MyGoogleMap extends Component {

  constructor(props){
    super(props)
    this.state={
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

  static defaultProps = {
    center: {
      lat: 20.5937,
      lng: 78.9629
    },
    zoom: -2
  };

  render() {

    const getMapOptions = (maps) => {
      return {
        disableDefaultUI: false,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
      };
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={getMapOptions}>
            {this.state.data.map(value=>
            <Marker key={value.id}
            lat={value.lat}
            lng={value.lon}
            text={value.place}
            color="red"
          />)}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MyGoogleMap;


// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA"
// })(MapContainer)