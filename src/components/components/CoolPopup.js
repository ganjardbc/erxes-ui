import React, {Component} from 'react'

class Pages extends Component {

	constructor() {
		super()
		this.state = {
			coolPopup: false
		}
	}

	opCoolPopup = () => {
		if (this.state.coolPopup === false) { 
			this.setState({
				coolPopup: true
			})
		} else {
			this.setState({
				coolPopup: false
			})
		}
	}

	opContent = target => e => {
  	e.preventDefault()

  	var i, tabcontent, tablinks

  	tabcontent = document.getElementsByClassName('popup-place')
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
					<h1>Cool Popup</h1>
					<div className="margin-15px">
						<button 
							onClick={this.opCoolPopup}
							className="btn btn-green">
							Open Cool Popup
						</button>
					</div>
				</div>

				{ (this.state.coolPopup === true) ? (
					<div className="app-popup app-popup-show">
						<div className="popup-content-mikro background-white post-center">
							<button 
								onClick={this.opCoolPopup}
								className="popup-btn-close btn btn-micro-circle btn-black">
								<i className="fa fa-lw fa-times" />
							</button>
							<div className="padding-15px border-bottom">
								<h3 className="txt-site txt-main txt-center">
									Run On Your Device
								</h3>
							</div>
							<div className="padding-15px">
								<div className="navigator nav-3x nav-small nav-theme-6">
									<ul>
										<li 
											className="n-c-link active" 
											onClick={this.opContent('content-1')}>
												Device ID
										</li>
										<li 
											className="n-c-link" 
											onClick={this.opContent('content-2')}>
												Account
										</li>
										<li 
											className="n-c-link" 
											onClick={this.opContent('content-3')}>
												QR Code
										</li>
									</ul>
								</div>
							</div>
							<div className="padding-15px padding-bottom-30px">
								<div 
									id="content-1"
									className="popup-place active">
									<h4 className="txt-site txt-main txt-center margin-bottom-15px">
										Title 1
									</h4>
									<p className="txt-site txt-primary txt-11 txt-center">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
								<div 
									id="content-2"
									className="popup-place">
									<h4 className="txt-site txt-main txt-center margin-bottom-15px">
										Title 2
									</h4>
									<p className="txt-site txt-primary txt-11 txt-center">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
								<div 
									id="content-3"
									className="popup-place">
									<h4 className="txt-site txt-main txt-center margin-bottom-15px">
										Title 3
									</h4>
									<p className="txt-site txt-primary txt-11 txt-center">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
								</div>
							</div>
							<div className="padding-15px border-top grid grid-2x gap-15px">
								<div className="col-1">
									<button className="btn btn-sekunder btn-width-all btn-small border-all">
										<i className="fab fa-lw fa-app-store" /> Get iOS App
									</button>
								</div>
								<div className="col-2">
									<button className="btn btn-sekunder btn-width-all btn-small border-all">
										<i className="fab fa-lw fa-google-play" /> Get Android App
									</button>
								</div>
							</div>
						</div>
					</div>
				):(
					<div></div>
				) }

			</div>
		)
	}
}

export default Pages