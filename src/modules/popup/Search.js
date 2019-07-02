import React, { Component } from 'react'

var opContentPopup = 'app-menu-popup'
var clContentPopup = 'app-menu-popup app-menu-popup-hide'

var opButtonBig = 'btn btn-green active'
var clButtonBig = 'btn btn-grey'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
    	searchClass: clContentPopup,
      smallSearchClass: clButtonBig,
    	valSearch: '',
    }
  }

  opSearch = (event) => {
    event.preventDefault()

    if (this.state.valSearch.length > 0) { 
      this.setState({searchClass: opContentPopup})
    } else {
      this.setState({searchClass: clContentPopup})
    }
  }

  clSearch = () => {
    this.setState({searchClass: clContentPopup})
    // this.setState({valSearch: ''})
  }

  keyUpSearch = (event) => {
    var dt = event.target.value;
    this.setState({valSearch: dt})

    if (dt.length > 0) { 
      this.setState({searchClass: opContentPopup})
    } else {
      this.setState({searchClass: clContentPopup})
    }
  }


  contentSearch = (length) => {
    var data = []
    for (var i = 0; i < length; ++i) {
      data.push(
      <div className="card-notif" key={i}>
        <div className="c-n-col-1">
          <div className="image image-40px background-blue"></div>
        </div>
        <div className="c-n-col-2">
          <div className="txt-site txt-description txt-bold txt-main">
            Name of Item
          </div>
          <div className="txt-site txt-description txt-bold color-orange">
            Rp. 25.000.000
          </div>
        </div>
      </div>)
    }
    return data
  }

  render () {
		return (
      <div>
      	
      	<form onSubmit={this.opSearch}>
          <div className="input-group input-grey input-border">
            <input 
              className="txt txt-transparant txt-no-radius txt-no-shadow" 
              name="search" 
              placeholder="Search.." 
              onChange={this.keyUpSearch}
              value={this.state.valSearch}
              required />
            <button 
              type="submit" 
              className="btn btn-all btn-no-radius btn-grey">
              <i className="fa fa-lg fa-search" />
            </button>
          </div>
        </form>

        <div
          style={{top: "45px"}} 
          className={this.state.searchClass}>

          <div className="padding-5px grid grid-2x border-bottom">
            <div className="col-1">
              <div className="padding-left-10px txt-site txt-main txt-11 txt-bold post-top">
              	Search
              </div>
            </div>
            <div className="col-2 content-right">
              <button 
                type="button" 
                className="btn btn-grey btn-circle" 
                onClick={this.clSearch}>
                <i className="fa fa-lg fa-times" />
              </button>
            </div>
          </div>
                      
          <div className="content">
          	{ this.contentSearch(8) }
          </div>

        </div>

      </div>
    )
	}

}

export default Pages