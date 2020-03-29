
// import GoogleMapReact from 'google-map-react';

import React, { Component } from 'react'

import Marker from '../component/Marker';
import Layout from '../component/Layout'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class GoogleMap extends Component {

    constructor(props){
        super(props)
        this.state={
            center: {
                lat: 20.59,
                lng: 78.96
              },
              zoom: 5
        }
    }
   
    render() {
      return (
        // Important! Always set the container height explicitly
        <Layout>
        <div style={{ height: '100vh', width: '100%' }}>
          {/* <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA" }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
          </GoogleMapReact> */}
        </div>
        </Layout>
      );
    }
  }
