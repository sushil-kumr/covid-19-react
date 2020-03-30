import React from 'react'
import {Helmet} from 'react-helmet'

import Loader  from '../component/Loader'

import CountrywiseLine  from '../component/CountrywiseLine'

import {optionPropertiesCountrywise,optionPropertiesCountrywiseInfectionRate,
    lineDataCountrywiseInfectionRate, lineDataCountrywise, colorsCountrywise} from '../data/data'

import Async from 'react-async';

export default function Global() {

    const loadUsers = () =>
    // fetch("http://192.168.0.103:5000/readings/countrywise")
    fetch("https://curecovid19.in/readings/readings/countrywise")
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
                      var countries = Object.keys(data.counts);
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
                      lineDataCountrywiseInfectionRate.datasets = [];
                     // console.log(data.counts);
                      var countries = Object.keys(data.counts);
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
  
                    return(
                        <>
                          <Helmet>
                           <title>Analytics Between Countries</title>
                            <meta name="description" content="Comparision between India, China, Itlay, USA and Spain"  data-react-helmet="true" />
                            <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
                          </Helmet>
                        <div className="row">
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
                        </div>
                        </div>
                        </>
                    )
                }}
        </Async>
    )
}
