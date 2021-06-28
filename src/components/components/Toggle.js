import React, { Component } from 'react'

class Pages extends Component {

  constructor () {
    super()
  }

  render(){
  	return(
  		<div className="main-content">

        <div className="padding-15px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Toggle Button
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        <div className="display-flex-normal">

	        <div className="padding-15px">
	          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
	            Rectangle Toggle
	          </div>

	          <label className="switch red">
	          	<input type="checkbox" />
	          	<span className="slider" />
	          </label>

	        </div>

	        <div className="padding-15px">
	          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
	            Round Toggle
	          </div>

	          <label className="switch blue">
	          	<input type="checkbox" />
	          	<span className="slider round" />
	          </label>

	        </div>

	        <div className="padding-15px ">
	          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
	            Radius Toggle
	          </div>

	          <label className="switch green">
	          	<input type="checkbox" />
	          	<span className="slider radius" />
	          </label>

	        </div>
	      </div>

	      <div className="display-flex-normal">

	        <div className="padding-15px ">
	          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
	            Toggle With Status ON OFF
	          </div>

	          <label className="switch red">
	          	<input type="checkbox" />
	          	<span className="slider status-on-off" />
	          </label>
	        </div>

	        <div className="padding-15px">
	          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
	            Toggle With Status YES NO
	          </div>

	          <label className="switch blue">
	          	<input type="checkbox" />
	          	<span className="slider round status-yes-no" />
	          </label>
	        </div>

	        <div className="padding-15px">
	          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
	            Toggle With Status YES NO
	          </div>

	          <label className="switch green">
	          	<input type="checkbox" />
	          	<span className="slider radius status-yes-no" />
	          </label>
	        </div>

	      </div>

      </div>
  	)
  }

}

export default Pages