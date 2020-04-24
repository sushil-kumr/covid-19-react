
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
                <p className="font-weight-bold" style={{fontSize:"16px", color: "black", marginBottom: "4px"}}>
                    {this.props.data.headline}
                </p>
                <div className="post-foot">
                <div className="post-tags col-10" style={{paddingLeft: "0px"}}>
                    
                    <div className="badge badge-primary" style={{margin: "4px"}}>
                        {this.props.data.tags.split(',').slice(-1)["length"]? this.props.data.tags.split(',').slice(-1)[0] : "news"}
                    </div>
                </div>

                <div className="post-link"> <span>LINK</span><i className="fa fa-chevron-right"></i></div>
                </div>
                </a>
            </div>
            </div>
    )
    }
}
