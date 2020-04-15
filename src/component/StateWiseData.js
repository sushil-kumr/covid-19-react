import React from 'react'

export default function StateWiseData(props) {

    let confirm,active,recovered,deaths;

    if(props.data.total!==undefined){
         confirm = props.data.total;
         active = confirm - props.data.deaths - props.data.recovered;
        }else if(props.data.active!==undefined){
            confirm = props.data.confirmed;
            recovered = props.data.recovered;
            props.data.delta_total=props.data.delta_active=props.data.delta_recovered=props.data.delta_deaths=0;
        }
        
        deaths = props.data.deaths;
        active = props.data.active;

    // console.log(props.data)
  
        return(<tr style={confirm ? {} : { display: 'none' }}>
                    <td className="text-left">
                    <span style={{fontSize: "14px"}}>{props.data.state}</span>
                    </td>
                    <td className="no-wrap">
                    <span className="text-danger font-weight-bold" style={{fontSize: "10px"}}>{props.data.delta_total === 0?``: `(+${props.data.delta_total})`} </span><span className="font-weight-bold" style={{fontSize: "14px"}}>{confirm}</span>
                    </td>
                    <td className="no-wrap">
                    <span className="text-primary font-weight-bold" style={{fontSize: "10px"}}></span><span className="font-weight-bold" style={{fontSize: "14px"}}>{active}</span>
                    </td>
                    <td className="no-wrap">
                    <span className="text-success font-weight-bold" style={{fontSize: "10px"}}>{props.data.delta_recovered === 0?``: `(+${props.data.delta_recovered})`} </span><span className="font-weight-bold" style={{fontSize: "14px"}}>{props.data.recovered}</span>
                    </td>
                    <td className="no-wrap">
                    <span className="font-weight-bold" style={{fontSize: "10px"}}> {props.data.delta_deaths === 0?``: `(+${props.data.delta_deaths})`} </span> <span className="font-weight-bold" style={{fontSize: "14px"}}>{props.data.deaths}</span>
                    </td>
                </tr>
                )
}
