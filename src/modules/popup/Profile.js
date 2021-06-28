import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import CardMenu from '../CardMenu'

var opActivePopup = 'app-small-profile active'
var clActivePopup = 'app-small-profile'

var clContentPopup = 'app-menu-popup app-menu-popup-hide'

class Pages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      smallProfileClass: clActivePopup,
      profileClass: clContentPopup
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
      this.setState({smallProfileClass: clActivePopup})
      document.removeEventListener('click', outsideclickListener)
    }

    document.addEventListener('click', outsideclickListener)
  }

  opProfile = () => {
    var element = document.getElementById('app-profile')
    element.style.display = 'block'
    this.setState({smallProfileClass: opActivePopup})
    this.handleClickOutside(element)
  }

  logout() {
    this.props.authLogout()
  }

  render() {
    return (
      <div>
        <div
          onClick={this.opProfile}
          className={this.state.smallProfileClass}
          style={{ float: 'right' }}>
          <div className="asp-col-1">
            <div className="image image-circle image-30px background-blue">
              <img width="100%" height="100%" src={this.state.imageUrl} alt=""/>
            </div>
          </div>
          <div className="asp-col-2">
            <div className="ttl">
              <i className="fa fa-lw fa-angle-down txt-site txt-primary txt-16" />
            </div>
          </div>
        </div>

        <div
          style={{ top: "45px", width: "250px" }}
          id="app-profile"
          className={this.state.profileClass}>
          <div className="content">
            <div style={{paddingTop: 20}}>
              <div className="image image-80px image-center background-blue"></div>
              <div className="txt-site txt-main txt-11 txt-center">City of FleetIo</div>
            </div>
          	<div className="txt-site txt-left">
          		<div style={{paddingTop: 15, paddingBottom: 15}} className="border-bottom">
                <CardMenu data={firstMenu} />
              </div>
              <div style={{paddingTop: 15, paddingBottom: 15}}>
                <CardMenu data={secondMenu} />
              </div>
          	</div>
          </div>
        </div>
      </div>
    )
  }

}

const firstMenu = [
  {title: 'Account Settings', enableIcon: false, link: ''},
  {title: 'Billing & Subscriptions', enableIcon: false, link: ''},
  {title: 'User Management', enableIcon: false, link: ''},
  {title: 'Switch Accounts', enableIcon: false, link: ''}
]

const secondMenu = [
  {title: 'User Settings', enableIcon: false, link: ''},
  {title: 'Notification Preference', enableIcon: false, link: ''},
  {title: 'Edit Login & Password', enableIcon: false, link: ''},
  {title: 'Logout', enableIcon: true, icon: 'fa fa-lw fa-power-off', link: ''}
]


export default Pages