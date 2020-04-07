import React from 'react'

export default function CountryCard(props) {
    return (
        <div className={props.myClass===undefined?"col-sm-3 col-xxxl-3":props.myClass}>
        <a className="element-box el-tablo" href="#">
            <div className="label" style={{fontSize: "12px"}}>
            {props.name}
            </div>
            <div className={`value ${props.styleName} font-weight-bold`} style={{fontSize: "18px"}}>
            {(props.summary).toLocaleString("en-IN")}
            </div>
            <span className="trending trending-down-basic large" style={props.per===undefined?{display:"none"}:{display:"inline-block"}}>
            <span>{props.per===0?"":`${(parseFloat(props.per).toFixed(2))}%`}</span>
            </span>
        </a>
        </div>
    )
}
// ""