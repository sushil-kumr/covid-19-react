import React from 'react'
import Loader from 'react-loader-spinner'

export default function loader() {
    return (
            <Loader
             type="Oval"
             color="#00BFFF"
             height={100}
             width={100}
             timeout={1000} //3 secs
             style={{position: "relative", top: "300px", textAlign: "center"}} 
            />
    )
}
