import React from 'react'

export default function StateWiseData(props) {

    var confirm = props.data.total;
    var active = confirm - props.data.deaths - props.data.recovered;
  
        return(<tr style={confirm ? {} : { display: 'none' }}>
                    <td className="text-left">
                    <span style={{fontSize: "14px"}}>{props.data.state}</span>
                    </td>
                    <td className="wrap">
                    <span className="text-danger font-weight-bold" style={{fontSize: "10px"}}>{props.data.delta_total === 0?``: `(+${props.data.delta_total})`} </span><span className="font-weight-bold" style={{fontSize: "14px"}}>{confirm}</span>
                    </td>
                    <td className="wrap">
                    <span className="text-primary font-weight-bold" style={{fontSize: "10px"}}>{props.data.delta_active === 0?``: `(+${props.data.delta_active})`} </span><span className="font-weight-bold" style={{fontSize: "14px"}}>{active}</span>
                    </td>
                    <td className="wrap">
                    <span className="text-success font-weight-bold" style={{fontSize: "10px"}}>{props.data.delta_recovered === 0?``: `(+${props.data.delta_recovered})`} </span><span className="font-weight-bold" style={{fontSize: "14px"}}>{props.data.recovered}</span>
                    </td>
                    <td className="wrap">
                    <span className="font-weight-bold" style={{fontSize: "10px"}}> {props.data.delta_deaths === 0?``: `(+${props.data.delta_deaths})`} </span> <span className="font-weight-bold" style={{fontSize: "14px"}}>{props.data.deaths}</span>
                    </td>
                </tr>
                )
}
