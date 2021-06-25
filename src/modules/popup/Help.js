import React, { Component } from 'react'

var clContentPopup = 'app-menu-popup app-menu-popup-hide'

var opButton = 'btn btn-circle btn-grey active'
var clButton = 'btn btn-circle btn-grey'

class CardMenu extends Component {
  render () {
    const {data} = this.props 
    return (
      <div style={{width: '100%'}}>
        {data && data.map((dt, i) => {
          return (
            <div className="card-notif" style={{cursor: 'pointer', paddingTop: 5, paddingBottom: 5}} key={i}>
              <div style={{width: 'calc(100% - 30px)'}}>
                <div className="txt-site txt-11 txt-bold txt-main">{ dt.title }</div>
              </div>
              <div style={{width: 30, textAlign: 'center'}}>
                {dt.enableIcon && <i className="txt-site txt-9 txt-primary fa fa-lw fa-external-link-alt" />}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

class Pages extends Component {

  constructor () {
    super()
    this.state = {
    	notifClass: clContentPopup,
      smallNotifClass: clButton,
    }
  }

  // componentDidMount() {
    // var element = document.getElementById('app-help')
    // this.handleClickOutside(element)
  // }

  handleClickOutside(element) {
    // console.log(element)
    const outsideclickListener = event => {
      if (!element.contains(event.target)) {
        element.style.display = 'none'
        removeClickListener()
      }
    }

    const removeClickListener = () => {
      this.setState({smallNotifClass: clButton})
      document.removeEventListener('click', outsideclickListener)
    }

    document.addEventListener('click', outsideclickListener)
  }

  opNotif = () => {
    var element = document.getElementById('app-help')
    element.style.display = 'block'
    this.setState({smallNotifClass: opButton})
    this.handleClickOutside(element)

    // if (this.state.notifClass === clContentPopup) {
    //   this.setState({notifClass: opContentPopup})
    //   this.setState({smallNotifClass: opButton})
    // } else {
    //   this.setState({notifClass: clContentPopup})
    //   this.setState({smallNotifClass: clButton})
    // }
  }

  contentHelp = (length) => {
    var data = []
    for (var i = 0; i < length; ++i) {
      data.push(
        <div className="card-notif" style={{cursor: 'pointer'}} key={i}>
          <div style={{width: 'calc(100% - 30px)'}}>
            <div className="txt-site txt-bold txt-main">Admin2</div>
          </div>
          <div style={{width: 30, textAlign: 'center'}}>
            <i className="txt-site txt-11 txt-grey fa fa-lg fa-link" />
          </div>
        </div>
      )
    }
    return data
  }

  render () {
		return (
      <div>

      	<button 
          onClick={this.opNotif}
          className={this.state.smallNotifClass}>
          <i className="fa fa-lg fa-question-circle txt-site txt-15"></i>
        </button>

        <div
          id="app-help"
          style={{top: "45px"}} 
          className={this.state.notifClass}>
          <div className="txt-site txt-left">
          	<div className="content">
          		<div style={{paddingTop: 15, paddingBottom: 15}} className="border-bottom">
                <CardMenu data={firstMenu} />
              </div>
              <div style={{paddingTop: 15, paddingBottom: 15}} className="border-bottom">
                <CardMenu data={secondMenu} />
              </div>
              <div style={{paddingTop: 15, paddingBottom: 15}}>
                <CardMenu data={thirdMenu} />
              </div>
          	</div>
          </div>
        </div>

      </div>
    )
	}

}

const firstMenu = [
  {title: 'Get Help', enableIcon: true, link: ''},
  {title: 'Help Center', enableIcon: true, link: ''},
  {title: 'System Center', enableIcon: true, link: ''}
]

const secondMenu = [
  {title: 'Upcomming Live Training', enableIcon: true, link: ''},
  {title: 'Training Videos', enableIcon: true, link: ''},
  {title: 'Blog', enableIcon: true, link: ''}
]

const thirdMenu = [
  {title: 'What\' new', enableIcon: false, link: ''},
  {title: 'Give Feedback', enableIcon: false, link: ''}
]

export default Pages