import React from 'react'

import {Bar} from 'react-chartjs-2';

export default function SimpleGraph(props) {
    return (
        <div className={`tab-pane ${props.text}`} id={props.id}>
            <div className="value">
                {props.data}
            </div>
            <div className="el-chart-w">
                <Bar height="400%" width="100%" data={props.values} options={props.option}/>
            </div>
        </div>
    )
}
