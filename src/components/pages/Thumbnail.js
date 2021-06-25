import React, { Component } from 'react'
import Img from 'react-image'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
      curentIndex: 0,
      stepIndex: 200,
      nextStep: 0
    }
  }

  changePage = (ttl) => {
    this.setState({ttlComponent: ttl})
    console.log('>>' + ttl);
  }

  toLeft = () => {
    var dt = document.getElementById('navigator')
    var step = dt.clientWidth
    var nextStep = this.state.nextStep - step

    if (nextStep >= 0) {
      this.setState({nextStep: nextStep})
      dt.scroll(nextStep, 0)
    }

  }

  toRight = () => {
    var dt = document.getElementById('navigator')
    var width = dt.scrollWidth
    var step = dt.clientWidth
    var nextStep = this.state.nextStep + step

    if (nextStep <= width) {
      this.setState({nextStep: nextStep})
      dt.scroll(nextStep, 0)
    }

  }

  contentTag = (length) => {
    var dt = []
    for (var i = 1; i <= length; ++i) {
      dt.push(
        <li key={i}>
          <input 
            type="radio" 
            name="filter" 
            className="filter-icn"
            id={ "filter-icn-" + i } />
          <label 
            onClick={ this.changePage.bind(this, 'Navigasi Ke ' + i) }
            className="filter-button" 
            htmlFor={ "filter-icn-" + i }>
            Tombol Navigasi { i }
          </label>
        </li>
      )
    }
    return dt
  }

  contentCard = (length) => {
    var dt = []
    for (var i = 0; i < length; ++i) {
      dt.push(
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
              <div className="txt-site txt-title txt-bold txt-main margin-bottom-5px">
                This is title
              </div>
              <div className="txt-site txt-description txt-thin txt-primary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

        <div className="padding-5px">

          <div className="filter-navigator">
            <div className="f-n-col-1">
              <button 
                onClick={ this.toLeft }
                className="btn btn-circle btn-sekunder border-all">
                <i className="fa fa-lg fa-angle-left" />
              </button>
            </div>
            <div className="f-n-col-2">
              <ul id="navigator">
                
                <li key="1">
                  <input 
                    type="radio" 
                    name="filter" 
                    className="filter-icn"
                    id="filter-icn-fresh" />
                  <label 
                    onClick={ this.changePage.bind(this, 'Recently Update') }
                    className="filter-button" 
                    htmlFor="filter-icn-fresh">
                    Recently Updated
                  </label>
                </li>

                { this.contentTag(15) }
              </ul>
            </div>
            <div className="f-n-col-3">
              <button 
                onClick={ this.toRight }
                className="btn btn-circle btn-sekunder border-all">
                <i className="fa fa-lg fa-angle-right" />
              </button>
            </div>
          </div>

        </div>

        <div>

          {/*<div className="grid grid-2x">
            <div className="col-1">
              <div className="txt-site txt-18 txt-bold txt-main margin-left-5px margin-top-5px">
                Thumbnails
              </div>
            </div>
            <div className="col-2 content-right"></div>
          </div>*/}

          <div className="display-flex wrap">
            { this.contentCard(9) }
          </div>

        </div>

      </div>
    )
	}

}

export default Pages