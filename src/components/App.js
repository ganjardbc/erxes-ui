import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, HashRouter } from 'react-router-dom'

// modules
import ChatPopup from '../modules/popup/Chat'
import CreatePopup from '../modules/popup/Create'
import NotifPopup from '../modules/popup/Notif'
import HelpPopoup from '../modules/popup/Help'
import SearchPopup from '../modules/popup/Search'
import ProfilePopup from '../modules/popup/Profile'

// auth
import Login from './auth/Index'
import AlternativeLogin from './auth/AlternativeLogin'
import CoolLogin from './auth/CoolLogin'

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
import NewSavedReport from './pages/NewSavedReport'
import ShareReport from './pages/ShareReport'
import LineItems from './pages/LineItems'
import VehicleList from './pages/VehicleList'
import FaultList from './pages/FaultList'

// components
import componentsMoveableComponent from './components/moveable/index'
import componentsList from './components/list/Index'
import componentsLiveText from './components/LiveText'
import componentsMenu from './components/Menu'
import componentsMultistepLinear from './components/MultistepLinear'
import componentsMultistepNonLinear from './components/MultistepNonLinear'
import componentsTimeline from './components/Timeline'
import componentsDate from './components/Date'
import componentsDateDropDown from './components/DateDropDown'
import componentsAlert from './components/Alert'
import componentsProgress from './components/Progress'
import componentsToggle from './components/Toggle'
import componentsChat from './components/Chat'
import componentsSlide from './components/Slide'
import componentsKanbanLayout from './components/kanban/Index'
import componentsReactTrello from './components/ReactTrello'
import componentsCoolFilter from './components/CoolFilter'
import componentsMegaPopup from './components/MegaPopup'
import componentsRowRendering from './components/RowRendering'
import componentsThumbnail from './components/Thumbnail'
import componentsProgressImage from './components/ProgressImage'
import componentsInlineEditing from './components/InlineEditing'
import componentsGridLayout from './components/GridLayout'
import componentsFormBuilder from './components/FormBuilder'
import componentsOrganizationChart from './components/OrganizationChart'
import componentsAccordion from './components/Accordion'
import componentsSortableTree from './components/SortableTree'
import componentsCalendarHeatmap from './components/CalendarHeatmap'
import componentsGithubStyle from './components/GithubStyle'
import componentsFlippingCard from './components/FlippingCard'
import componentsBeautifulCard from './components/BeautifulCard'
import componentsCoolPopup from './components/CoolPopup'
import componentsTooltipPopup from './components/TooltipPopup'
import PercentField from './components/PercentField'
import SearchRecommendation from './components/SearchRecommendation'
import PurchaseOrder from './pages/PurchaseOrder'
import SidePopup from './components/SidePopup'
import UserManagement from './pages/UserManagement'
import FuelHistory from './pages/FuelHistory'
import PurchaseOrderInfo from './pages/PurchaseOrderInfo'
import FilterCliclPopup from './components/FilterClickPopup'
import AttachmentFile from './components/AttachmentFile'
import WorkOrder from './pages/WorkOrder'
// import componentsDualListbox from './components/DualListbox'


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
	                    BITOZEN
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
                    <input type="checkbox" name="mainmenu" id="mainmenu-pages" />
                    <label htmlFor="mainmenu-pages" className="list">
                      <span className="app-space-icon">
                        <i className="fa fa-1x fa-bars" />
                      </span>
                      <span className="app-space-text">
                        PAGES 
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
                        { this.createSubMenu('Vehicle List', '/vehicle-list', 'fa fa-lg fa-truck') }
                        { this.createSubMenu('Fault List', '/fault-list', 'fa fa-lg fa-truck') }
                        { this.createSubMenu('User Management', '/user-management', 'fa fa-lg fa-user-cog') }
                        { this.createSubMenu('Fuel History', '/fuel-history', 'fa fa-lg fa-battery-half') }
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
                        { this.createSubMenu('Moveable Component', '/component-moveable-component', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Sortable Tree', '/component-sortable-tree', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Live Text', '/component-live-text', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Moveable List', '/component-list', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Tooltip Popup', '/component-tooltip-popup', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Cool Popup', '/component-cool-popup', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Beautiful Card', '/component-beautiful-card', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Flipping Card', '/component-flipping-card', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Github Style Tabsheet', '/component-github-style', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Calendar Heatmap', '/component-calendar-heatmap', 'far fa-lg fa-circle') }
                        {/* { this.createSubMenu('Dual Listbox', '/component-dual-listbox', 'far fa-lg fa-circle') } */}
                        { this.createSubMenu('Cool Login', '/cool-login', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Alternative Login', '/alternative-login', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Accordion', '/component-accordion', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Organization Chart', '/component-organization-chart', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Form Builder', '/component-form-builder', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Grid Layout', '/component-grid-layout', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Inline Editing', '/component-inline-editing', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Image Loader', '/component-progress-image', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Row Rendering', '/component-row-rendering', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Show Thumbnail', '/component-thumbnail', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Mega Popup', '/component-mega-popup', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Cool Filter', '/component-cool-filter', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Kanban Layout', '/component-kanban-layout', 'far fa-lg fa-circle') }
                        { this.createSubMenu('React Trello', '/component-react-trello', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Slide Component', '/component-slide', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Chat Room', '/component-chat', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Toggle Button', '/component-toggle', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Percent Button', '/component-percent', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Progress Bar', '/component-progress', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Sweet Alert', '/component-alert', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Date Picker', '/component-date', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Date Drop Down', '/component-date-drop-down', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Menus', '/menus', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Multistep Linear', '/component-multistep-linear', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Multistep Non Linear', '/component-multistep-nonlinear', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Timeline', '/component-timeline', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Search', '/component-search', 'far fa-lg fa-circle') }
                        { this.createSubMenu('New Saved Report', '/new-saved-report', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Share Report', '/share-report', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Line Items', '/line-items', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Side Popup', '/component-side-popup', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Purchase Order', '/purchase-order', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Purchase Order Info', '/purchase-order-info', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Work Order', '/work-order', 'far fa-lg fa-circle') }
                        { this.createSubMenu('Filter Click Popup', '/component-filter-click-popup', 'far fa-lg fa-circle') }
                        { this.createSubMenu('AttachmentFile', '/component-attachment-file', 'far fa-lg fa-circle') }
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
	                  <div className="panel-button app-desktop" style={{marginLeft: "5px"}}>
	                    <HelpPopoup />
	                  </div>
                    <div className="panel-button app-desktop" style={{marginLeft: "5px"}}>
	                    <ChatPopup />
	                  </div>
	                  <div className="panel-button app-desktop" style={{marginLeft: "5px"}}>
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
                <Route exact path="/new-saved-report" component={ NewSavedReport } />
                <Route exact path="/share-report" component={ ShareReport } />
                <Route exact path="/line-items" component={ LineItems } />
                <Route exact path="/purchase-order" component={ PurchaseOrder } />
                <Route exact path="/purchase-order-info" component={ PurchaseOrderInfo } />
                <Route exact path="/work-order" component={ WorkOrder } />
                <Route exact path="/vehicle-list" component={ VehicleList } />
                <Route exact path="/fault-list" component={FaultList}></Route>
                <Route exact path="/user-management" component={ UserManagement } />
                <Route exact path="/fuel-history" component={ FuelHistory } />

                {/* components */}
                <Route exact path="/component-moveable-component" component={ componentsMoveableComponent }></Route>
                <Route exact path="/component-menu" component={ componentsMenu }></Route>
                <Route exact path="/component-live-text" component={ componentsLiveText }></Route>
                <Route exact path="/component-list" component={ componentsList }></Route>
                <Route exact path="/component-multistep-linear" component={ componentsMultistepLinear }></Route>
                <Route exact path="/component-multistep-nonlinear" component={ componentsMultistepNonLinear }></Route>
                <Route exact path="/component-timeline" component={ componentsTimeline }></Route>
                <Route exact path="/component-date" component={ componentsDate }></Route>
                <Route exact path="/component-date-drop-down" component={ componentsDateDropDown }></Route>
                <Route exact path="/component-alert" component={ componentsAlert }></Route>
                <Route exact path="/component-progress" component={ componentsProgress }></Route>
                <Route exact path="/component-toggle" component={ componentsToggle }></Route>
                <Route exact path="/component-percent" component={ PercentField }></Route>
                <Route exact path="/component-chat" component={ componentsChat }></Route>
                <Route exact path="/component-slide" component={ componentsSlide }></Route>
                <Route exact path="/component-kanban-layout" component={ componentsKanbanLayout }></Route>
                <Route exact path="/component-react-trello" component={ componentsReactTrello }></Route>
                <Route exact path="/component-cool-filter" component={ componentsCoolFilter }></Route>
                <Route exact path="/component-mega-popup" component={ componentsMegaPopup }></Route>
                <Route exact path="/component-row-rendering" component={ componentsRowRendering }></Route>
                <Route exact path="/component-thumbnail" component={ componentsThumbnail }></Route>
                <Route exact path="/component-progress-image" component={ componentsProgressImage }></Route>
                <Route exact path="/component-inline-editing" component={ componentsInlineEditing }></Route>
                <Route exact path="/component-grid-layout" component={ componentsGridLayout }></Route>
                <Route exact path="/component-form-builder" component={ componentsFormBuilder }></Route>
                <Route exact path="/component-organization-chart" component={ componentsOrganizationChart }></Route>
                <Route exact path="/component-accordion" component={ componentsAccordion }></Route>
                <Route exact path="/component-sortable-tree" component={ componentsSortableTree }></Route>
                <Route exact path="/component-calendar-heatmap" component={ componentsCalendarHeatmap }></Route>
                <Route exact path="/component-github-style" component={ componentsGithubStyle }></Route>
                <Route exact path="/component-flipping-card" component={ componentsFlippingCard }></Route>
                <Route exact path="/component-beautiful-card" component={ componentsBeautifulCard }></Route>
                <Route exact path="/component-filter-click-popup" component={ FilterCliclPopup }></Route>
                <Route exact path="/component-attachment-file" component={ AttachmentFile }></Route>
                <Route exact path="/component-cool-popup" component={ componentsCoolPopup }></Route>
                <Route exact path="/component-tooltip-popup" component={ componentsTooltipPopup }></Route>
                <Route exact path="/component-search" component={ SearchRecommendation }></Route>
                <Route exact path="/component-side-popup" component={ SidePopup }></Route>
                {/* <Route exact path="/component-dual-listbox" component={ componentsDualListbox }></Route> */}

      				</div>
      			</div>
      			
      		</div>
      		
      		{/* Single Page */}
      		<div className="app">
      			<Route exact path="/" component={ Login } />
            
            <Route exact path="/alternative-login" component={ AlternativeLogin }></Route>
            <Route exact path="/cool-login" component={ CoolLogin }></Route>
      		</div>

      	</div>
      </HashRouter>
    )

  }

}

export default App
