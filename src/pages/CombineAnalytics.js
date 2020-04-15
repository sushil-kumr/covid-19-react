import React,{useState,useEffect} from 'react'
import {Helmet} from 'react-helmet'

import Loader  from '../component/Loader'

import Content  from '../component/Content'
import ContentGraph  from '../component/ContentGraph'

import cloneDeep from 'lodash/cloneDeep';

import {optionPropertiesCountrywise, lineDataCountrywise, colorsCountrywise} from '../data/data'

import Async from 'react-async';

const urls=["https://www.curecovid19.in/readings/readings/statewise",
            "https://curecovid19.in/readings/readings/countrywise"
            ]

export default function CombineAnalytics() {

    const [fetched,setFetched] = useState(false);
    const [spreadLine, setSpread] = useState({}); 
    const [infectedLine, setInfected] = useState({}); 
    const [mortalityLine, setMortality] = useState({}); 
    const [fatalityLine, setFatality] = useState({}); 
    const [spreadWorldLine, setWorldSpread] = useState({}); 
    const [infectedWorldLine, setWorldInfected] = useState({}); 
    const [mortalityWorldLine, setWorldMortality] = useState({}); 
    const [fatalityWorldLine, setWorldFatality] = useState({}); 

   let optionPropertiesStatewise = cloneDeep(optionPropertiesCountrywise)
   optionPropertiesStatewise.scales.xAxes[0].scaleLabel.labelString = "Days since 100 Confirmed cases"

    useEffect(() => {
        if (fetched === false) {
          getAllData();
        }
      }, [fetched]);

      const getAllData = async () => {
        var promises = urls.map(url => fetch(url).then(res => res.json()));
        await Promise.all(promises).then(results => {
            const indiaData = results[0];
            const worldData = results[1];
            // console.log(indiaData);
            var states = indiaData.states;
            lineDataCountrywise.labels = [...Array(indiaData.counts[`${states[1]}`].length).keys()];

            const spreadLine = cloneDeep(lineDataCountrywise);
            const infectedLine = cloneDeep(lineDataCountrywise);
            const mortalityLine = cloneDeep(lineDataCountrywise);
            const fatalityLine = cloneDeep(lineDataCountrywise);

            states.forEach((item, index) =>{

                spreadLine.datasets.push({
                                            label: item,
                                            legendText: item,
                                            fill: false,
                                            borderColor: colorsCountrywise[index],
                                            pointBackgroundColor: colorsCountrywise[index],
                                            pointRadius: 2,
                                            data: indiaData.counts[item],
                                            spanGaps: false,
                                            lineTension: 0.4
                                        })

                infectedLine.datasets.push({
                                            label: item,
                                            legendText: item,
                                            fill: false,
                                            borderColor: colorsCountrywise[index],
                                            pointBackgroundColor: colorsCountrywise[index],
                                            pointRadius: 2,
                                            data: indiaData.infection_rate[item],
                                            spanGaps: false,
                                            lineTension: 0.4
                                        })
                
                mortalityLine.datasets.push({
                                            label: item,
                                            legendText: item,
                                            fill: false,
                                            borderColor: colorsCountrywise[index],
                                            pointBackgroundColor: colorsCountrywise[index],
                                            pointRadius: 2,
                                            data: indiaData.mortality_rate[item],
                                            spanGaps: false,
                                            lineTension: 0.4
                                        })
                
                fatalityLine.datasets.push({
                                            label: item,
                                            legendText: item,
                                            fill: false,
                                            borderColor: colorsCountrywise[index],
                                            pointBackgroundColor: colorsCountrywise[index],
                                            pointRadius: 2,
                                            data: indiaData.fatality_rate[item],
                                            spanGaps: false,
                                            lineTension: 0.4
                                        })

            })

            setSpread(spreadLine);
            setInfected(infectedLine);
            setMortality(mortalityLine);
            setFatality(fatalityLine);

            var countries = ["India", "China", "Spain", "Italy", "US"];
            lineDataCountrywise.labels = [...Array(worldData.counts[`${countries[1]}`].length).keys()];

            const spreadWorldLine = cloneDeep(lineDataCountrywise);
            const infectedWorldLine = cloneDeep(lineDataCountrywise);
            const mortalityWorldLine = cloneDeep(lineDataCountrywise);
            const fatalityWorldLine = cloneDeep(lineDataCountrywise);

            countries.forEach((item, index) =>{

                spreadWorldLine.datasets.push({
                                            label: item,
                                            legendText: item,
                                            fill: false,
                                            borderColor: colorsCountrywise[index],
                                            pointBackgroundColor: colorsCountrywise[index],
                                            pointRadius: 2,
                                            data: worldData.counts[item],
                                            spanGaps: false,
                                            lineTension: 0.4
                                        })

                infectedWorldLine.datasets.push({
                                            label: item,
                                            legendText: item,
                                            fill: false,
                                            borderColor: colorsCountrywise[index],
                                            pointBackgroundColor: colorsCountrywise[index],
                                            pointRadius: 2,
                                            data: worldData.infection_rate[item],
                                            spanGaps: false,
                                            lineTension: 0.4
                                        })
                
                mortalityWorldLine.datasets.push({
                                            label: item,
                                            legendText: item,
                                            fill: false,
                                            borderColor: colorsCountrywise[index],
                                            pointBackgroundColor: colorsCountrywise[index],
                                            pointRadius: 2,
                                            data: worldData.mortality_rate[item],
                                            spanGaps: false,
                                            lineTension: 0.4
                                        })
                
                fatalityWorldLine.datasets.push({
                                            label: item,
                                            legendText: item,
                                            fill: false,
                                            borderColor: colorsCountrywise[index],
                                            pointBackgroundColor: colorsCountrywise[index],
                                            pointRadius: 2,
                                            data: worldData.fatality_rate[item],
                                            spanGaps: false,
                                            lineTension: 0.4
                                        })

            })

            setWorldSpread(spreadWorldLine);
            setWorldInfected(infectedWorldLine);
            setWorldMortality(mortalityWorldLine);
            setWorldFatality(fatalityWorldLine)

            setFetched(true);


        })}

        return(
            <>
            {!fetched && ( <Loader/> )}
            {fetched && (  
            <React.Fragment>
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
                values={spreadLine} 
                option={optionPropertiesStatewise}
                desc={<p>This gives us an idea of how the virus has spread among different states.
                But this is not the best indicator yet due to difference in populations and 
                population densities among the states.</p>}/>

            <ContentGraph title="State-Wise Infection Rate"
                values={infectedLine} 
                option={cloneDeep(optionPropertiesStatewise)}
                desc={<><p>Infection rate gives us a measure of how well different states are doing in the fight against
                COVID-19 no matter its population and density.</p><h6 className="alert-heading font-weight-bold">
                An infection rate of 1.0 means healthcare stability and no new infections.</h6></>}/>

            <ContentGraph title="State-Wise Fatality Rate"
                values={fatalityLine} 
                option={cloneDeep(optionPropertiesStatewise)}
                desc={<><p>Due to the sampling bias induced by restricted access to COVID-19 testing in
                different states, only looking at the confirmed cases don't give us the true picture.
                An increase of the fatality rate indicates that<li> the confirmed count is being
                under-estimated.</li><li> the health-system capacites being exhausted. 
                </li>This was the case in Italy</p></>}/>
        

            <ContentGraph title="State-Wise Mortality Rate"
                values={mortalityLine} 
                option={cloneDeep(optionPropertiesStatewise)}
                desc={<p>In contrast to the fatality rate, the mortality rate below is shown in dead
                per million inhabitants. The mortality rate is not dependent on confirmed or active
                number of cases and it gives us the true picture of the damage inflicted by the pandemic.</p>}
                />
            </div>


            <div className="row">
            <br/>
            <Content 
                title="Thoughtprocess" 
                desc={<p>For any kind of Data Analysis on Covid-19 we have first to bring the data points of
                different countries to the same origin. We cannot derive anything meaningful if
                we just plot the confirmed infections at their respective dates due to different 
                origins of outbreak. So we fixed the origins of all countries to Day 0, which in our
                case represents the day when each country has surpassed 500 cases.</p>}/>

            <ContentGraph title="Countrywise Spread"
                values={spreadWorldLine} 
                option={cloneDeep(optionPropertiesCountrywise)}
                desc={<p>This gives us an idea of how the virus has spread among different countries.
                But this is not the best indicator yet due to difference in populations and 
                population densities among the countries.</p>}/>

            <ContentGraph title="Countrywise Infection Rate"
                values={infectedWorldLine} 
                option={cloneDeep(optionPropertiesCountrywise)}
                desc={<><p>Infection rate gives us a measure of how well different countries are doing in the fight against
                COVID-19 no matter its population and density.</p><h6 className="alert-heading font-weight-bold">
                An infection rate of 1.0 means healthcare stability and no new infections.</h6></>}/>

            <ContentGraph title="Countrywise Fatality Rate"
                values={fatalityWorldLine} 
                option={cloneDeep(optionPropertiesCountrywise)}
                desc={<><p>Due to the sampling bias induced by restricted access to COVID-19 testing in
                different countries, only looking at the confirmed cases don't give us the true picture.
                An increase of the fatality rate indicates that<li> the confirmed count is being
                under-estimated.</li><li> the health-system capacites being exhausted. 
                </li>This was the case in Italy</p></>}/>
        

            <ContentGraph title="Countrywise Mortality Rate"
                values={mortalityWorldLine} 
                option={cloneDeep(optionPropertiesCountrywise)}
                desc={<p>In contrast to the fatality rate, the mortality rate below is shown in dead
                per million inhabitants. The mortality rate is not dependent on confirmed or active
                number of cases and it gives us the true picture of the damage inflicted by the pandemic.</p>}
                />


            
            </div>

            </React.Fragment>)}
            </>
        )
}
