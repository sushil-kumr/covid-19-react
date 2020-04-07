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
    // fetch("http://192.168.1.157:5000/readings/readings/statewise")
    fetch("https://www.curecovid19.in/readings/readings/statewise")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

    return (
        <Async promiseFn={loadUsers} >
                {({ data, err, isLoading }) => {
                    if (isLoading) return (<Loader/>)
                    if (err) return <ServerDown/>
                    if (data) 

                    var states = data.states;

                    lineDataCountrywise.labels = [...Array(data.counts[`${states[1]}`].length).keys()];
                    lineDataCountrywise.datasets = [];
                    states.forEach((item, index) =>{
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

                    lineDataCountrywiseInfectionRate.labels = [...Array(data.counts[`${states[1]}`].length).keys()];
                    lineDataCountrywiseMortalityRate.labels = [...Array(data.counts[`${states[1]}`].length).keys()];
                    lineDataCountrywiseFatalityRate.labels = [...Array(data.counts[`${states[1]}`].length).keys()];
                    lineDataCountrywiseInfectionRate.datasets = [];
                    lineDataCountrywiseMortalityRate.datasets = [];
                    lineDataCountrywiseFatalityRate.datasets = [];

                    optionPropertiesCountrywise.scales.xAxes[0].scaleLabel.labelString = "Days since 100 Confirmed cases";
                    optionPropertiesCountrywiseInfectionRate.scales.xAxes[0].scaleLabel.labelString = "Days since 100 Confirmed cases";
                    optionPropertiesCountrywiseFatalityRate.scales.xAxes[0].scaleLabel.labelString = "Days since 100 Confirmed cases";
                    optionPropertiesCountrywiseMortalityRate.scales.xAxes[0].scaleLabel.labelString = "Days since 100 Confirmed cases";

                    var mortality_rate_max = 0;

                    states.forEach((item, index) =>{
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

                    states.forEach((item, index) =>{
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
                        } 
                    });

                    states.forEach((item, index) =>{
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
                            <title>Analytics Between Indian States</title>

                            <meta name="description" content="Comparision between India states like MP, Delhi, Kerala, etc."  data-react-helmet="true" />
                            <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
                        
                        </Helmet>
                        <div className="row">
                        <Content 
                            title="Thoughtprocess" 
                            desc={<p>For any kind of Data Analysis on Covid-19 we have first to bring the data points of
                            different states to the same origin. We cannot derive anything meaningful if
                            we just plot the confirmed infections at their respective dates due to different 
                            origins of outbreak. So we fixed the origins of all states to Day 0, which in our
                            case represents the day when each state has surpassed 100 cases.</p>}/>

                        <ContentGraph title="State-Wise Spread"
                            values={lineDataCountrywise} 
                            option={optionPropertiesCountrywise}
                            desc={<p>This gives us an idea of how the virus has spread among different states.
                            But this is not the best indicator yet due to difference in populations and 
                            population densities among the states.</p>}/>

                        <ContentGraph title="State-Wise Infection Rate"
                            values={lineDataCountrywiseInfectionRate} 
                            option={optionPropertiesCountrywiseInfectionRate}
                            desc={<><p>Infection rate gives us a measure of how well different states are doing in the fight against
                             COVID-19 no matter its population and density.</p><h6 class="alert-heading font-weight-bold">
                             An infection rate of 1.0 means healthcare stability and no new infections.</h6></>}/>

                        <ContentGraph title="State-Wise Fatality Rate"
                            values={lineDataCountrywiseFatalityRate} 
                            option={optionPropertiesCountrywiseFatalityRate}
                            desc={<><p>Due to the sampling bias induced by restricted access to COVID-19 testing in
                             different states, only looking at the confirmed cases don't give us the true picture.
                              An increase of the fatality rate indicates that<li> the confirmed count is being
                               under-estimated.</li><li> the health-system capacites being exhausted. 
                               </li>This was the case in Italy</p></>}/>
                    

                        <ContentGraph title="State-Wise Mortality Rate"
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
