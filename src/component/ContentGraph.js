import React from 'react'
import CountrywiseLine  from '../component/CountrywiseLine'

export default function ContentGraph(props) {
    return (
        <div className="col-sm-6">
            <div className="element-wrapper">
            <h6 className="element-header">
                {props.title}
            </h6>
            <div className="element-box-tp">
                <CountrywiseLine 
                values={props.values}
                option={props.option}
                />
            </div>
            </div>
            <div className="alert alert-warning borderless">
                {props.desc}
            </div>
        </div>
    )
}
