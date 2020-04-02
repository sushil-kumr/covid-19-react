import React, {useState, Component,Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle,
  InfoWindow
} from "react-google-maps";

import Async from 'react-async';
import Loader  from '../component/Loader'

const demoFancyMapStyles = require("../js/mapStyles.json");

const options = {
  strokeColor: "#ff0000",
  fillColor: '#ff0000'
}

const Map = withScriptjs(withGoogleMap(props => {

const [display, setDisplay] = useState('none');
const [place, setPlace] = useState({});

function onMarkerClick(data, b="inline-block") {
  setDisplay(b);
  setPlace(data);
  // props.handleData(data,b);
};

  return (
      <div className="row">
                  <div  style={{display: display, width: "100%",textAlign:"center"}}>
                    <br/>
                    <h6>{`Country/State: ${place.place}`}</h6>
                    <h6>Confirmed: {place.confirmed}</h6>
                    <h6>Active: {place.confirmed-place.deaths-place.recovered}</h6>
                    <h6>Deceased: {place.deaths}</h6>
                    <h6>Recovered: {place.recovered}</h6>
                  </div>
                  <div className="col-lg-12">
  
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
                          </Circle>
                          </Fragment>
                        );
                      })}
                    </GoogleMap> 
                  </div>
      </div>
  );
}))

export default class SampleMap extends Component {

  constructor(props){
    super(props)
    this.state ={
      values:{},
      display:"none"
    }
  }

  // handleData = (d,b) => {
  //   this.setState({values: d,
  //                   display:b});
  // }

  render() {
    const loadUsers = () =>
    fetch("https://curecovid19.in/readings/readings/world_stats")
    // fetch("http://localhost:5000/readings/world_stats")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())
    
    return (
      <Async promiseFn={loadUsers} >
      {({ data, err, isLoading }) => {
          if (isLoading) return (<Loader/>)
          if (err) return `Something went wrong: ${err.message}`
          if (data) 
            console.log(data.global_summary.confirmed);
          return(<>
                  <h3 style={{textAlign:"center"}}>Worldwide Covid-19</h3>
                  <div class="col-sm-12">
                  <div class="element-wrapper">
                
                    <div class="element-content">
                      <div class="row">
                        <div class="col-sm-3 col-xxxl-3">
                          <a class="element-box el-tablo" href="#">
                            <div class="label">
                              Confirmed
                            </div>
                            <div class="value text-danger font-weight-bold">
                            {(data.global_summary.confirmed).toLocaleString("en-IN")}
                            </div>
                            <span class="trending trending-down-basic large">
                              <span></span>
                            </span>
                          </a>
                        </div>
                        <div class="col-sm-3 col-xxxl-3">
                          <a class="element-box el-tablo" href="#">
                            <div class="label">
                              Infected/ Active
                            </div>
                            <div class="value text-primary font-weight-bold">
                              {(data.global_summary.active).toLocaleString("en-IN")}
                            </div>
                              
                              <span class="trending trending-down-basic large">
                                <span>{parseFloat(data.global_summary.active/data.global_summary.confirmed).toFixed(2)}%</span>
                              </span>
                              
                          
                          </a>
                        </div>
                        <div class="col-sm-3 col-xxxl-3">
                          <a class="element-box el-tablo" href="#">
                            <div class="label">
                              Recovered
                            </div>
                            <div class="value font-weight-bold text-success">
                              {(data.global_summary.recovered).toLocaleString("en-IN")}
                            </div>
                            <span class="trending trending-down-basic">
                              <span>{parseFloat(data.global_summary.recovered/data.global_summary.confirmed).toFixed(2)}%</span>
                            </span>
                          </a>
                        </div>
                        <div class="col-sm-3 col-xxxl-3">
                          <a class="element-box el-tablo" href="#">
                            <div class="label">
                              Deaths
                            </div>
                            <div class="value font-weight-bold text-secondary">
                              {(data.global_summary.deaths).toLocaleString("en-IN")}
                            </div>
                            <span class="trending trending-down-basic">
                              <span>{parseFloat(data.global_summary.deaths/data.global_summary.confirmed).toFixed(2)}%</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* <div style={{display:this.state.display, justifyContent:"center"}}>
                  <h6>{`Country/State: ${this.state.values.place}`}</h6>
                    <h6>Confirmed: {this.state.values.confirmed}</h6>
                    <h6>Active: {this.state.values.confirmed-this.state.values.deaths-this.state.values.recovered}</h6>
                    <h6>Deceased: {this.state.values.deaths}</h6>
                    <h6>Recovered: {this.state.values.recovered}</h6>
                  </div> */}
                  <Map
                    center={{ lat: 41.8719, lng: 12.5674 }}
                    places={data.data}
                    // handleData={this.handleData}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `75%` }} />}
                  />    
                </>
          )
  }}
  </Async>
    )}
}
