import React, { Component } from 'react'

const data = {}

class Pages extends Component {

  constructor () {
    super()
    this.state = {
    	curentIndex: 0,
    	stepIndex: 200,
    	nextStep: 0,
      ttlComponent: 'tekan salah satu tombol diatas'
    }
  }

  changePage = (ttl) => {
    this.setState({ttlComponent: ttl})
    console.log('>>' + ttl);
  }

  toLeft = () => {
  	var dt = document.getElementById('navigator')
    var width = dt.scrollWidth
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
    var scroll = dt.scrollLeft
  	var nextStep = this.state.nextStep + step

    if (nextStep <= width) {
  	  this.setState({nextStep: nextStep})
  	  dt.scroll(nextStep, 0)
    }

  }

  contentTag = (length) => {
  	var dt = []
  	for (var i = 1; i <= length; ++i) {
      var ttl = 'Navigasi ' + i
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

  render () {

		return (
			<div className="main-content">


				<div className="padding-15px">
					
					<div className="filter-navigator">
						<div className="f-n-col-1">
							<button 
								onClick={ this.toLeft }
								className="btn btn-circle btn-primary border-all">
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
								className="btn btn-circle btn-primary border-all">
								<i className="fa fa-lg fa-angle-right" />
							</button>
						</div>
					</div>

				</div>

        <div className="padding-15px">
          <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              { this.state.ttlComponent }
          </div>
        </div>

      </div>
    )
  }

}

export default Pages