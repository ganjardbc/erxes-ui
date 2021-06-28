import React, { Component } from 'react'
import Img from 'react-image'


class Pages extends Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
		return (
			<div className="main-content">

        <div className="padding-15px">
        	
        	<div className="grid grid-2x margin-bottom-15px">
	          <div className="col-1">
	            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
	              Image Loader
	            </div>
	          </div>
	          <div className="col-2 content-right"></div>
	        </div>

	        <div className="display-flex">

	        	<div className="card df-card">
	        		<div className="image image-full background-grey">
		        		<Img 
			        		src="https://pinchofyum.com/wp-content/uploads/Cashew-Coffee-Recipe.jpg"
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
			       	</div>
			       	<div className="overlay">
			       		<h1>Lorem ipsum dolor</h1>
			       		<p>
			       			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			       		</p>
			       	</div>
	        	</div>

	        	<div className="card df-card">
	        		<div className="image image-full background-grey">
		        		<Img 
			        		src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_iStock-478639870_16x9.jpg"
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
			       	</div>
			       	<div className="overlay left background-green transparant">
				       	<div className="post-center">
				       		<h1>Lorem ipsum dolor</h1>
				       		<p>
				       			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				       		</p>
				       	</div>
			       	</div>
	        	</div>

	        	<div className="card df-card">
	        		<div className="image image-full background-grey">
		        		<Img 
			        		src="https://www.spotangels.com/blog/wp-content/uploads/2019/04/997d-Parking-Residential-On-street.jpg"
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
			       	</div>
			       	<div className="overlay full background-red transparant">
			       		<div className="post-center">
				       		<h1>Lorem ipsum dolor</h1>
				       		<p>
				       			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				       		</p>
				       	</div>
			       	</div>
	        	</div>

	        </div>

        </div>

      </div>

    )
	}

}

export default Pages