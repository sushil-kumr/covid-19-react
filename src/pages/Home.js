import React, {useState,useEffect} from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import {piedata
    ,lineDataTotal
    ,lineData
    ,othersTotal
    ,optionProperties
    ,optionPropertiesTotal
    ,mapOptions
    ,barChartData 
    ,optionBar} from "../data/data";

import Loader  from '../component/Loader'
import Card  from '../component/Card'
import SimpleGraph  from '../component/SimpleGraph'
import StateWiseData  from '../component/StateWiseData'
import MapState from '../component/MapState'

import HomeUpdateCard  from '../component/HomeUpdateCard'

import {Doughnut,Bar} from 'react-chartjs-2';

import {Helmet} from 'react-helmet'
import sortBy from "lodash/orderBy";
import cloneDeep from 'lodash/cloneDeep';

highchartsMap(Highcharts);

const urls=["https://curecovid19.in/readings/readings/get_summary",
"https://www.curecovid19.in/readings/readings/get_statewise_daily"
]
  
  export default function Home() {

    const [states,setStates] = useState([]);
    const [articles,setArticles] = useState([]);
    const [myMap, setMyMap] = useState([]); 
    const [data, setData] = useState({});   
    const [point, setPoint] = useState({});  
    const [graph, setGraph] = useState({});  
    const [metaContent, setMetaContent] = useState({});  
    
    const [stateFlag, setStateFlag] = useState(false);
    const [stateGraph,setStateGraph] = useState([]);
    const [state,setState] = useState("");

    const [countryFlag,setCountryFlag] = useState(0);
    const [confirmFlag,setConfirmFlag] = useState(0);
    const [activeFlag,setActiveFlag] = useState(0);
    const [recoveredFlag,setRecoveredFlag] = useState(0);
    const [deathFlag,setDeathFlag] = useState(0);

    const [fetched,setFetched] = useState(false);

    useEffect(() => {
        if (fetched === false) {
          getAllData();
        }
      }, [fetched]);

      const getAllData = async () => {
        var promises = urls.map(url => fetch(url).then(res => res.json()));
        await Promise.all(promises).then(results => {
            loadUsers(results[0]);
            loadStateData(results[1]);
        })}

      const loadStateData = (res) =>{
        const newData = (res.data).reverse();
        const stateLineGraph = cloneDeep(lineDataTotal);
        // console.log(res);


        let total = newData[0].confirmed;
        stateLineGraph.datasets[0].data =[];
        stateLineGraph.datasets[1].data =[];
        stateLineGraph.datasets[2].data =[];
        stateLineGraph.datasets[3].data =[];
        newData.forEach((element,i) => {

          if(i!=0){
            total = total + element.confirmed;
          }

          stateLineGraph.datasets[0].data.push(total);
          stateLineGraph.datasets[1].data.push(element.confirmed);
          stateLineGraph.datasets[3].data.push(element.deaths);
          stateLineGraph.datasets[2].data.push(element.recovered);
        
        });
        
        // stateLineGraph.datasets[0].data= newData.map((val) => val.confirmed);
        stateLineGraph.datasets[0].data = stateLineGraph.datasets[0].data.slice(-30);

        
        stateLineGraph.datasets[1].data  = stateLineGraph.datasets[1].data.slice(-30);
        stateLineGraph.datasets[2].data = stateLineGraph.datasets[2].data.slice(-30);
        stateLineGraph.datasets[3].data = stateLineGraph.datasets[3].data.slice(-30);

        
        stateLineGraph.labels = (newData.map((val) => val.date)).slice(-30);;

        setStateGraph(stateLineGraph);
        setState(res.state)
        setStateFlag(true)
      }

      const loadUsers = (data) =>{
        
        setArticles(data.articles);

          const map = cloneDeep(mapOptions);
            const indiaData = [];

            data.statewise.forEach(element => {
                indiaData.push({name:(element.state),
                            value:element.total,
                            active:element.active,
                            recovered:element.recovered,
                            deaths:element.deaths})
            });

            setPoint({name:indiaData[0].name,
              value:indiaData[0].value,
              active:indiaData[0].active,
              deaths:indiaData[0].deaths,
              recovered:indiaData[0].recovered})
            
            map.series[0].data = indiaData;
            map.series[0].joinBy =  ['name', 'name']
            map.tooltip =  {
                formatter: function(){
                  setPoint(this.point)
                    // s += 'CONFIRMED : <b>' + (this.point.value===undefined?"NA":this.point.value.toLocaleString("en-IN")) + '</b><br/>';
                    // s += 'ACTIVE : <b>' + (this.point.active===undefined?"NA":this.point.active.toLocaleString("en-IN")) + '</b><br/>';
                    // s += 'RECOVERED : <b>' + (this.point.recovered===undefined?"NA":this.point.recovered.toLocaleString("en-IN")) + '</b><br/>';
                    // s += 'DECEASED : <b>' + (this.point.deaths===undefined?"NA":this.point.deaths.toLocaleString("en-IN"))+'</b>';
                    return false;
                },
            }
            //map.tooltip.enabled = false;
            setMyMap(map);  
            setStates(data.statewise);
            setData(data);

                    const totalValue = [];
                    const deathsValue = [];
                    const activeValue = [];
                    const recoveredValue = [];

                    const totalValue1 = [];
                    const daysValue1 = [];
                    const deathsValue1 = [];
                    const activeValue1 = [];
                    const recoveredValue1 = [];
                    const cumulative_confirmed = [];


                    const last_value = -20
                    lineData.datasets=othersTotal.datasets;
                    lineData.labels = (data.dashboard_graphs).map(a => a.day).reverse().slice(last_value) 
                    const simpleTotal = cloneDeep(lineData);
                    const simpleDeaths = cloneDeep(lineData);
                    const simpleActive = cloneDeep(lineData);
                    const simpleRecovered = cloneDeep(lineData);

                    data.dashboard_graphs.forEach(element => {
                        totalValue.push(element.daily_total);
                        deathsValue.push(element.daily_deaths);
                        activeValue.push(element.daily_active);
                        recoveredValue.push(element.daily_recovered);

                        totalValue1.push(element.total);
                        daysValue1.push(element.day.split(" ").slice(0, 2));
                        deathsValue1.push(element.deaths);
                        activeValue1.push(element.active);
                        recoveredValue1.push(element.recovered);
                    });

          
            simpleTotal.datasets[0].data = totalValue.slice(last_value);
            simpleTotal.datasets[0].borderColor = "red"
            
            simpleDeaths.datasets[0].data = deathsValue.slice(last_value);
            simpleDeaths.datasets[0].borderColor = "#292b2c"
            
            simpleActive.datasets[0].data = activeValue.slice(last_value);
            simpleActive.datasets[0].borderColor = "#0275d8"
            
            simpleRecovered.datasets[0].data = recoveredValue.slice(last_value);
            simpleRecovered.datasets[0].borderColor = "#5cb85c"

            optionPropertiesTotal.scales.yAxes[0].ticks.max = Math.round(Math.max(...totalValue) + (Math.max(...totalValue)*0.04));
            optionPropertiesTotal.scales.yAxes[0].ticks.min = -15;

            lineDataTotal.labels  = daysValue1.slice(-30);
            lineDataTotal.datasets[1].data = totalValue.slice(-30);
            lineDataTotal.datasets[2].data = recoveredValue.slice(-30);
            lineDataTotal.datasets[0].data = (data.cumulative_confirmed).map(a => a.count).slice(-30)
            lineDataTotal.datasets[3].data = deathsValue.slice(-30);

            barChartData.labels = Object.keys(data.age);
            barChartData.datasets[0].data = Object.values(data.age);

            const genderValue=[];
            const gernderLabel=[];
            data.gender.forEach(element=>{
                genderValue.push(element.count);
                gernderLabel.push(element.gender)
            })
            if(data.gender.length === 2)
            { 
              genderValue.push(0);
            }
            piedata.datasets[0].data = genderValue;
            piedata.labels = gernderLabel;

            setGraph({"total":simpleTotal,
                      "active":simpleActive,
                      "recovered":simpleRecovered,
                      "deaths":simpleDeaths})

          setMetaContent(`Total Cases:${data.summary.total},Active Cases:${data.summary.active},Recovered:${data.summary.recovered},Deaths:${data.summary.deaths}`)

          setFetched(true);
        }

    function  orderData(e) {

      setCountryFlag(0);
      setConfirmFlag(0);
      setActiveFlag(0);
      setRecoveredFlag(0);
      setDeathFlag(0);
      const id = e.target.id;
      switch(id){
          case "state":
              setCountryFlag(setFlagData(countryFlag,id));
          break;
          case "active":
              setActiveFlag(setFlagData(activeFlag,id));
          break;
          case "total":
              setConfirmFlag(setFlagData(confirmFlag,id));
          break;
          case "deaths":
              setDeathFlag(setFlagData(deathFlag,id));
          break;
          default:
              setRecoveredFlag(setFlagData(recoveredFlag,id)); 
      }

      // console.log(e.target.id)
  }

  function setFlagData(flag,data){
      if(flag===0 || flag==2){
          setStates(sortBy(states,data,'desc'))
          return 1;
      }else{
        setStates(sortBy(states,data,'asc'))
          return 2;
      }
  }

  function onData(e){
    
    // console.log(e.target.id)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state : e.target.id })
    };
    fetch('https://www.curecovid19.in/readings/readings/get_statewise_daily', requestOptions)
      .then(response => response.json())
      .then(res => {
        if(res.success){

          loadStateData(res);

        }else{

        }  
      })

}

                    return ( 
                        <>
                          {!fetched && ( <Loader/> )}
                          {fetched && (  
                          <React.Fragment>
                          <Helmet>
                          <title>India Covid 19 Dashboard</title>
                            <meta name="description" content={metaContent}  data-react-helmet="true" />
                            <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
                          </Helmet>
                        
                        {/* first one start */} 
                        <div className="row">
                            <div className="col-sm-5">
                                <h6 className="pb-2">
                                    <span className="font-weight-bold"> 
                                        Dashboard for COVID-19 India 
                                        <br/>
                                        <span className="font-weight-bold text-danger" style={{fontSize: "16px"}}> 
                                            {data.num_days} 
                                        </span>
                                        <span className="text-danger" style={{fontSize: "12px"}}> days since first outbreak
                                        </span>
                                        <br/>
                                    </span>
                                    <span className="text-success" style={{fontSize: "12px"}}>
                                        Last Updated: {data.summary.last_updated_time}
                                    </span>
                                </h6>
                                
                                {/* Dashboard Tiles */} 
                                <div className="row">
                                    <div className="col-sm-12 col-xxl-12">
                                        <div className="row mb-xl-4 mb-xxl-3">
                                            <Card name="CONFIRMED" styleName="text-danger" 
                                                data={data.summary.total.toLocaleString("en-IN")} diff={data.total_diff}
                                                values={graph.total} option={optionPropertiesTotal}
                                                />
                                            <Card name="ACTIVE" styleName="text-primary" 
                                                data={data.summary.active.toLocaleString("en-IN")} diff={0}
                                                values={graph.active} option={optionPropertiesTotal}
                                                />
                                            <Card name="RECOVERED" styleName="text-success" 
                                                data={data.summary.recovered.toLocaleString("en-IN")} diff={data.recovered_diff}
                                                values={graph.recovered} option={optionPropertiesTotal}
                                                />
                                            <Card name="DECEASED" styleName="text-secondary" 
                                                data={data.summary.deaths.toLocaleString("en-IN")} diff={data.deaths_diff}
                                                values={graph.deaths} option={optionPropertiesTotal}
                                                />
                                        </div>
                                    </div>
                                </div>

                                {/* Graphs */}
                                <div className="element-wrapper pb-2">
                                    <div className="element-box">
                                      <SimpleGraph values={lineDataTotal} option={optionProperties} />
                                    </div>
                                </div>

                            </div>
                            
                            <div className="col-sm-7">
                                <div className="element-wrapper">
                                    <h6 className="element-header">
                                        <svg height="50" width="12" className="blinking"><circle cx="5" cy="24" r="5" fill="red" /></svg> Updates 
                                    </h6>
                                    <div className="element-box-tp">
                                        {articles.map(element=><HomeUpdateCard data={element} key={element.id}/>)}
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col-sm-4 col-2">
                                        </div>
                                        <button className="btn btn-md btn-primary" onClick={()=> window.location="/updates"}>View More</button>
                                        </div>
                                    <br/>
                                </div>
                            </div>

                        <div className="col-sm-5">
                        <div className="element-wrapper">
                        <h6 className="element-header">
                          Statewise Breakup
                        </h6>
                        <div className="element-box-tp">
                          <div className="table-responsive text-right">
                            <table className="table table-lightborder">
                              <thead style={{cursor: "pointer"}}>
                              <tr>
                                <th className="text-left" id="state" onClick={orderData} >
                                    State  <i className={`fa fa-${countryFlag===0?"sort":countryFlag===1?"sort-up":"sort-down"}`} ></i>
                                </th>
                                <th id="total" onClick={orderData}>
                                    CNFMD <i className={`fa fa-${confirmFlag===0?"sort":confirmFlag===1?"sort-up":"sort-down"}`} ></i>
                                </th>    
                                <th id="active" onClick={orderData}>
                                    ACTV <i className={`fa fa-${activeFlag===0?"sort":activeFlag===1?"sort-up":"sort-down"}`} ></i>
                                </th>
                                <th id="recovered" onClick={orderData}>
                                    RCVD <i className={`fa fa-${recoveredFlag===0?"sort":recoveredFlag===1?"sort-up":"sort-down"}`} ></i>
                                </th>
                                <th id="deaths" onClick={orderData}>
                                    DCSD <i className={`fa fa-${deathFlag===0?"sort":deathFlag===1?"sort-up":"sort-down"}`} ></i>
                                </th>
                              </tr>
                              </thead>
                              <tbody>
                                  {states.map(state=><StateWiseData onClick={orderData} key={state.id} data={state} indiaFlag={true} onData={onData}/>)}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-sm-1">
                    </div>

                    { stateFlag && (
                        <div className="col-sm-5">
                            <div className="element-wrapper">
                                <h6 className="element-header">
                                    {state}
                                </h6>
                                <div className="element-box-tp">
                                <SimpleGraph values={stateGraph} option={optionProperties} />
                                </div>
                        </div>
                        </div>
                        )}
                    
                    <div className="col-sm-4">
                                <div className="element-wrapper">
                                    <h6 className="element-header">
                                        Statewise Map View
                                    </h6>

                                    <MapState data={point} indiaFlag={true}/>

                                    <div className="element-box pt-0">
                                    <div data-highcharts-chart="0" style={{overflow: "hidden"}}>
                                        <HighchartsReact
                                            constructorType={"mapChart"}
                                            highcharts={Highcharts}
                                            options={myMap}
                                            />
                                    </div>
                                    </div>
                                </div>
                            </div>
                                        


                          <div className="col-sm-3">
                            <div className="element-wrapper pb-2">
                              <h6 className="element-header">
                                Age Distribution
                              </h6>
                              <div className="element-box pt-0">
                                <div className="el-chart-w">
                                  <Bar data={barChartData}
                                  height="200px"
                                  options={optionBar} />
                                  <span> *Age data not available for {data.undefinedage} cases</span>
                                </div>
                              </div>
                            </div>
                            <div className="element-wrapper">
                            <h6 className="element-header">
                                Gender Distribution
                              </h6>
                            <div className="element-box pt-0">
                              <div className="el-chart-w">
                                    <Doughnut data={piedata} 
                                    height="225px"
                                    options={{ maintainAspectRatio: true, cutoutPercentage: 60, legend: { labels:{fontFamily: ["Inter", "Sans-serif"], boxWidth: 12}} }}/>
                              </div>
                            </div>
                          </div>
                          </div>


                    </div>
                    </React.Fragment>)}
                    </>
    )
}


