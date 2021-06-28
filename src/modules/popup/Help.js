import React, { Component } from 'react'
import CardMenu from '../CardMenu'

var clContentPopup = 'app-menu-popup app-menu-popup-hide'

var opButton = 'btn btn-circle btn-grey active'
var clButton = 'btn btn-circle btn-grey'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
    	notifClass: clContentPopup,
      smallNotifClass: clButton,
    }
  }

  handleClickOutside(element) {
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
          <i className="far fa-lg fa-question-circle txt-site txt-15"></i>
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