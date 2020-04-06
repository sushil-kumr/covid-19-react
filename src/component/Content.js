import React from 'react'

export default function Content(props) {
    return (
        <div className="col-lg-12">
        <div className="alert alert-warning borderless">
          <h6 className="alert-heading font-weight-bold">
              {props.title}
          </h6>
          
            {props.desc}
         
        </div>
      </div>
    )
}
