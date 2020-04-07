import React from 'react'
import {Helmet} from 'react-helmet'

import Loader  from '../component/Loader'

import Content  from '../component/Content'
import ContentGraph  from '../component/ContentGraph'
import ServerDown  from './ServerDown'

import {optionPropertiesCountrywise,optionPropertiesCountrywiseInfectionRate,
    lineDataCountrywiseInfectionRate, lineDataCountrywise, colorsCountrywise, 
    lineDataCountrywiseMortalityRate, lineDataCountrywiseFatalityRate, 
    optionPropertiesCountrywiseMortalityRate, optionPropertiesCountrywiseFatalityRate} from '../data/data'

import Async from 'react-async';

export default function Global() {

    const loadUsers = () =>
    // fetch("http://192.168.1.157:5000/readings/countrywise")
    fetch("https://curecovid19.in/readings/readings/countrywise")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

    return (
        <Async promiseFn={loadUsers} >
                {({ data, err, isLoading }) => {
                    if (isLoading) return (<Loader/>)
                    if (err) return <ServerDown/>
                    if (data) 
                      // for country wise graphs
                    var countries = ["India", "China", "Spain", "Italy", "US"];
                    lineDataCountrywise.labels = [...Array(data.counts[`${countries[1]}`].length).keys()];
                    lineDataCountrywise.datasets = [];
                     // console.log(data.counts);
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

                    lineDataCountrywiseInfectionRate.labels = [...Array(data.counts[`${countries[1]}`].length).keys()];
                    lineDataCountrywiseMortalityRate.labels = [...Array(data.counts[`${countries[1]}`].length).keys()];
                    lineDataCountrywiseFatalityRate.labels = [...Array(data.counts[`${countries[1]}`].length).keys()];
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
                        <Content 
                            title="Thoughtprocess" 
                            desc={<p>For any kind of Data Analysis on Covid-19 we have first to bring the data points of
                            different countries to the same origin. We cannot derive anything meaningful if
                            we just plot the confirmed infections at their respective dates due to different 
                            origins of outbreak. So we fixed the origins of all countries to Day 0, which in our
                            case represents the day when each country has surpassed 500 cases.</p>}/>

                        <ContentGraph title="Countrywise Spread"
                            values={lineDataCountrywise} 
                            option={optionPropertiesCountrywise}
                            desc={<p>This gives us an idea of how the virus has spread among different countries.
                            But this is not the best indicator yet due to difference in populations and 
                            population densities among the countries.</p>}/>

                        <ContentGraph title="Countrywise Infection Rate"
                            values={lineDataCountrywiseInfectionRate} 
                            option={optionPropertiesCountrywiseInfectionRate}
                            desc={<><p>Infection rate gives us a measure of how well different countries are doing in the fight against
                             COVID-19 no matter its population and density.</p><h6 class="alert-heading font-weight-bold">
                             An infection rate of 1.0 means healthcare stability and no new infections.</h6></>}/>

                        <ContentGraph title="Countrywise Fatality Rate"
                            values={lineDataCountrywiseFatalityRate} 
                            option={optionPropertiesCountrywiseFatalityRate}
                            desc={<><p>Due to the sampling bias induced by restricted access to COVID-19 testing in
                             different countries, only looking at the confirmed cases don't give us the true picture.
                              An increase of the fatality rate indicates that<li> the confirmed count is being
                               under-estimated.</li><li> the health-system capacites being exhausted. 
                               </li>This was the case in Italy</p></>}/>
                    

                        <ContentGraph title="Countrywise Mortality Rate"
                            values={lineDataCountrywiseMortalityRate} 
                            option={optionPropertiesCountrywiseMortalityRate}
                            desc={<p>In contrast to the fatality rate, the mortality rate below is shown in dead
                             per million inhabitants. The mortality rate is not dependent on confirmed or active
                              number of cases and it gives us the true picture of the damage inflicted by the pandemic.</p>}
                            />
                        </div>
                        </>
                    )
                }}
        </Async>
    )
}
