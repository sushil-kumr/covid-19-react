
import { element } from 'prop-types'

import React, { Component } from 'react'

export default class ViewUpdateCard extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="post-box">
            <div className="post-content">
            {/* <a href={this.props.data.link} target="_blank" style={{textDecoration: "none"}}> */}
                <div class="row mb-2">
                    <div className="col-6">
                        <b style={{fontSize: "12px", color: "#555"}}>{this.props.data.record_time}</b>
                    </div>
                    <div className="col-4">
                        {/* <i className="fa fa-eye" style={{opacity: "0.9"}}> 234</i>*/}
                    </div>
                    <div className="col-2">
                        <span>
                        <i className="fa fa-edit" onClick={()=>this.props.onUpdate(this.props.data)} style={{paddingRight: "20%", cursor: "pointer"}}></i>
                        <i className="fa fa-trash" onClick={()=>this.props.onDelete(this.props.data.id)} style={{paddingRight: "0%", cursor: "pointer"}}></i>
                        </span>
                    </div>

                </div>
                <h5 className="font-weight-bold">
                {this.props.data.headline}
                </h5>
                <div className="post-text" style={{color: "#555", fontSize: "15px"}}>
                {this.props.data.body}
                </div>
                <div className="post-foot">
                <div className="post-tags">
                    {this.props.data.tags.split(',').map((element,i)=>
                    <div className="badge badge-primary" key={i} style={{margin: "4px"}}>
                        {element}
                    </div>
                    )}
                </div>
                </div>
                {/* </a> */}
            </div>
            </div>
    )
    }
}
