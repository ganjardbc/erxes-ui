import React, { Component } from 'react'

class Pages extends Component {

	constructor () {
    super()
    this.state = {
    	appPopup1: false,
    	appPopup2: false
    }
  }

  opAppPopup1 = () => {
  	if (this.state.appPopup1) { 
  		this.setState({
  			appPopup1: false
  		})
  	} else {
  		this.setState({
  			appPopup1: true
  		})
  	}
  }

  opAppPopup2 = () => {
  	if (this.state.appPopup2) { 
  		this.setState({
  			appPopup2: false
  		})
  	} else {
  		this.setState({
  			appPopup2: true
  		})
  	}
  }

  opNavigator = (id, target, title, icon = '', value = '', status = false) => {
  	if (status) {
  		var cl = 'n-c-link active'
  	} else {
  		var cl = 'n-c-link'
  	}

  	if (icon !== '') { 
  		var icn = <i className={'fa fa-lw ' + icon + ' txt-site txt-9 margin-right-5px'} />
  	} else {
  		var icn = ''
  	}

  	if (value !== '') { 
  		var val = <span className={'margin-left-5px txt-site txt-9 txt-safe txt-bold'}>{value}</span>
  	} else {
  		var val = ''
  	}

  	return (
  		<li 
  			className={cl}
		  	id={id} 
		  	onClick={this.opContent(target)}>
		  	{icn}
				{title}
				{val}
				<label className="line"></label>
			</li>
		)
  }

  opContent = target => e => {
  	e.preventDefault()

  	var i, tabcontent, tablinks

  	tabcontent = document.getElementsByClassName('n-c-content')
	  for (i = 0; i < tabcontent.length; i++) {
	    tabcontent[i].style.display = 'none'
	  }

	  tablinks = document.getElementsByClassName('n-c-link')
	  for (i = 0; i < tablinks.length; i++) {
	    tablinks[i].className = 'n-c-link'
	  }

  	document.getElementById(target).style.display = 'block'
  	e.currentTarget.className = 'n-c-link active'
  	console.log(e.currentTarget)
  }

  render () {
		return (
			<div className="main-content">
				<div className="padding-15px">
					<div className="grid grid-2x-col8 margin-bottom-15px">
						<div className="col-1">
							<h3 className="txt-site txt-main margin-top-5px">Github Style</h3>
						</div>
						<div className="col-2 content-right">
							<div className="github-list">
								<ul>
									<li className="margin-left-5px">
										
										<div className="g-l-button">
											<span className="g-l-list" onClick={this.opAppPopup1}>
												<i className="txt-site txt-9 fa fa-lw fa-box margin-right-5px" />
												Used by
												<i className="txt-site txt-9 fa fa-1x fa-angle-down margin-left-5px" />
											</span>
											<span className="g-l-link">1,686</span>
										</div>

										{ (this.state.appPopup1) ? (
											<div 
												className="app-menu-popup content-left" 
												style={{
													top: '40px',
													width: '300px'
												}}>
												<div className="app-menu-sign">
													<i className="fa fa-2x fa-caret-up" />
												</div>
												
												<div className="padding-10px">
													<div className="margin-bottom-10px display-flex-normal">
														<span className="width width-25px">
															<i className="txt-site txt-main txt-10 fa fa-lw fa-box" />
														</span>
														<span className="txt-site txt-10 txt-main margin-right-5px">
															Used by 
														</span>
														<span className="txt-site txt-10 txt-main txt-bold">
															80,306 repositories
														</span>
													</div>
													<div className="margin-top-10px margin-bottom-5px display-flex-normal">
														<div className="image image-25px background-blue margin-right-5px"></div>
														<div className="image image-25px background-blue margin-right-5px"></div>
														<div className="image image-25px background-blue margin-right-5px"></div>
														<div className="image image-25px background-blue margin-right-5px"></div>
														<div className="image image-25px background-blue margin-right-5px"></div>
														<div className="txt-site txt-9 txt-safe txt-bold margin-top-5px">
															+80,298
														</div>
													</div>
												</div>

												<div>
													<div className="border-top"></div>
												</div>

												<div className="padding-10px">
													<div className="display-flex-normal">
														<span className="width width-25px">
															<i className="txt-site txt-main txt-10 fa fa-lw fa-code" />
														</span>
														<span className="txt-site txt-11 txt-main">
															Install via package
														</span>
													</div>
													<div className="margin-10px">
														<input 
															type="text" 
															value="npm i expo-cli --save"
															className="txt txt-small txt-sekunder" />
													</div>
												</div>
											</div>
										) : (
											<div></div>
										) }

									</li>
									<li className="margin-left-5px">

										<div className="g-l-button">
											<span className="g-l-list" onClick={this.opAppPopup2}>
												<i className="txt-site txt-9 fa fa-lw fa-eye margin-right-5px" />
												Watch
												<i className="txt-site txt-9 fa fa-1x fa-angle-down margin-left-5px" />
											</span>
											<span className="g-l-link">19</span>
										</div>

										{ (this.state.appPopup2) ? (
											<div 
												className="app-menu-popup content-left" 
												style={{
													top: '40px',
													width: '300px'
												}}>
												<div className="app-menu-sign">
													<i className="fa fa-2x fa-caret-up" />
												</div>
												<div className="padding-10px border-bottom">
													<span className="txt-site txt-11 txt-bold txt-main">
														Notifications
													</span>
												</div>
												<div className="content">
													<div className="padding-10px background-grey border-bottom">
														<div className="margin-bottom-5px txt-site txt-main txt-11 txt-bold">
															Not Watching
														</div>
														<div className="txt-site txt-main txt-9 txt-primary">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
														</div>
													</div>
													<div className="padding-10px background-grey border-bottom">
														<div className="margin-bottom-5px txt-site txt-main txt-11 txt-bold">
															Realeases Only
														</div>
														<div className="txt-site txt-main txt-9 txt-primary">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
														</div>
													</div>
													<div className="padding-10px background-grey border-bottom">
														<div className="margin-bottom-5px txt-site txt-main txt-11 txt-bold">
															Watching
														</div>
														<div className="txt-site txt-main txt-9 txt-primary">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
														</div>
													</div>
													<div className="padding-10px background-grey">
														<div className="margin-bottom-5px txt-site txt-main txt-11 txt-bold">
															Ignoring
														</div>
														<div className="txt-site txt-main txt-9 txt-primary">
															Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
														</div>
													</div>
												</div>
											</div>
										) : (
											<div></div>
										)}

									</li>
									<li className="margin-left-5px">

										<div className="g-l-button">
											<span className="g-l-list">
												<i className="txt-site txt-9 fa fa-lw fa-star margin-right-5px" />
												Star
											</span>
											<span className="g-l-link">637</span>
										</div>

									</li>
									<li className="margin-left-5px">
										
										<div className="g-l-button">
											<span className="g-l-list">
												<i className="txt-site txt-9 fa fa-lw fa-link margin-right-5px" />
												Fork
											</span>
											<span className="g-l-link">100</span>
										</div>

									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="navigator nav-all nav-theme-5 no-margin">
						<ul>
							{ this.opNavigator('nav-1', 'content-nav-1', 'Code', 'fa-code', '', true) }
							{ this.opNavigator('nav-2', 'content-nav-2', 'Issue', 'fa-info-circle', '208') }
							{ this.opNavigator('nav-3', 'content-nav-3', 'Pull requests', 'fa-link', '24') }
							{ this.opNavigator('nav-4', 'content-nav-4', 'Projects', 'fa-sticky-note', '0') }
							{ this.opNavigator('nav-6', 'content-nav-6', 'Security', 'fa-shield-alt', '') }
							{ this.opNavigator('nav-7', 'content-nav-7', 'Insight', 'fa-chart-line', '') }
							{ this.opNavigator('nav-8', 'content-nav-8', 'Settings', 'fa-cog', '') }
						</ul>
					</div>
					<div className="navigator-content">
						<div className="n-c-content active" id="content-nav-1">1</div>
						<div className="n-c-content" id="content-nav-2">2</div>
						<div className="n-c-content" id="content-nav-3">3</div>
						<div className="n-c-content" id="content-nav-4">4</div>
						<div className="n-c-content" id="content-nav-6">6</div>
						<div className="n-c-content" id="content-nav-7">7</div>
						<div className="n-c-content" id="content-nav-8">8</div>
					</div>
				</div>
			</div>
		)
	}

}

export default Pages