import React, { Component } from 'react'
import SplitPaneSecond from 'react-split-pane'

class ComplexMenu extends Component {

  constructor (props) {
    super(props)
    this.state = {
      tabMenu: this.props.tabMenu ? this.props.tabMenu : [],
      tabSubMenu: this.props.tabSubMenu ? this.props.tabSubMenu : [],
      tabListMenu: this.props.tabListMenu ? this.props.tabListMenu : [],
      tabContent: this.props.tabContent ? this.props.tabContent : []
    }
  }

  componentDidMount() {
    console.log(this.state.tabContent)
  }

  opContent = (sub, target) => (e) => {
    console.log(target)

    var subMenu = document.getElementsByClassName('n-m-list')
    var content = document.getElementsByClassName('m-s-m-content') 

    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].className = 'n-m-list'
    }

    for (let i = 0; i < content.length; i++) {
      content[i].className = 'm-s-m-content'
    }

    document.getElementById(sub).className = 'n-m-list active'
    document.getElementById(target).className = 'm-s-m-content active'
  }

  opSubMenu = (id, target) => (e) => {
    var menu = document.getElementsByClassName('c-n-icon')
    var subMenu = document.getElementsByClassName('main-slider-submenu')

    for (let i = 0; i < menu.length; i++) {
      menu[i].className = 'c-n-icon'
    }

    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].className = 'main-slider-submenu'
    }

    document.getElementById(id).className = 'c-n-icon active'
    document.getElementById(target).className = 'main-slider-submenu active'
  }

  opNavigator = (data) => {
    let cl = data.status === 'active' ? 'c-n-icon active' : 'c-n-icon'
    return (
      <li key={data.id}
        id={data.id}
        className={cl}
        onClick={this.opSubMenu(data.id, data.target)}>
        <div className="col-1">
          <i className={data.icon} />
        </div>
        <div className="col-2">
          {data.title}
        </div>
      </li>
    )
  }

  render () {
    return (
      <div>
        <SplitPaneSecond
          split="vertical"
          defaultSize={40}
          minSize={40}
          maxSize={250}
          primary="first"
          className="main-slider-menu"
          style={{ height: this.props.height }}>
          <div className="col-1">
            <ul className="vertical-tab" style={{ width: '300px' }}>
              {this.state.tabMenu.map((data, index) => {
                return this.opNavigator(data)
              })}
            </ul>
          </div>

          <div className="col-2 display-flex-normal">

            {this.state.tabSubMenu.map((subMenu, i) => {
              return (
                <div 
                  className={(subMenu.status === 'active') ? "main-slider-submenu active" : "main-slider-submenu"}
                  style={{ height: this.props.height }}
                  id={ subMenu.id }>
                  <div className="title">
                    <h3 className="ttl">
                      { subMenu.title }
                    </h3>
                  </div>

                  <div className="content">
                    {this.state.tabListMenu.map((listMenu, j) => {
                      if (listMenu.for === subMenu.id) {
                        return (
                          <div 
                            className="content-space"
                            id={ listMenu.id }>
                            <div className="normal-menu">
                              <div className="n-m-space">
                                { listMenu.title }
                              </div>

                              <ul className="n-m-menu">
                                {listMenu.menu.map((menus, k) => {
                                  return(
                                    <li>
                                      <div
                                        onClick={this.opContent(menus.id, menus.target)} 
                                        id={ menus.id }
                                        className="n-m-list">
                                        { menus.title }
                                      </div>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              )
            })}

            <div className="padding-10px">
              {this.state.tabContent.map((ctn, j) => {
                return(
                  <div 
                    id={ ctn.id }
                    className="m-s-m-content">
                    { ctn.content }
                  </div>
                )
              })}
            </div>
          </div>
        </SplitPaneSecond>
      </div>
    )
  }

}

export default ComplexMenu