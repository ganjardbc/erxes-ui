import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import Img from 'react-image'
import Image from '../../../src/assets/img/bg-login.png'

class Pages extends Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
		return (
			<div className="main-content">
        <div className="padding-15px margin-top-15px">
        	
        	<h2 className="txt-site txt-main">Live Text</h2>

        </div>

        <div>

        	<div className="display-flex-normal mobile">
        		
        		<div 
        			data-tip="Tooltip for image 1" 
							data-type="light" 
							data-border="true"
        			className="card no-overflow df-card">
	        		<div className="image image-full image-radius background-grey">

		        		<Img 
			        		src={Image}
			        		className="img"
			        		loader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Loading Image</span>
			        			</div>
			        		}
			        		unloader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Try Again</span>
			        			</div>
			        		} />

			        	<div className="bubble red top-right-fadding">
			        		12
			        	</div>

			        	<div className="bubble green top-left-fadding">
			        		9
			        	</div>

			        </div>
			      </div>

			      <div 
			      	data-tip="Tooltip for image 2" 
							data-type="light" 
							data-border="true"
			      	className="card no-overflow df-card">
	        		<div className="image image-full image-radius background-grey">

			        	<Img 
			        		src={Image}
			        		className="img"
			        		loader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Loading Image</span>
			        			</div>
			        		}
			        		unloader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Try Again</span>
			        			</div>
			        		} />

			        	<div className="bubble green top-right-fadding">
			        		12
			        	</div>

			        </div>
			      </div>

			      <div 
			      	data-tip="Tooltip for image 3" 
							data-type="light" 
							data-border="true"
			      	className="card no-overflow df-card">
	        		<div className="image image-full image-radius background-grey">

			        	<Img 
			        		src={Image}
			        		className="img"
			        		loader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Loading Image</span>
			        			</div>
			        		}
			        		unloader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Try Again</span>
			        			</div>
			        		} />

			        	<div className="bubble orange top-right-fadding">
			        		12
			        	</div>

			        </div>
			      </div>

			      <div 
			      	data-tip="Tooltip for image 4" 
							data-type="light" 
							data-border="true"
			      	className="card no-overflow df-card">
	        		<div className="image image-full image-radius background-grey">

			        	<Img 
			        		src={Image}
			        		className="img"
			        		loader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Loading Image</span>
			        			</div>
			        		}
			        		unloader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Try Again</span>
			        			</div>
			        		} />

			        	<div className="bubble pos top-right-fadding">
			        		12
			        	</div>

			       	</div>
	        	</div>

        	</div>

        	<div className="width width-500px">
        		<div 
        			data-tip="Tooltip for big image" 
							data-type="light" 
							data-border="true"
        			className="card no-overflow df-card">
	        		<div className="image image-full image-radius background-grey">

		        		<Img 
			        		src={Image}
			        		className="img"
			        		loader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Loading Image</span>
			        			</div>
			        		}
			        		unloader={
			        			<div className="icn">
			        				<i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" /> <span className="txt-site txt-primary txt-thin">Try Again</span>
			        			</div>
			        		} />

			        	<div className="bubble position-32-17 red">
			        		12
			        	</div>

			        	<div className="bubble position-10-67 red">
			        		19
			        	</div>

			        	<div className="bubble position-32-80 orange">
			        		55
			        	</div>

			        	<div className="bubble position-60-80 red">
			        		24
			        	</div>

			        	<div className="bubble position-43-10 green">
			        		37
			        	</div>

			        	<div className="bubble position-25-40 red">
			        		22
			        	</div>

			        	<div className="bubble position-80-27 pos">
			        		67
			        	</div>

			        </div>
			      </div>
        	</div>

        	<ReactTooltip />

        </div>
      </div>
    )
	}

}

export default Pages