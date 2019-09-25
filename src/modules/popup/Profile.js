import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

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
    // console.log(element)
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
            {/*<div className="ttl">
              <div className="txt-site txt-main txt-12 txt-cap">
              	Admin
              </div>
            </div>*/}
          </div>
        </div>

        <div
          style={{ top: "45px", width: "200px" }}
          id="app-profile"
          className={this.state.profileClass}>
          <ul>
            <NavLink to="/">
              <li>
                <i className="icn fa fa-lw fa-user"></i>
                Profile
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <i className="icn fa fa-lw fa-power-off"></i>
                Logout
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    )
  }

}


export default Pages