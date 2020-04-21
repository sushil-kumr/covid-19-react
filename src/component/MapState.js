import React from 'react'

export default function MapState(props) {
    return (
        <div style={props.data.name===undefined?{display:"none"}:{display:"inline-block"}} >
            <br/>
            <div className="element-wrapper p-3">
                <div className="element-box-tp">
                <div className="el-tablo highlight">
                <div className="label font-weight-bold smaller">
                {props.data.name}
                </div>
                </div>
                <div className="balance-table pl-sm-2">
                <table className="table table-lightborder table-bordered table-v-compact mb-0">
                <tr>
                <td>
                <strong className="text-danger font-weight-bold">{props.data.value===undefined?"NA":props.data.value.toLocaleString(props.indiaFlag?"en-IN":"en")}</strong>
                <div className="balance-label smaller lighter text-nowrap">
                CONFIRMED
                </div>
                </td>
                <td>
                <strong className="text-primary font-weight-bold">{props.data.active===undefined?"NA":props.data.active.toLocaleString(props.indiaFlag?"en-IN":"en")}</strong>
                <div className="balance-label smaller lighter text-nowrap">
                ACTIVE
                </div>
                </td>
                <td>
                <strong className="text-success font-weight-bold">{props.data.recovered===undefined?"NA":props.data.recovered.toLocaleString(props.indiaFlag?"en-IN":"en")}</strong>
                <div className="balance-label smaller lighter text-nowrap">
                RECOVERED
                </div>
                </td>
                <td>
                <strong className="text-secondary font-weight-bold">{props.data.deaths===undefined?"NA":props.data.deaths.toLocaleString(props.indiaFlag?"en-IN":"en")}</strong>
                <div className="balance-label smaller lighter text-nowrap">
                DEATHS
                </div>
                </td>
                </tr>
                </table>
                </div>
                </div>
            </div>
        </div>
    )
}
