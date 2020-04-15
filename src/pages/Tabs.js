
import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';

import {Link} from 'react-router-dom'

import Home from './Home'
import USA from './UsPage'
import GoogleMap from './MyGoogleMap'
import Analytics from './CombineAnalytics'
import Layout from '../component/Layout'

import React, { Component } from 'react'

export default class CovidTabs extends Component {

    constructor(props){
        super(props)
        this.state={
            tabs:[{title:"India",link:"/",comp:Home},
            {title:"USA",link:"/usa",comp:USA},
            {title:"World",link:"/world",comp:GoogleMap},
            {title:"Analytics",link:"/analytics",comp:Analytics}]
        }
    }

    render() {
        const ActiveComponents = this.state.tabs[this.props.tabValue].comp;
        return (
            <Layout>
            <div className="content-w"><div className="content-i"><div className="content-box pt-0">
                <Tabs defaultIndex={this.props.tabValue}>
                <div className="element-wrapper pb-0"><div className="element-box-tp pt-0"><div className="os-tabs-w"></div><div className="os-tabs-controls">    
                <TabList className="nav nav-tabs smaller" style={{cursor:"pointer"}}>
                    {this.state.tabs.map((element,i)=>
                    <Link key={i} to={element.link} style={{textDecoration:"none"}}><Tab className={`nav-item nav-link ${this.props.tabValue===i?"active":""}`}>{element.title}</Tab></Link>
                    )}
                </TabList>
                </div></div></div>

                {this.state.tabs.map((element,i)=><TabPanel key={i}>
                    {this.props.tabValue===i?<ActiveComponents/>:""}
                </TabPanel>)}
            </Tabs>
    
        </div>
        </div></div>
        </Layout>
        )
    }
}