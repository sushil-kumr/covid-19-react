
import { element } from 'prop-types'

import React, { Component } from 'react'

export default class HomeUpdateCard extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="post-box mb-1">
            <div className="post-content pt-2 pb-0">
            <a href={this.props.data.link} target="" style={{textDecoration: "none"}}>
                <p className="font-weight-bold" style={{fontSize:"16px", color: "black"}}>
                    {this.props.data.headline}
                </p>
                <div className="post-foot">
                <div className="post-tags col-8">
                    <b style={{fontSize: "12px", color: "#555", marginRight: "2%"}}>{this.props.data.record_time}</b>
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
