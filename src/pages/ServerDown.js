import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../component/Layout'

export default function ServerDown() {
    return (
        <Layout>
            <div className="content-w">
            <Helmet>
            <title>Server Down</title>
     
                <meta name="description" content="We are sorry for inconvince."  data-react-helmet="true" />
                <meta name="theme-color" content="#008f68"  data-react-helmet="true" />
           
            </Helmet>
            <div className="content-i"><div className="content-box">

            <div className="row">    
            <div className="big-error-w">
                    <h1>
                    500
                    </h1>
                    <h5>
                    We Are Updating Dashboard. Please check after some time.
                    </h5>
                    <h4>
                    Sorry for Inconvince.
                    </h4>
                    
            </div>
            </div> </div>
            </div></div>
    </Layout>
    )
}
