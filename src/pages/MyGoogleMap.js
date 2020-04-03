import React, {useState, Component,Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle,
  InfoWindow
} from "react-google-maps";
import {Helmet} from 'react-helmet'

import Async from 'react-async';
import Loader  from '../component/Loader'
import ServerDown  from './ServerDown'

const demoFancyMapStyles = require("../js/mapStyles.json");

const options = {
  strokeColor: "#ff0000",
  fillColor: '#ff0000',
  strokeWeight: 0.5
}

const Map = withScriptjs(withGoogleMap(props => {

const [display, setDisplay] = useState('none');
const [place, setPlace] = useState({});

function onMarkerClick(data, b="inline-block") {
  setDisplay(b);
  setPlace(data);
  // props.handleData(data,b);
};

  return (<>
      <div className="row">
                  <div  style={{display: display, width: "100%",textAlign:"center"}}>
                    <br/>
                    <h6>{`Country/State: ${place.place}`}</h6>
                    <h6>Confirmed: {place.confirmed}</h6>
                    <h6>Active: {place.confirmed-place.deaths-place.recovered}</h6>
                    <h6>Deceased: {place.deaths}</h6>
                    <h6>Recovered: {place.recovered}</h6>
                  </div>
                  <br/>
                </div>
      <div className="row">
                  <div className="col-lg-12">
  
                    <GoogleMap 
                      defaultZoom={3}
                      defaultCenter={props.center}
                      defaultOptions={{ 
                        styles: demoFancyMapStyles, 
                        mapTypeControl: false,
                        zoomControl: true,
                        streetViewControl: false,
                        draggingCursor: 'move' 
                        }}
                    >
                      {props.places.map((place,i) => {
                        return (
                          <Fragment key={i}>
                            <Circle
                              onClick={()=>onMarkerClick(place)}
                              defaultCenter={{
                                lat: parseFloat(place.lat),
                                lng: parseFloat(place.lon)
                              }}
                              radius={((place.confirmed)<=3000 && (place.confirmed*7)>1)?place.confirmed*7*20:place.confirmed*7}
                              options={options}
                            >
                          </Circle>
                          // </Fragment>
                        );
                      })}
                    </GoogleMap> 
                  </div>
        </div>
  </>);
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
          if (err) return (<ServerDown/>)
          if (data) 
           // console.log(data.global_summary.confirmed);
            // const metaContent = {`Total Cases:${(data.global_summary.confirmed).toLocaleString("en-IN")},Active Cases:${(data.global_summary.active).toLocaleString("en-IN")},Recovered:${(data.global_summary.recovered).toLocaleString("en-IN")},Deaths:${(data.global_summary.deaths).toLocaleString("en-IN")}`}
              
          return(<>
            <Helmet>
            <title>World Covid Stats</title>
    
            <meta name="description" content={`Total Cases:${(data.global_summary.confirmed).toLocaleString("en-IN")},Active Cases:${(data.global_summary.active).toLocaleString("en-IN")},Recovered:${(data.global_summary.recovered).toLocaleString("en-IN")},Deaths:${(data.global_summary.deaths).toLocaleString("en-IN")}`}  data-react-helmet="true" />
            <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
          
          </Helmet>
                  <div className="col-sm-12">
                  <div className="element-wrapper">
                    <div className="element-content">
                      <div className="row">
                        <div className="col-sm-3 col-xxxl-3">
                          <a className="element-box el-tablo" href="#">
                            <div className="label">
                              Confirmed
                            </div>
                            <div className="value text-danger font-weight-bold">
                            {(data.global_summary.confirmed).toLocaleString("en-IN")}
                            </div>
                            <span className="trending trending-down-basic large">
                              <span></span>
                            </span>
                          </a>
                        </div>
                        <div className="col-sm-3 col-xxxl-3">
                          <a className="element-box el-tablo" href="#">
                            <div className="label">
                              Infected/ Active
                            </div>
                            <div className="value text-primary font-weight-bold">
                              {(data.global_summary.active).toLocaleString("en-IN")}
                            </div>
                              <span className="trending trending-down-basic large">
                                <span>{parseFloat(data.global_summary.active*100/data.global_summary.confirmed).toFixed(2)}%</span>
                              </span>
                          </a>
                        </div>
                        <div className="col-sm-3 col-xxxl-3">
                          <a className="element-box el-tablo" href="#">
                            <div className="label">
                              Recovered
                            </div>
                            <div className="value font-weight-bold text-success">
                              {(data.global_summary.recovered).toLocaleString("en-IN")}
                            </div>
                            <span className="trending trending-down-basic">
                              <span>{parseFloat(data.global_summary.recovered*100/data.global_summary.confirmed).toFixed(2)}%</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-sm-3 col-xxxl-3">
                          <a className="element-box el-tablo" href="#">
                            <div className="label">
                              Deaths
                            </div>
                            <div className="value font-weight-bold text-secondary">
                              {(data.global_summary.deaths).toLocaleString("en-IN")}
                            </div>
                            <span className="trending trending-down-basic">
                              <span>{parseFloat(data.global_summary.deaths*100/data.global_summary.confirmed).toFixed(2)}%</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  
                  <div className="element-wrapper">
                  <div className="element-box-tp">
                  <Map
                    center={{ lat: 41.8719, lng: 12.5674 }}
                    places={data.data}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `800px` }} />}
                    mapElement={<div style={{ height: `75%` }} />}
                  />  
                  </div>  
                  </div>  
                </>
          )
  }}
  </Async>
    )}
}
