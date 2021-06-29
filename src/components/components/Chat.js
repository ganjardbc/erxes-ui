import React, { Component } from 'react'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
	    	classChat: 'chat',
	    	classMessage: 'message',
	    	classField: 'field',
	    	classItem: 'choose-item',
	    	classBtnItem: 'fa fa-lg fa-plus',
	    	textChat: 'FULL SCREEN',
	    	roomChat: false,
	    	roomName: '',
	    	roomClock: '',
	    }
	}

	render () {
		return (
			<div className="main-content">

				<div className="padding-15px">
					<div className={this.state.classChat}>

						<div className="side">

							<div className="top">
								<div className="txt-site txt-18 txt-bold txt-main">
		              Chats
		            </div>
		            <div className="padding-top-10px">
		            	<form>
		            		<input 
		            			className="txt txt-primary-color" 
		            			placeholder="Search .." />
		            	</form>
		            </div>
							</div>

							<div className="list">
								{ this.cardProfile(6) }
							</div>

						</div>

						<div className="main">

							<div className="top">

								<div className="grid grid-2x">
									<div className="col-1">

										{ (this.state.roomChat) ? (
											<div className="grid grid-2x-col45 gap-10px">
												<div className="col-1">
													<div className="image image-45px image-circle background-blue" />
												</div>
												<div className="col-2">
													<div>
														<span className="txt-site txt-12 txt-main txt-bold">
															{this.state.roomName}
														</span>
														<span className="status">
															Owner
														</span>
													</div>
													<div className="txt-site txt-10 txt-primary">
														{this.state.roomClock}
													</div>
												</div>
											</div>
										) : (
											<div className="txt-site txt-14 txt-main txt-bold post-top">
												Room
											</div>
										)}

									</div>
									<div className="col-2 content-right">
										{/*<button className="btn btn-grey btn-circle">
											<i className="fa fa-lg fa-ellipsis-h" />
										</button>*/}
										<button 
											onClick={this.opMaximize}
											className="btn btn-grey btn-radius">
											{this.state.textChat}
										</button>
									</div>
								</div>

							</div>


							{ (this.state.roomChat) ? (
								<div className={this.state.classMessage}>
									{ this.cardMessage(5) }
								</div>
							) : (
								<div 
									className="post-center padding-top-30px padding-bottom-30px" 
									style={{width: '300px', margin: 'auto'}}>
									<div className="txt-site txt-20 color-green txt-bold txt-center">
										<i className="fa fa-2x fa-comment-alt" />
									</div>
									<div className="padding-5px" />
									<div className="txt-site txt-14 txt-main txt-bold txt-center">
										Choose one person to see a chats
									</div>
								</div>
							)}

							{ (this.state.roomChat) ? (
								
								<div className={this.state.classField}>

									<div className={this.state.classItem}>
										<div className="c-i-top">
											<div className="txt-site txt-12 txt-main txt-bold">
												Choose Item
											</div>
										</div>
										<div className="c-i-mid">
											<div className="display-flex-normal">{this.cardItem(4, 'a')}</div>
											<div className="display-flex-normal">{this.cardItem(4, 'b')}</div>
										</div>
									</div>
									
									<div className="f-content">
											<div className="f-col-1">
												<button 
													onClick={this.opChooseItem}
													type="button" 
													className="btn btn-sekunder btn-circle">
													<i className={this.state.classBtnItem} />
												</button>
											</div>
											<div className="f-col-2">
												<input 
				            			className="txt txt-sekunder-color"
				            			required 
				            			placeholder="Write message .." />
											</div>
											<div className="f-col-3">
												<button 
													onClick={this.opChooseItem}
													type="button" 
													className="btn btn-circle btn-green">
													<i className="fa fa-lg fa-paper-plane" />
												</button>
											</div>
									</div>

								</div>

							) : (
								<div></div>
							)}

						</div>

					</div>
				</div>

      </div>
		)
	}

	opChooseItem = () => {
		if (this.state.classItem === 'choose-item') { 
			this.setState({
				classItem: 'choose-item show',
				classMessage: 'message item-show',
				classBtnItem: 'fa fa-lg fa-times'
			})
		} else {
			this.setState({
				classItem: 'choose-item',
				classMessage: 'message',
				classBtnItem: 'fa fa-lg fa-plus'
			})
		}
	}

	opRoomChat = () => {
		// if (this.state.roomChat === false) { 
		// 	this.setState({roomChat: true})
		// } else {
		// 	this.setState({roomChat: false})
		// }
		this.setState({
			roomChat: true,
			roomName: 'Full Name ',
			roomClock: 'Active 3 hours ago'
		})
	}

	opMaximize = () => {
		if (this.state.classChat === 'chat') {
			this.setState({classChat: 'chat zoom', textChat: 'CLOSE'})
		} else {
			this.setState({classChat: 'chat', textChat: 'FULL SCREEN'})
		}
	}

	cardItem = (val, ini) => {
    let dt = []
		for (let index = 0; index < val; index++) {
			dt.push(
				<div style={{width: '100%'}}>
					
					<input 
						type="checkbox" 
						name="c-select" 
						className="card-select"
						id={"c-select-"+ini+'-'+index} />


					<div className="card card-select-target">
						<label for={"c-select-"+ini+'-'+index} style={{cursor: "pointer"}}>
							<div className="card-top">
								<div className="image image-middle background-blue"></div>
							</div>
							<div className="card-pad">
								<div className="txt-site txt-11 txt-main txt-bold">
									Name Item
								</div>
								<div className="txt-site txt-11 txt-bold color-orange">
									Rp. 25.000.000,00
								</div>
							</div>
						</label>
					</div>


				</div>
		  )
    }
    return dt
  }

	cardProfile = (val) => {
    let dt = []
		for (let index = 0; index < val; index++) {
      dt.push(
      	<div className="profile" onClick={this.opRoomChat}>
					<div className="col-1">
						<div className="image image-45px image-circle background-blue" />
					</div>
					<div className="col-2">
						<div className="name">
							Full Name
						</div>
						<div>
							<span className="status">
								Owner
							</span>
						</div>
					</div>
				</div>
			)
    }
    return dt
	}

	cardMessage = (val) => {
    let dt = []

		for (let index = 0; index < val; index++) {
      dt.push(
	      <div>

	      	<div className="card-message c-m-left">
						<div className="c-m-col-1">
							<div className="image image-45px image-circle background-blue" />
						</div>
						<div className="c-m-col-2">
							<div className="c-m-content">
								<div className="c-m-top">
									<div className="c-m-name">
										Full Name
									</div>
									<div className="c-m-date">
										Nov 15, 19
									</div>
								</div>
								<div className="c-m-mid">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</div>
							</div>
						</div>
					</div>

					<div className="card-message c-m-right">
									
						<div className="c-m-content">
							<div className="c-m-top">
								<div className="c-m-name">
									Me
								</div>
								<div className="c-m-date">
									Nov 15, 19
								</div>
							</div>
							<div className="c-m-mid">
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</div>
								<div className="card" style={{width: '300px'}}>
									<div className="card-top">
										<div className="image image-middle background-blue"></div>
									</div>
									<div className="card-pad">
										<div className="txt-site txt-11 txt-main txt-bold">
											Name Item
										</div>
										<div className="txt-site txt-11 txt-bold color-orange">
											Rp. 25.000.000,00
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>
      )
    }
    return dt
  }

}

export default Pages
