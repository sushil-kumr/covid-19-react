import React, {useState,useEffect, Component,Fragment} from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  Circle,
  InfoWindow
} from "react-google-maps";
import {Helmet} from 'react-helmet'
import WorldCard  from '../component/WorldCard'

const demoFancyMapStyles = require("../js/mapStyles.json");

const options = {
  strokeColor: "#ff0000",
  fillColor: '#ff0000',
  strokeWeight: 0.5
}

const Map = withScriptjs(withGoogleMap(props => {

const [data, setData] = useState({data:[]});
const [display, setDisplay] = useState('none');
const [place, setPlace] = useState({});

useEffect(() => {
  fetch("https://curecovid19.in/readings/readings/world_stats")
    .then(res => res.json())
    .then(
      (result) => {
        setData(result)
       // console.log(result)
      },
      (error) => {
        console.log(error)
      }
    )
}, [])

function onMarkerClick(data, b="inline-block") {
  setDisplay(b);
  setPlace(data);
  props.onHandleSelectData(data)
};

if(data.length===0){return (<></>)}else{

          return(<>
                <div className="row"  style={{display: display, width: "100%",textAlign:"center"}}>
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
                      }}>
                      {data.data.map((place,i) => {
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
                          </Fragment>
                        );
                      })}
                    </GoogleMap> 
                  </div>
        </div>
        </> )}
        }))




export default class SampleMap extends Component {

  constructor(props){
    super(props)
    this.state ={
      values:{},
      isLoading:true,
      display:"none",
      data:[],
      global_summary:{active: 0,
        confirmed: 0,
        deaths: 0,
        recovered: 0},
      selectedData:{}
    }
  }

  handleSelectData = (data) => {
    this.setState({selectedData: data});
  }

  componentDidMount(){
    // fetch("https://curecovid19.in/readings/readings/world_summary")
     fetch("http://192.168.0.107:5000/readings/world_summary")
    .then(res => res.json())

    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoading:false,
          global_summary: result.global_summary,
        })
      },
      (error) => {     
        console.log(error)
      }
    )
  }

  render(){

// if(this.state.isLoading){
//     return<></>
// }else{

  return (
    <>
      <Helmet>
      <title>World Covid Stats</title>
      <meta name="description" content={`Total Cases:${(this.state.global_summary.confirmed).toLocaleString("en-IN")},Active Cases:${(this.state.global_summary.active).toLocaleString("en-IN")},Recovered:${(this.state.global_summary.recovered).toLocaleString("en-IN")},Deaths:${(this.state.global_summary.deaths).toLocaleString("en-IN")}`}  data-react-helmet="true" />
      <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
      </Helmet>
            <div className="col-sm-12" style={this.state.global_summary.confirmed===0?{display:"none"}:{display:"inline-block"}}>
            <div className="element-wrapper">
              <div className="element-content">
                <div className="row">
                
                  <WorldCard name="Confirmed"  
                  styleName="text-danger" 
                  summary={(this.state.global_summary.confirmed).toLocaleString("en-IN")}
                  per={0}/>

                  <WorldCard name="Infected/ Active"  
                  styleName="text-primary" 
                  summary={(this.state.global_summary.active).toLocaleString("en-IN")}
                  per={parseFloat(this.state.global_summary.active*100/this.state.global_summary.confirmed).toFixed(2)}/>
                  
                  <WorldCard name="Recovered"  
                  styleName="text-success" 
                  summary={(this.state.global_summary.recovered).toLocaleString("en-IN")}
                  per={parseFloat(this.state.global_summary.recovered*100/this.state.global_summary.confirmed).toFixed(2)}/>
                
                  <WorldCard name="Deaths"  
                    styleName="text-secondary" 
                    summary={(this.state.global_summary.deaths).toLocaleString("en-IN")}
                    per={parseFloat(this.state.global_summary.deaths*100/this.state.global_summary.confirmed).toFixed(2)}/>
                  
                </div>
              </div>
            </div>
         
  
          {/* <div style={this.state.selectedData.place===undefined?{display:"none"}:{display:"inline-block"}} > */}
          {/* <br/> */}
          {/* <div className="element-wrapper">   
          <div className="element-box">
            <div className="row">
                  <WorldCard name="Country/State"  
                      styleName="text-secondary" 
                      myClass="col-sm-12 col-xxxl-12"
                      summary={(this.state.selectedData.confirmed===undefined?0:this.state.selectedData.place).toLocaleString("en-IN")}
                      />
                  </div>  
                  <div className="row">
                  <WorldCard name="Confirmed"  
                      styleName="text-danger" 
                      summary={(this.state.selectedData.confirmed===undefined?0:this.state.selectedData.confirmed).toLocaleString("en-IN")}
                      />

                  <WorldCard name="Infected/ Active"  
                  styleName="text-primary" 
                  summary={(this.state.selectedData.confirmed===undefined?0:this.state.selectedData.confirmed-this.state.selectedData.deaths-this.state.selectedData.recovered).toLocaleString("en-IN")}
                  />
                  
                  <WorldCard name="Recovered"  
                  styleName="text-success" 
                  summary={(this.state.selectedData.confirmed===undefined?0:this.state.selectedData.recovered).toLocaleString("en-IN")}
                 />
                
                  <WorldCard name="Deaths"  
                    styleName="text-secondary" 
                    summary={(this.state.selectedData.confirmed===undefined?0:this.state.selectedData.deaths).toLocaleString("en-IN")}
                  />
                  </div></div> </div> </div> */}
          </div>
            <div className="element-wrapper">
            <div className="element-box-tp">
            <Map
              center={{ lat: 41.8719, lng: 12.5674 }}
              onHandleSelectData = {this.handleSelectData}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnt9meLwKfGzZtUZuyGB1iPp346rph9YA"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `800px` }} />}
              mapElement={<div style={{ height: `75%` }} />}
            />  
            </div>  
            </div> </>
  );
  }
}