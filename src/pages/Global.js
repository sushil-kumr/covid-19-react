import React from 'react'
import {Helmet} from 'react-helmet'

import Loader  from '../component/Loader'

import CountrywiseLine  from '../component/CountrywiseLine'

import {optionPropertiesCountrywise,optionPropertiesCountrywiseInfectionRate,
    lineDataCountrywiseInfectionRate, lineDataCountrywise, colorsCountrywise, 
    lineDataCountrywiseMortalityRate, lineDataCountrywiseFatalityRate, 
    optionPropertiesCountrywiseMortalityRate, optionPropertiesCountrywiseFatalityRate} from '../data/data'

import Async from 'react-async';

export default function Global() {

    const loadUsers = () =>
    // fetch("http://192.168.1.157:5000/readings/countrywise")
    fetch("http://curecovid19.in:8081/readings/readings/countrywise")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

    return (
        <Async promiseFn={loadUsers} >
                {({ data, err, isLoading }) => {
                    if (isLoading) return (<Loader/>)
                    if (err) return `Something went wrong: ${err.message}`
                    if (data) 
                      // for country wise graphs
                      lineDataCountrywise.labels = [...Array(data.counts["China"].length).keys()];
                      lineDataCountrywise.datasets = [];
                     // console.log(data.counts);
                     var countries = ["India", "China", "Spain", "Italy", "US"];
                      // var countries = Object.keys(data.counts);
                      countries.forEach((item, index) =>{
                          lineDataCountrywise.datasets.push({
                              label: item,
                              legendText: item,
                              fill: false,
                              borderColor: colorsCountrywise[index],
                              pointBackgroundColor: colorsCountrywise[index],
                              pointRadius: 2,
                              data: data.counts[item],
                              spanGaps: false,
                              lineTension: 0.4
                          })
                      });
  
                      lineDataCountrywiseInfectionRate.labels = [...Array(data.counts["China"].length).keys()];
                      lineDataCountrywiseMortalityRate.labels = [...Array(data.counts["China"].length).keys()];
                      lineDataCountrywiseFatalityRate.labels = [...Array(data.counts["China"].length).keys()];
                      lineDataCountrywiseInfectionRate.datasets = [];
                      lineDataCountrywiseMortalityRate.datasets = [];
                      lineDataCountrywiseFatalityRate.datasets = [];
                     // console.log(data.counts);
                      var mortality_rate_max = 0;
                      // var countries = Object.keys(data.counts);

                      countries.forEach((item, index) =>{
                          lineDataCountrywiseInfectionRate.datasets.push({
                              label: item,
                              legendText: item,
                              fill: false,
                              borderColor: colorsCountrywise[index],
                              pointBackgroundColor: colorsCountrywise[index],
                              pointRadius: 2,
                              data: data.infection_rate[item],
                              spanGaps: false,
                              lineTension: 0.4
                          })
                      });

                      countries.forEach((item, index) =>{
                          lineDataCountrywiseMortalityRate.datasets.push({
                              label: item,
                              legendText: item,
                              fill: false,
                              borderColor: colorsCountrywise[index],
                              pointBackgroundColor: colorsCountrywise[index],
                              pointRadius: 2,
                              data: data.mortality_rate[item],
                              spanGaps: false,
                              lineTension: 0.4
                          })
                          var maxi = Math.max(...data.mortality_rate[item]);
                          if(maxi > mortality_rate_max){
                            mortality_rate_max = maxi;
                            // optionPropertiesCountrywiseMortalityRate.scales.yAxes[0].ticks.max = maxi * 0.1;
                          } 
                      });

                      countries.forEach((item, index) =>{
                          lineDataCountrywiseFatalityRate.datasets.push({
                              label: item,
                              legendText: item,
                              fill: false,
                              borderColor: colorsCountrywise[index],
                              pointBackgroundColor: colorsCountrywise[index],
                              pointRadius: 2,
                              data: data.fatality_rate[item],
                              spanGaps: false,
                              lineTension: 0.4
                          })
                      });
  
                    return(
                        <>
                          <Helmet>
                           <title>Analytics Between Countries</title>

                            <meta name="description" content="Comparision between India, China, Itlay, USA and Spain"  data-react-helmet="true" />
                            <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
                         
                          </Helmet>
                        <div className="row">
                        <div className="col-lg-12">
                      <div className="alert alert-warning borderless">
                        <h6 className="alert-heading font-weight-bold">
                            Thoughtprocess
                        </h6>
                        <p>
                          For any kind of Data Analysis on Covid-19 we have first to bring the data points of
                           different countries to the same origin. We cannot derive anything meaningful if
                            we just plot the confirmed infections at their respective dates due to different 
                            origins of outbreak. So we fixed the origins of all countries to Day 0, which in our
                             case represents the day when each country has surpassed 500 cases.
                        </p>
                      </div>
                    </div>
                        <div className="col-sm-6">
                            <div className="element-wrapper">
                            <h6 className="element-header">
                                Countrywise Spread
                            </h6>
                            <div className="element-box-tp">
                                <CountrywiseLine 
                                values={lineDataCountrywise}
                                option={optionPropertiesCountrywise}
                                />
                            </div>
                            </div>
                            <div className="alert alert-warning borderless">
                        <p>
                          This gives us an idea of how the virus has spread among different countries.
                          But this is not the best indicator yet due to difference in populations and 
                          population densities among the countries.
                        </p>
                      </div>
                        </div>
                        
                        <div className="col-sm-6">

                            <div className="element-wrapper">
                            <h6 className="element-header">
                                Countrywise Infection Rate
                            </h6>
                            <div className="element-box-tp">
                                <CountrywiseLine 
                                values={lineDataCountrywiseInfectionRate}
                                option={optionPropertiesCountrywiseInfectionRate}
                                />
                            </div>
                            </div>
<div class="alert alert-warning borderless">
                        <p>
                          This numbers actually allows comparing how well the different countries are doing
                           in their corona countermeasures, regardless of the population size and density.
                        </p>
                        <h6 class="alert-heading font-weight-bold">
                            An infection rate of 1.0 means no new infections.
                        </h6>
                      </div>
                        </div>

                        <div className="col-sm-6">

                            <div className="element-wrapper">
                            <h6 className="element-header">
                                Countrywise Fatality Rate
                            </h6>
                            <div className="element-box-tp">
                                <CountrywiseLine 
                                values={lineDataCountrywiseFatalityRate}
                                option={optionPropertiesCountrywiseFatalityRate}
                                />
                            </div>
                            </div>
                            <div class="alert alert-warning borderless">
                                <p>
                                However, confirmed does not mean the same between different countries and even
                                 in the same country at different time points of the epidemic. This is due to the
                                 sampling bias induced by the limited amount of corona test kits. With ongoing spread,
                                  we hit limits on test-kit and health-system capacities and the focus shifts to testing
                                   severe cases only. This in turn pushes the fatality rate. <br/><br/>
                                  
                                  A significant increase of the fatality rate indicates that
                                <li> the confirmed count is being under-estimated.</li>
                                <li> the health-system capacites being exhausted.  </li>
                                </p>
                                </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="element-wrapper">
                            <h6 className="element-header">
                                Countrywise Mortality Rate
                            </h6>
                            <div className="element-box-tp">
                                <CountrywiseLine 
                                values={lineDataCountrywiseMortalityRate}
                                option={optionPropertiesCountrywiseMortalityRate}
                                />
                            </div>
                            </div>
                            <div class="alert alert-warning borderless">
                            <p>
                              In contrast to the fatality rate, the mortality rate above is shown in dead per million inhabitants. This makes it independant of whether the confirmed count is estimated correctly. In most cases both will be correlated. However, the mortality rate is a better indicator of the influence of the pandepic on a countries society and economy - especially when the health-system is exhausted.
                            </p>
                            </div>
                        </div>

                        
                        </div>
                        </>
                    )
                }}
        </Async>
    )
}
