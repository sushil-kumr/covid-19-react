import React from 'react'
import Loader from 'react-loader-spinner'

export default function loader() {
    return (
        <div className="content-w">
            <div className="content-i"><div className="content-box">
            <div className="big-error-w">
            <Loader
                     type="Oval"
                     color="#00BFFF"
                     height={50}
                     width={50}
                     timeout={1000} //3 secs 
                     style={{height:"100%",width:"100%", alignContent:"center"}}/>
                    
            </div> </div>
            </div></div>
    )
}
