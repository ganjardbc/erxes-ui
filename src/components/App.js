import React, { Component } from 'react'
import { BrowserRouter as Switch, Router, Route, NavLink, HashRouter } from 'react-router-dom'

// modules
import ChatPopup from '../modules/popup/Chat'
import CreatePopup from '../modules/popup/Create'
import NotifPopup from '../modules/popup/Notif'
import SearchPopup from '../modules/popup/Search'
import ProfilePopup from '../modules/popup/Profile'

// auth
import Login from './auth/Index'

// home
// import Home from './home/Index'
import Dashboard from './dashboard/Index'

// pages
import KanbanLayout from './pages/KanbanLayout'
import SlideComponent from './pages/SlideComponent'
import FormBuilder from './pages/FormBuilder'
import FormStatic from './pages/FormStatic'
import ProgressImage from './pages/ProgressImage'
import Thumbnail from './pages/Thumbnail'
import Table from './pages/Table'
import DatePicker from './pages/DatePicker'
import Menus from './pages/Menus'


class App extends Component {

  constructor () {

    super()
    this.state = {
    	appClass: 'app',
      appButtonClass: 'fa fa-lg fa-times',
    }

	}

	opSlide = () => {
    if (this.state.appClass === 'app') { 
      this.setState({appClass: 'app app-side-big-icon'})
      this.setState({appButtonClass: 'fa fa-lg fa-bars'})
    } else {
      this.setState({appClass: 'app'})
      this.setState({appButtonClass: 'fa fa-lg fa-times'})
    }
  }

  createList = () => {
    let dt = []

    for (let i = 0; i < 10; i++) {
      dt.push(
        <NavLink to={'/components/'+i}>
          <li className="content">
              <div className="list">
                <div className="icn">
                  <i className="fa fa-lg fa-th"></i>
                </div>
                <div className="ttl">
                  Components { i }
                </div>
              </div>
          </li>
        </NavLink>
      )
    }

    return dt
  }

  createSubMenu = (val, link, icon) => {
    return <NavLink to={ link }>
      <li className="content" title={val}>
        <div className="list">
          <div className="icn">
            <i className={icon}></i>
          </div>
          <div className="ttl">
            { val }
          </div>
          <div className="icn icn-right txt-site txt-right txt-12"></div>
        </div>
      </li>
    </NavLink>
  }

	render() {

    return (
    	<HashRouter history={ Router.browserHistory }>
      	<div>

      		{/* Multiple Page */}
      		<div className={this.state.appClass}>

      			<div className="app-slide">
      				<div className="slide-content background-blue">
      					
      					<div className="app-title">
	                <div className="col-1">
	                  <h1 className="txt-site txt-white txt-upp txt-18 txt-bold post-center margin-left-10px">
	                    ERXES
	                  </h1>
	                </div>
	                <div className="col-2">
	                  <button 
	                    className="btn btn-blue btn-circle" 
	                    onClick={ this.opSlide }>
	                    <i className={ this.state.appButtonClass } />
	                  </button>
	                </div>
	              </div>

                <div className="slide-list change-scrollbar">

                  {/* <div className="app-space">
                    <input type="checkbox" checked name="mainmenu" id="mainmenu-navigation" />
                    <label htmlFor="mainmenu-navigation" className="list">
                      <span className="app-space-icon">
                        <i className="fa fa-1x fa-home" />
                      </span>
                      <span className="app-space-text">
                        NAVIGATION
                      </span>
                      <span className="app-space-sign"></span>
                    </label>
                    <div className="app-space-content">
                      <div className="app-menu">
                        { this.createSubMenu('Dashboard', '/home', 'fa fa-lg fa-home') }
                      </div>
                    </div>
                  </div> */}
                  <div className="app-menu">
                    { this.createSubMenu('Dashboard', '/home', 'fa fa-lg fa-home') }
                  </div>

                  <div className="app-space">
                    <input type="checkbox" name="mainmenu" id="mainmenu-submenu" />
                    <label htmlFor="mainmenu-submenu" className="list">
                      <span className="app-space-icon">
                        <i className="fa fa-1x fa-hashtag" />
                      </span>
                      <span className="app-space-text">
                        SUBMENU
                      </span>
                      <span className="app-space-sign"></span>
                    </label>
                    <div className="app-space-content">
                      <div className="app-menu">
                        <li className="content">

                          <div className="submenu">
                            <input type="checkbox" id="submenu-1" />
                            <label for="submenu-1" className="list">
                              <div className="icn">
                                <i className="fa fa-lg fa-hashtag" />
                              </div>
                              <div className="ttl">
                                Main Menu
                              </div>
                              <div className="submenu-sign"></div>
                            </label>
                            <div className="submenu-content">
                              { this.createSubMenu('Sub Menu', '/', 'far fa-lw fa-circle') }
                              { this.createSubMenu('Sub Menu', '/', 'far fa-lw fa-circle') }
                              { this.createSubMenu('Sub Menu', '/', 'far fa-lw fa-circle') }
                            </div>
                          </div>

                          <div className="submenu">
                            <input type="checkbox" id="submenu-2" />
                            <label for="submenu-2" className="list">
                              <div className="icn">
                                <i className="fa fa-lg fa-hashtag" />
                              </div>
                              <div className="ttl">
                                Main Menu
                              </div>
                              <div className="submenu-sign"></div>
                            </label>
                            <div className="submenu-content">
                              { this.createSubMenu('Sub Menu', '/', 'far fa-lw fa-circle') }
                              { this.createSubMenu('Sub Menu', '/', 'far fa-lw fa-circle') }
                            </div>
                          </div>

                        </li>
                      </div>
                    </div>
                  </div>

                  <div className="app-space">
                    <input type="checkbox" name="mainmenu" id="mainmenu-components" />
                    <label htmlFor="mainmenu-components" className="list">
                      <span className="app-space-icon">
                        <i className="fa fa-1x fa-bars" />
                      </span>
                      <span className="app-space-text">
                        COMPONENTS
                      </span>
                      <span className="app-space-sign"></span>
                    </label>
                    <div className="app-space-content">
                      <div className="app-menu">
                        { this.createSubMenu('Menus', '/menus', 'fa fa-lg fa-ellipsis-h') }
                        { this.createSubMenu('Form Static', '/form-static', 'far fa-lg fa-square') }
                        { this.createSubMenu('Form Builder', '/form-builder', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Kanban Layout', '/kanban-layout', 'fa fa-lg fa-anchor') }
                        { this.createSubMenu('Slide Component', '/slide-component', 'fa fa-lg fa-list') }
                        { this.createSubMenu('Thumbnail', '/thumbnail', 'fa fa-lg fa-camera') }
                        { this.createSubMenu('Progress Image', '/progress-image', 'fa fa-lg fa-images') }
                        { this.createSubMenu('Smart Table', '/table', 'fa fa-lg fa-table') }
                        { this.createSubMenu('Date Picker', '/date-picker', 'fa fa-lg fa-calendar-alt') }
                      </div>
                    </div>
                  </div>

                </div>

      				</div>
      			</div>

      			<div className="app-main">

      				<div className="app-panel">
              	<div className="panel-content">

              		<div className="col-1">
                    <SearchPopup />
	                </div>

	                <div className="col-2 content-right">
	                  <div className="panel-button app-desktop">
	                    <CreatePopup />
	                  </div>
	                  <div className="panel-button app-desktop" style={{marginLeft: "10px"}}>
	                    <ChatPopup />
	                  </div>
	                  <div className="panel-button app-desktop" style={{marginLeft: "10px"}}>
	                    <NotifPopup />
	                  </div>
	                  <div className="panel-button">
	                    <ProfilePopup />
	                  </div>
	                </div>

              	</div>
              </div>

      				<div className="app-place">
      					
      					<Route exact path="/home" component={ Dashboard } />
                <Route exact path="/kanban-layout" component={ KanbanLayout } />
                <Route exact path="/slide-component" component={ SlideComponent } />
                <Route exact path="/form-builder" component={ FormBuilder } />
                <Route exact path="/form-static" component={ FormStatic } />
                <Route exact path="/progress-image" component={ ProgressImage } />
                <Route exact path="/thumbnail" component={ Thumbnail } />
                <Route exact path="/table" component={ Table } />
                <Route exact path="/date-picker" component={ DatePicker } />
                <Route exact path="/menus" component={ Menus } />

      				</div>
      			</div>
      			
      		</div>
      		
      		{/* Single Page */}
      		<div className="app">
      			<Route exact path="/" component={ Login } />
      		</div>

      	</div>
      </HashRouter>
    )

  }

}

export default App
