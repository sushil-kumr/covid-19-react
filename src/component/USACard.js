import React,{useState,useEffect} from 'react'

import {Line} from 'react-chartjs-2';

import {lineDataUSA, optionUSA} from "../data/data";

import cloneDeep from 'lodash/cloneDeep';

export default function USACard(props) {

    const [all, setAll] = useState("");

   // let simpleTotal;

    useEffect(() => {
        setAll(props.data);
    },[]);

    const simpleTotal = cloneDeep(lineDataUSA);
    simpleTotal.datasets[0].data = props.daily
    simpleTotal.datasets[0].borderColor = props.color
    simpleTotal.labels = props.dates; 
    optionUSA.scales.yAxes[0].ticks.min = (-0.01*props.lastData);
    optionUSA.scales.yAxes[0].ticks.max = props.max;
    console.log(props.max);

    
    return (
        <div className="col-sm-3 col-6">
            <a className="element-box el-tablo centered trend-in-corner padded bold-label">
                <div className="label" style={{fontWeight:"500", fontSize: "12px"}}>
                {props.name}
                </div>
                <div className={`value ${props.styleName} font-weight-bold`} style={{fontWeight:"500", fontSize: "22px"}}>
                {(all.toLocaleString("en"))}
                </div>
                <div className={`trending ${props.styleName} trending-down-basic`}>
                <b>+{Math.abs(props.data-props.lastData)} </b>
                </div>
                <div className="el-chart-w" >
                    <Line data={simpleTotal}
                        options={optionUSA} 
                        />
                </div> 
            </a>
        </div>
    )
}
