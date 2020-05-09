import React from 'react'

import {Line} from 'react-chartjs-2';

export default function Card(props) {
    return (
        <div className="col-sm-3 col-6">
            <a className="element-box el-tablo centered trend-in-corner padded bold-label">
                <div className="label" style={{fontWeight:"500", fontSize: "10px"}}>
                    {props.name}
                </div>
                <div className={`value ${props.styleName} font-weight-bold`} style={{fontSize: "28px"}}>
                    {props.data}
                </div>
                <div className={`trending ${props.styleName} trending-down-basic`}>
                    <b style={{fontSize: "14px"}}>{props.diff? ('+' + props.diff):""}</b>
                </div>
                <div className="el-chart-w">
                    <Line data={props.values} options={props.option}/>
                </div> 
            </a>
        </div>
    )
}
