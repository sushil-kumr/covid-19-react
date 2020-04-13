
import { element } from 'prop-types'

import React, { Component } from 'react'

export default class UpdateCard extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="post-box">
            <div className="post-content">
            <a href={this.props.data.link} target="_blank" style={{textDecoration: "none"}}>
                <div class="row mb-2">
                    <div className="col-12">
                        <b style={{fontSize: "12px", color: "#555", marginRight: "2%"}}>{this.props.data.record_time}</b>
                        {/* <span style={{fontSize: "12px", color: "#555"}}>
                                <i className="fa fa-eye" onClick={()=>this.props.onUpdate(this.props.data)} style={{cursor: "pointer", paddingRight: "0%", color: "#555"}}></i> 
                                10,234
                            </span>*/}
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

                <div className="post-link"> <span> LINK</span><i className="fa fa-chevron-right"></i></div>
                </div>
                </a>
            </div>
            </div>
    )
    }
}
