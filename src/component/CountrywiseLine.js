import React from 'react'

import {Line} from 'react-chartjs-2';

export default function CountrywiseLine(props) {
    return (
        <div className={`tab-pane ${props.text}`} id={props.id}>
                <div className="value">
                    {props.data}
                </div>
            <div className="el-chart-w">
                <Line height="500%" width="100%" data={props.values}
                    options={props.option}
                />
            </div>
        </div>
    )
}