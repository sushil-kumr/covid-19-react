import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../component/Layout'

export default function Help() {
    return (
        <Layout>

        <Helmet>
          <title>Updates | curecovid19</title>
          <meta name="description" content="News and Updates about COVID-19"  data-react-helmet="true" />
          <meta name="theme-color" content="#008f68"  data-react-helmet="true"/>
        </Helmet>

            <div className="content-w"><div className="content-i"><div className="content-box">
              <div class="row">
                <div class="col-12 col-xxl-12">
                  <div class="element-wrapper compact pt-4">
                    <div class="element-actions d-sm-block">
                    <form class="form-inline justify-content-sm-end">
                      <label class="smaller" for="">Categories</label><select class="form-control form-control-sm form-control-faded">
                        <option value="ALL">
                          ALL
                        </option>
                        <option value="GST">
                          GST 
                        </option>
                        <option value="Finance">
                          Finance
                        </option>
                      </select>
                    </form>
                    </div>
                    <h6 class="element-header">
                      ALL
                    </h6>

                    <div class="element-box-tp">
                      <a href="/GST" style={{textDecoration: "none"}}>
                        <div class="post-box">
                        <div class="post-content">
                          <b style={{fontSize: "12px", color: "#555"}}>27 March, 2020, 08:34PM</b>
                          <h5 class="font-weight-bold">
                            Is Crypto the Future of Film Funding?
                          </h5>
                          <div class="post-text" style={{color: "#555", fontSize: "15px"}}>
                            Curiously, view both tone emerged. There should which yards two and concepts amidst liabilities sitting of and, parents it wait 
                          </div>
                          <div class="post-foot">
                            <div class="post-tags">
                              <div class="badge badge-primary" style={{margin: "4px"}}>
                                BTC
                              </div>
                              <div class="badge badge-primary" style={{margin: "4px"}}>
                                Crypto
                              </div>
                              <div class="badge badge-primary" style={{margin: "4px"}}>
                                Crypto
                              </div>

                            </div>
                            <a class="post-link" href="/GST"><span>LINK</span><i class="fa fa-chevron-right"></i></a>
                          </div>
                        </div>
                        </div>
                      </a>
                      
                      <a class="centered-load-more-link" href="https://t.me/covid19smeindia" target="_blank">
                          <span style={{textDecoration: "underline"}}>For Updates on Telegram</span>
                      </a>
                    </div>
                  </div>
                </div>

              
            </div>
            </div></div></div>
        </Layout>
    )
}
