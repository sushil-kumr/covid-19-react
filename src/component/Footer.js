import React from 'react'

export default function Footer() {
    return (
        <div className="invoice-footer" style={{justifyContent: "center"}}>

            <div className="invoice-info" >
            	<a href="https://t.me/joinchat/Lw0dpxlYNwXA9k7TKdhvKw" target="_blank">
            	<button className="btn btn-primary" style={{width: "100%", marginBottom: "10px"}} onClick="">To Collaborate - Join Telegram</button>
               	</a>
               	<br/>
               	<a href="https://github.com/sushil-kumr/covid-19-react" target="_blank">
            	<button className="btn btn-dark" style={{width: "100%", marginBottom: "10px"}} onClick="">To Contribute - Join Github</button>
                </a>
                <br/>
                <b style={{color: "#000", fontWeight: "700"}}> Stay Home Stay Safe | #IndiaFightsCorona #TogetherWeCan</b> 
                <br/> 
            </div>
        </div>
    )
}
