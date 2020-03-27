import React  from 'react'

import Layout from '../component/Layout'

import Loader from '../component/Loader'

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";

import usAll from "../data/india";

import Async from 'react-async';

import {Doughnut,Line} from 'react-chartjs-2';

highchartsMap(Highcharts);

const lineDataTotal = {
    labels: ["1", "5", "10", "15", "20", "25", "30", "35"],
    datasets: [{
      fill: false,
      lineTension: 0.8,
      backgroundColor: "#fff",
      borderColor: "#e65252",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "#fff",
      pointBackgroundColor: "#141E41",
      pointBorderWidth: 2,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#FC2055",
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 3,
      pointRadius: 3,
      pointHitRadius: 5,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4,
    }]
  };

  const lineDataDeaths = {
    labels: ["1", "5", "10", "15", "20", "25", "30", "35"],
    datasets: [{
      fill: false,
      lineTension: 0.3,
      backgroundColor: "#fff",
      borderColor: "#3e4b5b",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "#fff",
      pointBackgroundColor: "#141E41",
      pointBorderWidth: 2,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#FC2055",
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 3,
      pointRadius: 3,
      pointHitRadius: 5,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4,
    }]
  };

  const lineDataActive = {
    labels: ["1", "5", "10", "15", "20", "25", "30", "35"],
    datasets: [{
      fill: false,
      lineTension: 0.3,
      backgroundColor: "#fff",
      borderColor: "#047bf8",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "#fff",
      pointBackgroundColor: "#141E41",
      pointBorderWidth: 3,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#FC2055",
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 3,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4,
    }]
  };

  const lineDataRecovered = {
    labels: ["1", "5", "10", "15", "20", "25", "30", "35"],
    datasets: [{
      fill: false,
      lineTension: 0.3,
      backgroundColor: "#fff",
      borderColor: "#047bf8",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "#fff",
      pointBackgroundColor: "#141E41",
      pointBorderWidth: 3,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: "#FC2055",
      pointHoverBorderColor: "#fff",
      pointHoverBorderWidth: 3,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [27, 20, 44, 24, 29, 22, 43, 52],
      spanGaps: false,
      lineTension: 0.4,
    }]
  };

  const othersTotal = {datasets: [{
        
          fill: true,
          lineTension: 0.4,
          backgroundColor: "#ffffff",
          borderColor: "#e65252",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "#fff",
          pointBackgroundColor: "#2a2f37",
          pointBorderWidth: 2,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: "#FC2055",
          pointHoverBorderColor: "#fff",
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          data:[],
          pointHitRadius: 0,
          spanGaps: false
  }]}

  const othersActive = {datasets: [{
        
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "#fff",
    pointBackgroundColor: "#2a2f37",
    pointBorderWidth: 2,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: "#FC2055",
    pointHoverBorderColor: "#fff",
    pointHoverBorderWidth: 2,
    pointRadius: 0,
    data:[],
    pointHitRadius: 0,
    spanGaps: false
}]}

const othersRecovered = {datasets: [{
        
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "#fff",
    pointBackgroundColor: "#2a2f37",
    pointBorderWidth: 2,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: "#FC2055",
    pointHoverBorderColor: "#fff",
    pointHoverBorderWidth: 2,
    pointRadius: 0,
    data:[],
    pointHitRadius: 0,
    spanGaps: false
}]}

const othersDeaths = {datasets: [{
        
    fill: true,
    lineTension: 0.4,
    backgroundColor: "#ffffff",
    borderColor: "#e65252",
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: "#fff",
    pointBackgroundColor: "#2a2f37",
    pointBorderWidth: 2,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: "#FC2055",
    pointHoverBorderColor: "#fff",
    pointHoverBorderWidth: 2,
    pointRadius: 0,
    data:[],
    pointHitRadius: 0,
    spanGaps: false
}]}

  const optionPropertiesTotal = {
   
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            fontSize: '11',
            fontColor: '#969da5'
          },
          gridLines: {
            color: 'rgba(0,0,0,0.0)',
            zeroLineColor: 'rgba(0,0,0,0.0)'
          }
        }],
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
            min: -30
          }
        }]
    }
  }

  const optionPropertiesRecovered = {
   
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          fontSize: '11',
          fontColor: '#969da5'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.0)',
          zeroLineColor: 'rgba(0,0,0,0.0)'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          min: -30
        }
      }]
  }
}

const optionPropertiesActive = {
   
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          fontSize: '11',
          fontColor: '#969da5'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.0)',
          zeroLineColor: 'rgba(0,0,0,0.0)'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          min: -30
        }
      }]
  }
}

const optionPropertiesDeaths = {
   
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        ticks: {
          fontSize: '11',
          fontColor: '#969da5'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.0)',
          zeroLineColor: 'rgba(0,0,0,0.0)'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
          min: -30
        }
      }]
  }
}

  const optionProperties = {
    legend: {
      display: false
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:5,
            fontSize: '11',
            fontColor: '#rgba(0,0,0,0.8)'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.01)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }


  const optionPropertiesData = {
    legend: {
      display: false
    },
    bezierCurve : true,
    scales: {
      xAxes: [{
        ticks: {
            autoSkip:true,
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit:5,
            fontSize: '11',
            fontColor: '#rgba(0,0,0,0.8)'
        },
        gridLines: {
          color: 'rgba(0,0,0,0.05)',
          zeroLineColor: 'rgba(0,0,0,0.05)'
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  

//   const lineDataDeaths = {
//     labels: ["1", "5", "10", "15", "20", "25", "30", "35"],
//     datasets: [{
//       fill: false,
//       lineTension: 0.3,
//       backgroundColor: "#fff",
//       borderColor: "#047bf8",
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: "#fff",
//       pointBackgroundColor: "#141E41",
//       pointBorderWidth: 3,
//       pointHoverRadius: 10,
//       pointHoverBackgroundColor: "#FC2055",
//       pointHoverBorderColor: "#fff",
//       pointHoverBorderWidth: 3,
//       pointRadius: 5,
//       pointHitRadius: 10,
//       data: [27, 20, 44, 24, 29, 22, 43, 52],
//       spanGaps: false,
//       lineTension: 0.4,
//     }]
//   };

const piedata = {
    chart: {
        height:"800px"
      },
	labels: [
		'Female',
		'Male',
		'Unidentifed'
	],
	datasets: [{
		data: [0, 0, 0],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


var mapData = [
  ['madhya pradesh', 0],
  ['uttar pradesh', 0],
  ['karnataka', 0],
  ['nagaland', 0],
  ['bihar', 0],
  ['lakshadweep', 0],
  ['andaman and nicobar', 0],
  ['assam', 0],
  ['west bengal', 0],
  ['puducherry', 0],
  ['daman and diu', 0],
  ['gujarat', 0],
  ['rajasthan', 0],
  ['dadara and nagar havelli', 0],
  ['chhattisgarh', 0],
  ['tamil nadu', 0],
  ['chandigarh', 0],
  ['punjab', 0],
  ['haryana', 0],
  ['andhra pradesh', 0],
  ['maharashtra', 0],
  ['himachal pradesh', 0],
  ['meghalaya', 0],
  ['kerala', 0],
  ['telangana', 0],
  ['mizoram', 0],
  ['tripura', 0],
  ['manipur', 0],
  ['arunanchal pradesh', 0],
  ['jharkhand', 0],
  ['goa', 0],
  ['delhi', 0],
  ['odisha', 0],
  ['jammu and kashmir', 0],
  ['sikkim', 0],
  ['uttarakhand', 0]
];

const mapOptions = {
    chart: {
      map: "countries/ie/ie-all",
      height:"600px"
    },
    title: {
      text: " "
    },
    colorAxis: {
        min: 0,
        minColor: '#ffffff',
        maxColor: '#ff0000'  ,
        tickColor:"#ffffff"
      },
    credits: {
      enabled: false
    },
    mapNavigation: {
      enabled: false
    },
    series: [
      {
        // Use the gb-all map with no data as a basemap
        data: mapData,
        name: "Total Cases",
        states: {
            hover: {
                borderColor: '#ff0000'
            }
        },
        mapData: usAll,
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        showInLegend: false
      }
    ]
  };

  const loadUsers = () =>
  fetch("https://curecovid19.in/readings/readings/get_summary")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

  
  export default function Home() {

      return (<Layout>
          
          <Async promiseFn={loadUsers} >
                {({ data, err, isLoading }) => {
                     if (isLoading) return (
                  <Loader
                     />
                     )
                     if (err) return `Something went wrong: ${err.message}`
                     if (data)
                     var active = data.summary.total - data.summary.recovered - data.summary.deaths;
                     var mapValue=[];
                     data.statewise.forEach(element => {
                        mapData.forEach((field,i) => {
                            if(element.state.toLowerCase()=== field[0]){
                                mapData[i][1]=element.total;
                            }
                         });
                         //mapValue.push([element.state.toLowerCase(),element.indian_cases + element.foreign_cases])
                     });
                     //mapOptions.series[0].data = mapValue;

                     var genderValue=[];
                     var gernderLabel=[];
                     data.gender.forEach(element=>{
                         genderValue.push(element.count);
                         gernderLabel.push(element.gender)
                     })
                     if(data.gender.length == 2)
                    {
                        genderValue.push(0);
                    }
                     piedata.datasets[0].data = genderValue;

                     var totalValue = [];
                     var daysValue = [];
                     var deathsValue = [];
                     var activeValue = [];
                     var recoveredValue = [];

                     var totalValue1 = [];
                     var daysValue1 = [];
                     var deathsValue1 = [];
                     var activeValue1 = [];
                     var recoveredValue1 = [];
                     data.dashboard_graphs.forEach(element => {
                         totalValue.push(element.daily_total);
                         daysValue.push(element.day);
                         deathsValue.push(element.daily_deaths);
                         activeValue.push(element.daily_active);
                         recoveredValue.push(element.daily_recovered);

                         totalValue1.push(element.total);
                         daysValue1.push(element.day.split(" ").slice(0, 2));
                         deathsValue1.push(element.deaths);
                         activeValue1.push(element.active);
                         recoveredValue1.push(element.recovered);
                     });

                    lineDataTotal.labels = lineDataDeaths.labels = daysValue1;
                    lineDataTotal.datasets[0].data = totalValue1;
                    lineDataDeaths.datasets[0].data = deathsValue1;
                    lineDataActive.datasets[0].data = activeValue1;
                    lineDataRecovered.datasets[0].data = recoveredValue1;
              
                    var last_value = -20
                    const simpleTotal = Object.assign({}, lineDataTotal);
                    simpleTotal.datasets=othersTotal.datasets;
                    simpleTotal.datasets[0].data = totalValue.slice(last_value);
                    simpleTotal.labels = daysValue.slice(last_value);

                    const simpleDeaths = Object.assign({}, lineDataDeaths);
                    simpleDeaths.datasets=othersDeaths.datasets;
                    simpleDeaths.datasets[0].data = deathsValue.slice(last_value);
                    simpleDeaths.labels = daysValue.slice(last_value);

                    const simpleActive = Object.assign({}, lineDataActive);
                    simpleActive.datasets=othersActive.datasets;
                    simpleActive.datasets[0].data = activeValue.slice(last_value);
                    simpleActive.labels = daysValue.slice(last_value);

                    const simpleRecovered = Object.assign({}, lineDataRecovered);
                    simpleRecovered.datasets=othersRecovered.datasets;
                    simpleRecovered.datasets[0].data = recoveredValue.slice(last_value);
                    simpleRecovered.labels = daysValue.slice(last_value);
                    // const simpleDeaths = Object.assign({}, lineDataTotal);
                    // simpleDeaths.datasets= Object.assign({}, others.datasets);
                    // simpleDeaths.datasets[0].data =Object.assign({}, deathsValue); 
                    // simpleDeaths.labels = daysValue;
                    
                    const highscale = 0.04;
                    othersTotal.datasets[0].borderColor = "#e65252";
                    othersActive.datasets[0].borderColor = "#268df9";
                    othersRecovered.datasets[0].borderColor = "#24b314";
                    othersDeaths.datasets[0].borderColor = "#3e4b5b";
                    optionPropertiesTotal.scales.yAxes[0].ticks.max = Math.round(Math.max(...totalValue) + (Math.max(...totalValue)*highscale));
                    optionPropertiesTotal.scales.yAxes[0].ticks.min = -15;
                    optionPropertiesDeaths.scales.yAxes[0].ticks.max = Math.round(Math.max(...totalValue) + (Math.max(...totalValue)*highscale));
                    optionPropertiesDeaths.scales.yAxes[0].ticks.min = -15;
                    optionPropertiesRecovered.scales.yAxes[0].ticks.min = -15;
                    optionPropertiesActive.scales.yAxes[0].ticks.min = -15;
                    optionPropertiesActive.scales.yAxes[0].ticks.max = Math.round(Math.max(...totalValue) + (Math.max(...totalValue)*highscale));
                    optionPropertiesRecovered.scales.yAxes[0].ticks.max = Math.round(Math.max(...totalValue) + (Math.max(...totalValue)*highscale));
                    var last_updated_time = new Date(Number(new Date(data.summary.record_time))).toLocaleString().split(" ")[1] + " " + new Date(Number(new Date(data.summary.record_time))).toLocaleString().split(" ")[2];
                    var last_updated_date = new Date(Number(new Date(data.summary.record_time))).toDateString();
                     return ( 
                        <div className="content-w">
                        <div className="content-i">
                     <div className="content-box">
              {/* first one start */} 
              <div className="row">
                <div className="col-sm-5">
                    <div className="element-wrapper pb-2">
                        <h6 className="pb-4">
                     <span className="font-weight-bold"> Dashboard for COVID-19 Outbreak in India </span> <br/> <span className="small font-weight-bold text-success"> Last Updated: {data.summary.last_updated_time}</span>
                        </h6>
                        <div className="element-content">
                        <div className="tablo-with-chart">
                            <div className="row">
                            <div className="col-sm-12 col-xxl-12">
                                <div className="tablos">
                                <div className="row mb-xl-4 mb-xxl-3">
                                    <div className="col-sm-3 col-6">
                                    <a className="element-box el-tablo centered trend-in-corner padded bold-label" >
                                        <div className="label" style={{fontWeight:"500", fontSize: "12px"}}>
                                        CONFIRMED
                                        </div>
                                        <div className="value text-danger font-weight-bold">
                                        {data.summary.total}
                                        </div>
                                        <div className="trending text-danger trending-down-basic">
                                        <b>+{data.total_diff} </b>
                                        </div>
                                        <div className="el-chart-w"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                          <Line data={simpleTotal}
                                                options={optionPropertiesTotal} 
                                               />
                                        </div> 
                                    </a>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                    <a className="element-box el-tablo centered trend-in-corner padded bold-label" >
                                            <div className="label"  style={{fontWeight:"500", fontSize: "12px"}}>
                                            ACTIVE
                                            </div>
                                            <div className="value text-primary font-weight-bold">
                                            {active}
                                            </div>
                                            <div className="trending text-primary trending-down-basic">
                                                <b>+{data.active_diff} </b>
                                            </div>
                                            <div className="el-chart-w"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                            <Line data={simpleActive}
                                                options={optionPropertiesActive} />
                                         </div> 
                                    </a>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                    <a className="element-box el-tablo centered trend-in-corner padded bold-label" >
                                        <div className="label"  style={{fontWeight:"500", fontSize: "12px"}}>
                                            RECOVERED
                                            </div>
                                            <div className="value text-success font-weight-bold">
                                            {data.summary.recovered}
                                            </div>
                                            <div className="trending text-success trending-down-basic">
                                            <b>+{data.recovered_diff}</b>
                                            </div>
                                            <div className="el-chart-w"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                            <Line data={simpleRecovered}
                                                options={optionPropertiesRecovered} />
                                            </div> 
                                    </a>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                    <a className="element-box el-tablo centered trend-in-corner padded bold-label" >
                                        <div className="label"  style={{fontWeight:"500", fontSize: "12px"}}>
                                        DECEASED
                                        </div>
                                        <div className="value text-secondary font-weight-bold">
                                        {data.summary.deaths}
                                        </div>
                                        <div className="trending text-dark trending-down-basic">
                                        <b>+{data.deaths_diff}</b>
                                        </div>
                                        <div className="el-chart-w"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                        <Line data={simpleDeaths} 
                                            options={optionPropertiesDeaths}/>
                                        </div>
                                    </a>
                                    </div>
                                </div>
                             
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                </div>

                <div className="element-wrapper">
                    <div className="element-box pt-0">
                      <div className="os-tabs-w">
                        <div className="os-tabs-controls">
                          <ul className="nav nav-tabs smaller">
                            <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tab_total">Total Cases</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab_deaths">Deceased</a>
                            </li> 
                          </ul>

                        </div>
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab_total">
                            <div className="el-tablo smaller">
                              <div className="label">
                                Total Cases
                              </div>
                              <div className="value">
                                {data.summary.total}
                              </div>
                            </div>
                            <div className="el-chart-w"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                 <Line data={lineDataTotal}
                                 options={optionProperties}
                                  />
                             </div>
                          </div>
                          <div className="tab-pane" id="tab_deaths">
                            <div className="el-tablo smaller">
                              <div className="label">
                                Deceased
                              </div>
                              <div className="value">
                                 {data.summary.deaths}
                              </div>
                            </div>
                            <div className="el-chart-w">
                                <Line data={lineDataDeaths} 
                                options={optionPropertiesData}/>
                            </div> 
                          </div>
                          <div className="tab-pane" id="tab_conversion"></div>
                        </div>
                      </div>
                    </div>
                  </div>





                


                  
                
                </div>
                <div className="col-sm-4">
                    <div className="element-box pl-xxl-5 pr-xxl-5">
                                <div className="el-tablo highlight pt-lg-4">
                                    <div className="label font-weight-bold smaller">
                                    Statewise Summary
                                    </div>
                                </div>
                                <div  className="pt-2" data-highcharts-chart="0" style={{overflow: "hidden"}}>
                                    <HighchartsReact
                                        constructorType={"mapChart"}
                                        highcharts={Highcharts}
                                        options={mapOptions}
                                        />

                                </div>
                                </div>


                                </div>

                    <div className="col-sm-3">
                    <div className="element-wrapper">
                    <h6 className="element-header">
                      Gender Distribution
                    </h6>
                    <div className="element-box">
                      <div className="el-chart-w">
                            <Doughnut data={piedata} 
                             height="380px"
                             options={{ maintainAspectRatio: true, cutoutPercentage: 60 }}/>
                      </div>
                    </div>
                  </div>
                    </div>

                <div className="col-sm-5">
                <div className="element-wrapper">
                <h6 className="element-header">
                  Statewise BreakUp
                </h6>
                <div className="element-box-tp">
                  <div className="table-responsive text-right">
                    <table className="table table-lightborder">
                      <thead>
                        <tr>
                          <th className="text-left">
                            State
                          </th>
                          <th>
                            CNFMD
                          </th>    
                          <th>
                            ACTV
                          </th>
                          <th>
                            RCVD
                          </th>
                          <th>
                            DCSD
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                          {data.statewise.map(state=>{
                              var confirm = state.total;
                              var active = confirm - state.deaths - state.recovered;
                              if(confirm){
                                  return(

                                  <tr key={state.id}>
                                  <td className="text-left">
                                    <span>{state.state}</span>
                                  </td>
                                  <td className="nowrap">
                                    <span className="text-primary font-weight-bold smaller">{state.delta_total === 0?"": `(+${state.delta_total})`} </span><span className="font-weight-bold">{confirm}</span>
                                  </td>
                                  <td className="nowrap">
                                    <span className="text-danger font-weight-bold smaller">{state.delta_active === 0?"": `(+${state.delta_active})`} </span><span className="font-weight-bold">{active}  </span>
                                  </td>
                                  <td className="nowrap">
                                    <span className="text-success font-weight-bold smaller">{state.delta_recovered === 0?"": `(+${state.delta_recovered})`} </span><span className="font-weight-bold">{state.recovered}</span>
                                  </td>
                                  <td className="nowrap">
                                    <span className="font-weight-bold smaller"> {state.delta_deaths === 0?"": `(+${state.delta_deaths})`} </span> <span className="font-weight-bold">{state.deaths}</span>
                                  </td>
                                </tr>
                               )} 
                             })}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>

                </div>

            </div>
            
        </div>
        </div>
        )}}
            
            </Async>
    </Layout>
    )
}


