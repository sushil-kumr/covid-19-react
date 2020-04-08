import React, {useState} from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../component/Layout'
import ServerDown  from './ServerDown'
import UpdateCard  from '../component/UpdateCard'
import Async from 'react-async';

import Loader  from '../component/Loader'

const loadUsers = () =>
fetch("https://curecovid19.in/readings/updates/get_updates")
.then(res => (res.ok ? res : Promise.reject(res)))
.then(res => res.json())


export default function Updates() {

  
const [value, setValue] = useState();

    return (
      <Async promiseFn={loadUsers} >
                {({ data, err, isLoading }) => {
                    if (isLoading) return (<Loader/>)
                    if (err) return <ServerDown/>
                    if (data)

                    return(
                        <Layout>

                        <Helmet>
                          <title>Updates | curecovid19</title>
                          <meta name="description" content="News and Updates about COVID-19"  data-react-helmet="true" />
                          <meta name="theme-color" content="#008f68"  data-react-helmet="true"/>
                        </Helmet>

                            <div className="content-w"><div className="content-i"><div className="content-box">
                              <div className="row">
                                <div className="col-12 col-xxl-12">
                                  <div className="element-wrapper compact pt-4">
                                    <div className="element-actions d-sm-block">
                                    <form className="form-inline justify-content-sm-end">
                                      <label className="smaller" htmlFor="">Categories</label>
                                      <select className="form-control form-control-sm form-control-faded" onChange={(e) =>{ setValue(e.target.value)}}>
                                        <option value="ALL">
                                          ALL
                                        </option>
                                        {data.tags.map((element,i)=><option key={i} value={element}>
                                          {element} 
                                        </option>)}
                                      </select>
                                    </form>
                                    </div>
                                    <h6 className="element-header">
                                      ALL
                                    </h6>

                                    <div className="element-box-tp">
                                      {data.updates.map(element=><UpdateCard data={element} key={element.id}/>)}
                                      
                                      <a className="centered-load-more-link" href="https://t.me/covid19smeindia" target="_blank">
                                          <span style={{textDecoration: "underline"}}>For Updates on Telegram</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                              
                            </div>
                            </div></div></div>
                        </Layout>
                        )}}
                        </Async>
    )
}
