import React, { Component } from 'react'
import ComplexMenu from './popup/Menu'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
      // for menu tab
      tabMenu: [
        { 
          id: 'tabmenu-1', 
          target: 'tabsubmenu-1', 
          status: 'active', 
          title: 'Recruitment', 
          icon: 'fa fa-lw fa-cogs' 
        },
        { 
          id: 'tabmenu-2', 
          target: 'tabsubmenu-2', 
          status: '', 
          title: 'Personel', 
          icon: 'fa fa-lw fa-users' 
        },
        { 
          id: 'tabmenu-3', 
          target: 'tabsubmenu-3', 
          status: '', 
          title: 'Compensation', 
          icon: 'fa fa-lw fa-database' 
        },
        { 
          id: 'tabmenu-4', 
          target: 'tabsubmenu-4', 
          status: '', 
          title: 'Corporate Time', 
          icon: 'fa fa-lw fa-calendar' 
        },
      ],

      // for tab sub menu
      tabSubMenu: [
        { 
          id: 'tabsubmenu-1', 
          target: 'tablistmenu-1', 
          status: 'active', 
          title: 'Recruitment'
        },
        { 
          id: 'tabsubmenu-2', 
          target: 'tablistmenu-2', 
          status: '', 
          title: 'Personel'
        },
        { 
          id: 'tabsubmenu-3', 
          target: 'tablistmenu-3', 
          status: '', 
          title: 'Compensation'
        },
        { 
          id: 'tabsubmenu-4', 
          target: 'tablistmenu-4', 
          status: '', 
          title: 'Corporate Time'
        },
      ],

      // for sub menu list
      tabListMenu: [
        // for tab sub menu 1
        {
          id: 'tablistmenu-1',
          title: 'Shops',
          for: 'tabsubmenu-1',
          menu: [
            {
              id: 'tablistmenucontent-1-1',
              title: 'Example menu',
              target: 'tabcontent-1'
            }
          ]
        },
        {
          id: 'tablistmenu-2',
          title: 'Users',
          for: 'tabsubmenu-1',
          menu: [
            {
              id: 'tablistmenucontent-2-1',
              title: 'Example shops',
              target: 'tabcontent-2'
            },
            {
              id: 'tablistmenucontent-2-2',
              title: 'Configurations',
              target: 'tabcontent-3'
            }
          ]
        },

        // for tab sub menu 2
        {
          id: 'tablistmenu-3',
          title: 'Shops',
          for: 'tabsubmenu-2',
          menu: [
            {
              id: 'tablistmenucontent-3-1',
              title: 'Example menu',
              target: 'tabcontent-2'
            },
            {
              id: 'tablistmenucontent-3-2',
              title: 'CORS',
              target: 'tabcontent-4'
            }
          ]
        },
        {
          id: 'tablistmenu-4',
          title: 'Users',
          for: 'tabsubmenu-2',
          menu: [
            {
              id: 'tablistmenucontent-4-1',
              title: 'Example shops',
              target: 'tabcontent-1'
            },
            {
              id: 'tablistmenucontent-4-2',
              title: 'Configurations',
              target: 'tabcontent-4'
            }
          ]
        }
      ],

      // for content
      tabContent: [
        {
          id: 'tabcontent-1',
          content: (
            <h1>Content 1</h1>
          )
        },
        {
          id: 'tabcontent-2',
          content: (
            <h1>Content 2</h1>
          )
        },
        {
          id: 'tabcontent-3',
          content: (
            <h1>Content 3</h1>
          )
        },
        {
          id: 'tabcontent-4',
          content: (
            <h1>Content 4</h1>
          )
        }
      ]
    }
  }

  render () {
    return (
        <div className="main-content">
            <div style={{position: 'relative', top: '-35px'}}>
                {/* height disesuaikan yah */}
                <ComplexMenu 
                    height='calc(100vh - 100px)'
                    tabMenu={this.state.tabMenu}
                    tabSubMenu={this.state.tabSubMenu}
                    tabListMenu={this.state.tabListMenu}
                    tabContent={this.state.tabContent}
                />
            </div>
        </div>
    )
  }

}

export default Pages