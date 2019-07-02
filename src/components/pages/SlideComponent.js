import React, { Component } from 'react'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
      classAppSlidePage: 'app-side-page'
    }
  }

  allSidePage = () => {
    if (this.state.classAppSlidePage === 'app-side-page') { 
      this.setState({classAppSlidePage: 'app-side-page op-app-side'})
    } else {
      this.setState({classAppSlidePage: 'app-side-page'})
    }
  }

  opSidePage = () => {
    this.setState({classAppSlidePage: 'app-side-page op-app-side'})
  }

  clSidePage = () => {
    this.setState({classAppSlidePage: 'app-side-page'})
  }

  contentList = (length) => {
    var data = []
    for (var i = 0; i < length; ++i) {
      data.push(
      <div 
        className="card-item app-pointer border-bottom" 
        key={i} 
        onClick={this.opSidePage}>
        <div className="c-i-col-1">
          <div className="image image-40px background-blue"></div>
        </div>
        <div className="c-i-col-2">
          <div className="txt-site txt-11">
            <span className="txt-site txt-bold txt-main">
              Name of Item
            </span>
          </div>
          <div className="txt-site txt-11 txt-bold color-orange">
            Rp. 25.000.000
          </div>
        </div>
        <div className="c-i-col-3">
          <button className="btn btn-circle btn-grey">
            <i className="fa fa-lg fa-arrow-alt-circle-up color-green" />
          </button>
          <button className="btn btn-circle btn-grey">
            <i className="fa fa-lg fa-arrow-alt-circle-down color-red" />
          </button>
          <button className="btn btn-circle btn-grey">
            <i className="fa fa-lg fa-ellipsis-h" />
          </button>
        </div>
      </div>)
    }
    return data
  }

  render () {
		return (
			<div className="main-content">


        <div className={this.state.classAppSlidePage}>
          
          <div className="a-s-p-main">
            <div className="card no-hover">
              <div className="a-s-p-place">
                <div className="a-s-p-top">
                  <div className="grid grid-2x padding-5px">
                    <div className="col-1">
                      <div className="txt-site txt-top txt-16 txt-main txt-bold margin-left-5px">
                        ITEMS
                      </div>
                    </div>
                    <div className="col-2 content-right">
                      <button className="btn btn-circle btn-grey">
                        <i className="fa fa-lg fa-search" />
                      </button>
                      <button className="btn btn-grey">
                        <i className="fa fa-lw fa-filter" /> FILTER
                      </button>
                    </div>
                  </div>
                </div>
                <div className="a-s-p-mid border-top">
                  { this.contentList(20) }
                </div>
              </div>
            </div>
          </div>

          <div className="a-s-p-side">
            <div className="card no-hover">
              <div className="a-s-p-place">
                <div className="a-s-p-top">
                  <div className="grid grid-2x padding-5px">
                    <div className="col-1">
                      <button className="btn btn-circle btn-grey">
                        <i className="fa fa-lg fa-share-alt" />
                      </button>
                      <button className="btn btn-circle btn-grey">
                        <i className="fa fa-lg fa-ellipsis-h" />
                      </button>
                    </div>
                    <div className="col-2 content-right">
                      <button 
                        onClick={this.clSidePage}
                        className="btn btn-circle btn-grey">
                        <i className="fa fa-lg fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="a-s-p-mid a-s-p-pad">
                  <div className="image image-middle background-blue margin-bottom-15px"></div>
                  <div className="txt-site txt-16 txt-main txt-bold">
                    Name Of Items
                  </div>
                  <div className="txt-site txt-14 txt-bold color-orange">
                    Rp. 25.000.000
                  </div>
                  <div className="margin-15px txt-site txt-11 txt-main">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="margin-15px">

                    <div className="grid grid-2x">
                      <div className="col-1">
                        <span className="txt-site txt-11 txt-main txt-bold">
                          QTY RFS
                        </span>
                      </div>
                      <div className="col-2 content-right">
                        <span className="txt-site txt-11 txt-bold color-green">
                          45
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-2x">
                      <div className="col-1">
                        <span className="txt-site txt-11 txt-main txt-bold">
                          QTY NRFS
                        </span>
                      </div>
                      <div className="col-2 content-right">
                        <span className="txt-site txt-11 txt-bold color-green">
                          15
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-2x">
                      <div className="col-1">
                        <span className="txt-site txt-11 txt-main txt-bold">
                          QTY Allocated
                        </span>
                      </div>
                      <div className="col-2 content-right">
                        <span className="txt-site txt-11 txt-bold color-green">
                          25
                        </span>
                      </div>
                    </div>

                  </div>
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