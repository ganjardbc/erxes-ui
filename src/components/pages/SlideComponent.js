import React, { Component } from 'react'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
      classAppSlidePage: 'app-side-page',
      classAppSlidePageMain: 'a-s-p-main',
      classNavigatorVersion: '',
      classNavigatorEpics: ''
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

  opSlidePageMain = () => {
    if (this.state.classAppSlidePageMain === 'a-s-p-main') { 
      this.setState({
        classAppSlidePageMain: 'a-s-p-main op-a-s-p-main'
      })
    } else {
      this.setState({
        classAppSlidePageMain: 'a-s-p-main'
      })
    }
  }

  opNavigatorVersion = () => {
    // this.opSlidePageMain()
    if (this.state.classNavigatorVersion === '') { 
      this.setState({
        classNavigatorVersion: 'a-s-p-open',
        classNavigatorEpics: '',
        classAppSlidePageMain: 'a-s-p-main op-a-s-p-main'
      })
    } else {
      this.setState({
        classNavigatorVersion: '',
        classNavigatorEpics: '',
        classAppSlidePageMain: 'a-s-p-main'
      })
    }
  }

  opNavigatorEpics = () => {
    // this.opSlidePageMain()
    if (this.state.classNavigatorEpics === '') { 
      this.setState({
        classNavigatorEpics: 'a-s-p-open',
        classNavigatorVersion: '',
        classAppSlidePageMain: 'a-s-p-main op-a-s-p-main'
      })
    } else {
      this.setState({
        classNavigatorEpics: '',
        classNavigatorVersion: '',
        classAppSlidePageMain: 'a-s-p-main'
      })
    }
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
          <div className="txt-site txt-12">
            <span className="txt-site txt-bold txt-main">
              Name of Item
            </span>
          </div>
          <div className="txt-site txt-description txt-bold color-orange">
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

  contentNavigator = (val) => {
    var data = []
    for (var i = 0; i < val; i++) {
      data.push(
        <div className="a-s-p-item-navigator" >
          <div>
            <i className="fa fa-1x fa-plus color-green margin-right-10px" />
            All Issue
          </div>
        </div>
      )
    }
    return data
  }

  render () {
		return (
			<div className="main-content">


        <div className={this.state.classAppSlidePage}>

          <div>
            <div className={this.state.classAppSlidePageMain}>
              <div className="a-s-p-navigator">
                <div className="a-s-p-list">
                  <ul>
                    <li className={this.state.classNavigatorVersion}>
                      <div className="top">
                        <div className="ttl" onClick={this.opNavigatorVersion}>Versions</div>
                        <div className="cl">
                          <button className="btn btn-small-circle btn-grey" onClick={this.opNavigatorVersion}>
                            <i className="fa fa-lw fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="mid">
                        { this.contentNavigator(20) }
                      </div>
                    </li>
                    <li className={this.state.classNavigatorEpics}>
                      <div className="top">
                        <div className="ttl" onClick={this.opNavigatorEpics}>Epics</div>
                        <div className="cl">
                          <button className="btn btn-small-circle btn-grey" onClick={this.opNavigatorEpics}>
                            <i className="fa fa-lw fa-times" />
                          </button>
                        </div>
                      </div>
                      <div className="mid">
                        { this.contentNavigator(2) }
                      </div>
                    </li>
                  </ul>
                </div>
                
              </div>

              <div className="a-s-p-place">
                <div className="a-s-p-top">
                  <div className="grid grid-2x padding-5px">
                    <div className="col-1">
                      <div className="margin-left-5px margin-top-10px">
                        <div className="txt-site txt-top txt-14 txt-main txt-bold">
                          Items
                        </div>
                        <div className="txt-site txt-top txt-10 txt-primary">
                          20 results
                        </div>
                      </div>
                    </div>
                    <div className="col-2 content-right">
                      <button className="btn btn-grey">
                        Linked Pages
                      </button>
                      <button className="btn btn-circle btn-grey">
                        <i className="fa fa-lw fa-search" />
                      </button>
                      <button className="btn btn-circle btn-grey">
                        <i className="fa fa-lw fa-filter" />
                      </button>
                      <button className="btn btn-circle btn-grey">
                        <i className="fa fa-lw fa-ellipsis-h" />
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
            <div className="card small-margin no-radius no-hover border-all">
              <div className="a-s-p-place">
                <div className="a-s-p-top">
                  <div className="grid grid-2x padding-5px">
                    <div className="col-1">
                      <button className="btn btn-circle btn-grey">
                        <i className="fa fa-lw fa-share-alt" />
                      </button>
                      <button className="btn btn-circle btn-grey">
                        <i className="fa fa-lw fa-ellipsis-h" />
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
                  <div className="image image-middle background-blue margin-bottom-5px"></div>
                  <div className="txt-site txt-title txt-line txt-main txt-bold">
                    Name Of Items
                  </div>
                  <div className="txt-site txt-12 txt-line txt-bold color-orange">
                    Rp. 25.000.000
                  </div>
                  <div className="margin-5px txt-site txt-description txt-primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                  <div className="margin-5px">

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