import React, { Component } from 'react'
import Img from 'react-image'

class Pages extends Component {

  constructor () {
    super()
    this.state = {}
  }

  contentCard = (length) => {
    var dt = []
    for (var i = 0; i < length; ++i) {
      dt.push(
        <div style={{width: 'calc(100% / 3)'}}>
          <div className="card df-card">
            <div className="image image-middle background-grey">
              <Img 
                src="https://images.techhive.com/images/article/2017/02/intel_coffee_lake_figurative_image-100708700-large.jpg"
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
            <div className="padding-15px">
              <div className="txt-site txt-16 txt-bold color-green">
                This is title
              </div>
              <div className="txt-site txt-11 txt-thin txt-primary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      )
    }
    return dt
  }

  render () {
		return (
			<div className="main-content">

        <div className="padding-15px">
          
          <div className="grid grid-2x">
            <div className="col-1">
              <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
                Thumbnail Images
              </div>
            </div>
            <div className="col-2 content-right"></div>
          </div>

          <div className="padding-top-15px display-flex wrap">
            { this.contentCard(5) }
          </div>

        </div>

      </div>
    )
	}

}

export default Pages