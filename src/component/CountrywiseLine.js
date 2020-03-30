import React from 'react'

import {Line} from 'react-chartjs-2';

export default function CountrywiseLine(props) {
    return (
        <div className={`tab-pane ${props.text}`} id={props.id}>
                <div className="value">
                    {props.data}
                </div>
            <div className="el-chart-w"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                <Line height="180px" data={props.values}
                    options={props.option}
                />
            </div>
        </div>
    )
}