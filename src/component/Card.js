import React from 'react'

import {Line} from 'react-chartjs-2';

export default function Card(props) {
    return (
        <div className="col-sm-3 col-6">
            <a className="element-box el-tablo centered trend-in-corner padded bold-label" >
                <div className="label" style={{fontWeight:"500", fontSize: "12px"}}>
                {props.name}
                </div>
                <div className={`value ${props.styleName} font-weight-bold`}>
                {props.data}
                </div>
                <div className={`trending ${props.styleName} trending-down-basic`}>
                <b>+{props.diff} </b>
                </div>
                <div className="el-chart-w"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                    <Line data={props.values}
                        options={props.option} 
                        />
                </div> 
            </a>
        </div>
    )
}
