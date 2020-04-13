import React ,{useState,useEffect} from 'react'

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import usAll from "../data/usa";

import {mapOptions} from "../data/data";

import Card  from '../component/USACard'
import StateWiseData  from '../component/StateWiseData'

import {Helmet} from 'react-helmet'

import sortBy from "lodash/orderBy";
import cloneDeep from 'lodash/cloneDeep';

highchartsMap(Highcharts);

const urls=["https://curecovid19.in/readings/us_stats/get_us_current",
            "https://curecovid19.in/readings/us_stats/get_us_daily",
            "https://curecovid19.in/readings/us_stats/get_us_statewise_current",
            "https://curecovid19.in/readings/us_stats/get_us_statewise_daily"
            ]

export default function UsPage() {

    const [current, setCurrent] = useState({}); 
    const [daily, setDaily] = useState([]); 
    const [currentState, setCurrentState] = useState([]); 
    const [dailyState, setDailyState] = useState([]); 
    const [dailyConfirm, setDailyConfirm] = useState([]); 
    const [dailyActive, setDailyActive] = useState([]); 
    const [dailyRecovered, setDailyRecovered] = useState([]); 
    const [dailyDeaths, setDailyDeaths] = useState([]); 
    const [dailyDates, setDailyDates] = useState([]); 
    const [max, setMax] = useState([]); 
    const [myMap, setMyMap] = useState([]); 
    const [fetched, setFetched] = useState(false);


    useEffect(() => {
        if (fetched === false) {
          getAllData();
        }
      }, [fetched]);

      const getAllData = async () => {
        var promises = urls.map(url => fetch(url).then(res => res.json()));
        await Promise.all(promises).then(results => {
            setCurrent(results[0].us_current)
            setDaily(results[1].us_daily)
            setCurrentState(results[2].us_statewise_current)
            setDailyState(results[3].us_statewise_daily)
            const sliceValue= -40;
            

            setDailyActive((results[1].us_daily).map(a => a.delta_active).reverse().slice(sliceValue));
            setDailyConfirm((results[1].us_daily).map(a => a.delta_confirmed).reverse().slice(sliceValue), setMax(Math.max(dailyConfirm)));
            setDailyRecovered((results[1].us_daily).map(a => a.delta_recovered).reverse().slice(sliceValue));
            setDailyDeaths((results[1].us_daily).map(a => a.delta_deaths).reverse().slice(sliceValue));
            setDailyDates((results[1].us_daily).map(a => a.date).reverse());

            const map = cloneDeep(mapOptions);
            map.series[0].mapData = usAll;

            const usaData = [];

            results[2].us_statewise_current.forEach(element => {
                usaData.push({key:"us-"+(element.state).toLowerCase(),
                                        value:element.confirmed,
                                        active:element.active,
                                        recovered:element.recovered,
                                        deaths:element.deaths})
            });

            // console.log(usaData);

            map.series[0].data = usaData;
            map.series[0].joinBy =  ['hc-key', 'key']
            map.tooltip =  {
                formatter: function(){
                    var s = '<b>' + (this.key).toUpperCase() + '</b><br/>';
                    s += 'CONFIRMED : <b>' + this.point.value + '</b><br/>';
                    s += 'ACTIVE : <b>' + this.point.active + '</b><br/>';
                    s += 'RECOVERED : <b>' + this.point.recovered + '</b><br/>';
                    s += 'DECEASED : <b>' + this.point.deaths+'</b>';
                    return s;
                },
            }

            setMyMap(map);
    
            setFetched(true);

        });
    }

    
                    return ( 
                        <>
                        {fetched && (  
                        <React.Fragment>
                        <Helmet>
                        <title>India Covid 19 Dashboard</title>
                            {/* <meta name="description" content={metaContent}  data-react-helmet="true" /> */}
                            <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
                        </Helmet>
                        
                        
                        <div className="row"><div className="col-sm-6"><div className="element-wrapper pb-1">
                            <h6 className="pb-4">
                            <span className="font-weight-bold"> Dashboard for COVID-19 USA <br/>
                              {/* <span className="font-weight-bold text-danger" style={{fontSize: "20px"}}>65 </span> <span className="text-danger" style={{fontSize: "14px"}}>days since first Outbreak</span><br/> */}
                            </span>
                              {/* <span className="small text-success"> Last Updated: {data.summary.last_updated_time}</span> */}
                            </h6>
                            <div className="element-content">
                            <div className="tablo-with-chart">
                                <div className="row">
                                <div className="col-sm-12 col-xxl-12">
                                    <div className="tablos">
                                    <div className="row mb-xl-4 mb-xxl-3">
                                        <Card name="CONFIRMED"
                                            styleName="text-danger" 
                                            data={current.confirmed}
                                            lastData={daily[0].confirmed}
                                            daily={dailyConfirm}
                                            dates={dailyDates}
                                            color={"red"}
                                            max={max}
                                            />
                                        <Card name="ACTIVE"
                                            styleName="text-primary" 
                                            data={current.active}
                                            lastData={daily[0].active}
                                            daily={dailyActive}
                                            dates={dailyDates}
                                            color={"blue"}
                                            max={max}
                                            />
                                        <Card name="RECOVERED"
                                            styleName="text-success" 
                                            data={current.recovered}
                                            lastData={daily[0].recovered}
                                            daily={dailyRecovered}
                                            dates={dailyDates}
                                            color={"green"}
                                            max={max}
                                            />
                                        <Card name="DECEASED"
                                            styleName="text-secondary" 
                                            data={current.deaths}
                                            lastData={daily[0].deaths}
                                            daily={dailyDeaths}
                                            dates={dailyDates}
                                            color={"black"}
                                            max={max}
                                            />
                                    </div>
                                </div>
                                </div>
                                
                    </div> </div> </div></div>

                        </div>
                        <div className="col-sm-4">
                            <div className="element-wrapper">
                                <h6 className="element-header">
                                    Province Map View
                                </h6>
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
                        

                        <div className="col-sm-5">
                        <div className="element-wrapper">
                        <h6 className="element-header">
                            Province Breakup
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
                                {sortBy(currentState,"confirmed",'desc').map((state,i)=><StateWiseData key={i} data={state}/>)}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-1">
                    </div>
                    

                    </div>
                    </React.Fragment>)}
                    </>
        )
}


