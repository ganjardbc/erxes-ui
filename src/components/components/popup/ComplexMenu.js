import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, HashRouter } from "react-router-dom"

class Pages extends Component {
    constructor () {
        super()
        this.state = {
        	complexMenu: 'complex-menu',
        	complexList: false,
        	complexContent: false,
        	lengthContent: 0,
        	placeSubMenu: '',
        	tabMenu: [
		        { 
		        	id: 'tabmenu-1', 
		        	status: 'active', 
		        	title: 'Recruitment', 
		        	subtitle: 'click for more details',
		        	icon: 'fa fa-lw fa-cogs' 
		        },
		        { 
		        	id: 'tabmenu-2', 
		        	status: '', 
		        	title: 'Personel', 
		        	subtitle: 'click for more details',
		        	icon: 'fa fa-lw fa-users' 
		        },
		        { 
		        	id: 'tabmenu-3', 
		        	status: '', 
		        	title: 'Compensation', 
		        	subtitle: 'click for more details',
		        	icon: 'fa fa-lw fa-database' 
		        },
		        { 
		        	id: 'tabmenu-4', 
		        	status: '', 
		        	title: 'Corporate Time', 
		        	subtitle: 'click for more details',
		        	icon: 'fa fa-lw fa-calendar' 
		        },
		    ],
		    tabSubMenu: [
		    	// tab menu 1
		    	{
		    		id: 'tabsubmenu-1-1',
		    		target: 'tabmenu-1',
		    		link: '',
		    		title: 'Configurations',
		    		icon: 'fa fa-lw fa-cogs'
		    	},
		    	{
		    		id: 'tabsubmenu-1-2',
		    		target: 'tabmenu-1',
		    		link: '',
		    		title: 'Groups',
		    		icon: 'fa fa-lw fa-users'
		    	},
		    	{
		    		id: 'tabsubmenu-1-3',
		    		target: 'tabmenu-1',
		    		link: '',
		    		title: 'Pay Slip',
		    		icon: 'fa fa-lw fa-database'
		    	},

		    	// tab menu 2
		    	{
		    		id: 'tabsubmenu-2-1',
		    		target: 'tabmenu-2',
		    		link: '',
		    		title: 'CORS',
		    		icon: 'fa fa-lw fa-cogs'
		    	},
		    	{
		    		id: 'tabsubmenu-2-2',
		    		target: 'tabmenu-2',
		    		link: '',
		    		title: 'Database',
		    		icon: 'fa fa-lw fa-database'
		    	},

		    	// tab menu 2
		    	{
		    		id: 'tabsubmenu-3-1',
		    		target: 'tabmenu-3',
		    		link: '/home',
		    		title: 'Home',
		    		icon: 'fa fa-lw fa-home'
		    	},
		    ]
        }
    }

    opComplexMenu = () => {
    	if (this.state.complexMenu === 'complex-menu') { 
    		this.setState({
	    		complexMenu: 'complex-menu active',
	    		complexList: true
	    	})
    	} else {
    		this.setState({
	    		complexMenu: 'complex-menu',
	    		complexList: false,
	    		complexContent: false
	    	})
    	}
    }

    clComplexMenu = () => {
    	this.setState({
    		complexList: false
    	})
    }

    opComplexContent = () => {
    	this.setState({
    		complexContent: true
    	})
    }

    clComplexContent = () => {
    	this.setState({
    		complexContent: false
    	})
    }

    contentComponent = (idTarget) => (e) => {
    	e.preventDefault()

    	var data = this.state.tabSubMenu
    	var component = []

    	for (var i = 0; i < data.length; ++i) {
    		if (data[i].target === idTarget) { 
    			component.push(
	    			<NavLink 
		    			to={data[i].link}
		    			key={data[i].id} 
		    			onClick={this.clComplexMenu}>
		    			<div 
		    				className='complex-menu'>
				        	<div className="complex-icon">
				        		<i className={ data[i].icon } />
				        	</div>
				        	<div className="complex-title">
				        		{ data[i].title }
				        	</div>
				        	<div className="complex-sign"></div>
				        </div>
				    </NavLink>
	    		)
    		}
    	}

    	this.setState({
    		placeSubMenu: component
    	})

    	this.opComplexContent()

    	// console.log(component)
    }

    contentList = (id, icon, title, subtitle) => {
	   return (
	   		<div 
	    		onClick={this.contentComponent(id)}
	    		style={{cursor: 'pointer'}}
	    		className="card-notif" 
	    		key={id}>
	    		<div className="c-n-col-1">
	    			<div className="image image-circle image-40px background-dark-grey">
	    				<div className="icn txt-site txt-12 txt-center color-blue">
		    				<i className={icon} />
		    			</div>
	    			</div>
	    		</div>
	    		<div className="c-n-col-2">
	    			<div className="txt-site txt-11">
		    			<div className="txt-site txt-bold txt-main">
		    				{ title }
		    			</div>
			        </div>
			        <div className="txt-site txt-9 txt-thin txt-primary">
			        	{ subtitle }
			        </div>
				</div>
			</div>
		)
	}

    render () {
        return (
        <HashRouter history={ Router.browserHistory }>
            <div className="complex">
                <div 
                	className={this.state.complexMenu}
                	onClick={this.opComplexMenu}>
                	<div className="complex-icon">
                		<i className="fa fa-lg fa-bars" />
                	</div>
                	<div className="complex-title">
                		Complex Menu
                	</div>
                	<div className="complex-sign"></div>
                </div>

                { (this.state.complexContent) 
                	? <div className="complex-content">
                		{ this.state.placeSubMenu }
                	</div>
                	: null 
                }

                { (this.state.complexList) 
                	? <div className="complex-list">
                		{this.state.tabMenu.map((data, index) => {
                			return(
                				this.contentList(data.id, data.icon, data.title, data.subtitle)
                			)
                		})}
                	</div>
                	: null 
                }

            </div>
        </HashRouter>
        )
    }

}

export default Pages