import React, { Component } from 'react'
import InlineEditing from '../components/forms/InlineEditing'

const opAlert = 'app-popup app-popup-show'
const clAlert = 'app-popup'

class Pages extends Component {

	constructor () {
    super()
    this.state = {
    	clMegaPopup: clAlert,
    	clEditAble: '',
    	editAble: false,
    }
  }

  opMegaPopup = () => {
    if (this.state.clMegaPopup === opAlert) {
      this.setState({clMegaPopup: clAlert})
    } else {
      this.setState({clMegaPopup: opAlert})
    }
  }

  opEditAble = () => {
  	if (this.state.editAble === false) { 
  		this.setState({
  			editAble: true, 
  			clEditAble: 'edit-able'
  		})
  	} else {
  		this.setState({
  			editAble: false, 
  			clEditAble: ''
  		})
  	}
  }

  render () {
		return (
			<div className="main-content">
				
				<div className="padding-15px">
					<div className="txt-site txt-18 txt-bold txt-main">
						<InlineEditing 
							text={'Custom Mega Popup'} 
							api={'https://example.com/api'} />
					</div>
					<div className="padding-top-15px">
						<button 
							className="btn btn-green" 
							onClick={this.opMegaPopup}>
							Open
						</button>
					</div>
				</div>

				<div className={this.state.clMegaPopup}>
					<div className="popup-content background-white border-radius post-top shadow">

						<div className="padding-15px grid grid-2x">
							<div className="col-1 display-flex-normal">
								<button className="btn btn-circle btn-grey">
									<i className="fa fa-lw fa-bookmark color-green" />
								</button>
								<div 
									className="txt-site txt-primary txt-11 txt-top"
									style={{marginTop: '8px', marginLeft: '10px'}}>
									BU-19
								</div>
							</div>
							<div className="col-2 content-right">

								{/*<ButtonAction 
									return={this.opEditAble}
			        		now={{
			        			'btnColor': 'btn btn-grey',
			        			'btnIcon': 'fa fa-lw fa-pencil-alt',
			        			'btnText': 'Edit'
			        		}}
			        		then={{
			        			'btnColor': 'btn background-green',
			        			'btnIcon': 'fa fa-lw fa-check',
			        			'btnText': 'Save'
			        		}} />*/}

								<button className="btn btn-grey">
									<i className="fa fa-lw fa-bullhorn" /> Give Feedback
								</button>
								<button className="btn btn-grey">
									<i className="fa fa-lw fa-eye" /> 1
								</button>
								<button className="btn btn-circle btn-grey">
									<i className="fa fa-lw fa-share-alt" />
								</button>
								<button className="btn btn-circle btn-grey">
									<i className="fa fa-lw fa-ellipsis-h" />
								</button>
								<button 
									onClick={this.opMegaPopup}
									className="btn btn-circle btn-grey">
									<i className="fa fa-lg fa-times" />
								</button>
							</div>
						</div>

						<div className="popup-middle">
							<div className="grid grid-2x-colmin6 gap-30px padding-top-5px">
								<div className="col-1">
									
									<h1 
										className="txt-site txt-16 txt-main">
										<InlineEditing 
											text={'Custom Mega Popup'}
											api={'https://example.com/api'} />
										{/*<div 
											className={this.state.clEditAble}
											contentEditable={this.state.editAble}>
											Custom Mega Popup
										</div>*/}
									</h1>

									<div className="margin-10px">
										<button className="btn btn-small-circle btn-grey">
											<i className="fa fa-lw fa-podcast" />
										</button>
										<button className="btn btn-small-circle btn-grey">
											<i className="fa fa-lw fa-file-alt" />
										</button>
										<button className="btn btn-small-circle btn-grey">
											<i className="fa fa-lw fa-link" />
										</button>
										<button className="btn btn-small-circle btn-grey">
											<i className="fa fa-lw fa-image" />
										</button>
									</div>

									<div className="txt-site txt-11 txt-main">
										<InlineEditing 
											api={'https://example.com/api'}
											text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />
										{/*<div 
											className={this.state.clEditAble}
											contentEditable={this.state.editAble}>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
											proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</div>*/}
									</div>

									<div className="margin-15px display-flex-normal">
										<button className="btn btn-primary btn-radius">
											Activity
										</button>
										<button className="btn btn-grey btn-radius">
											Give Feedback <i className="fa fa-lw fa-angle-down" />
										</button>
									</div>

									<div className="margin-30px">
										<div className="padding-10px content-center">
											<div className="margin-30px">
												<i className="txt-site txt-small color-grey far fa-lg fa-comment-alt" />
											</div>
											<div className="margin-bottom-30px">
												<div className="txt-site txt-11 txt-primary txt-bold">
													Comments Empty
												</div>
											</div>
										</div>
									</div>

									<div className="margin-15px border-top padding-top-15px">
										<div className="grid grid-2x-col45 gap-10px">
								        <div className="col-1">
								          <div className="image image-circle image-40px background-blue"></div>
								        </div>
								        <div className="col-2">
									        <form>
									          <input 
									          	className="txt txt-sekunder"
									          	placeholder="Add comment.."
									          	required />
									        </form>
								        </div>
								    </div>
									</div>

								</div>
								<div className="col-2">
									
									<div className="margin-15px">
										<div className="txt-site txt-9 txt-bold txt-main margin-bottom-5px">
											STATUS
										</div>
										<div style={{width: '150px'}}>
											<select className="slc background-post">
												<option>Progress</option>
												<option>Done</option>
												<option>Error</option>
											</select>
										</div>
									</div>

									<div className="margin-15px">
										<div className="txt-site txt-9 txt-bold txt-main margin-bottom-5px">
											ASSIGNEE
										</div>
										<div className="">

											<div className="card-notif">
								        <div className="c-n-col-1">
								          <div className="image image-circle image-40px background-blue"></div>
								        </div>
								        <div className="c-n-col-2">
								          <div className="txt-site txt-11 txt-top">
								            <span className="txt-site txt-bold txt-main">
								              Admin1
								            </span>
								          </div>
								        </div>
								      </div>

										</div>
									</div>

									<div className="margin-15px">
										<div className="txt-site txt-9 txt-bold txt-main margin-bottom-5px">
											REPORTER
										</div>
										<div className="">
											
											<div className="card-notif">
								        <div className="c-n-col-1">
								          <div className="image image-circle image-40px background-blue"></div>
								        </div>
								        <div className="c-n-col-2">
								          <div className="txt-site txt-11 txt-top">
								            <span className="txt-site txt-bold txt-main">
								              Admin2
								            </span>
								          </div>
								        </div>
								      </div>

										</div>
									</div>

									<div className="margin-15px">
										<div className="txt-site txt-9 txt-bold txt-main margin-bottom-5px">
											LABELS
										</div>
										<div className="txt-site txt-10 txt-primary txt-thin">
											None
										</div>
									</div>

									<div className="margin-15px">
										<div className="txt-site txt-9 txt-bold txt-main margin-bottom-5px">
											STORY POINTS
										</div>
										<div className="txt-site txt-10 txt-primary txt-thin">
											None
										</div>
									</div>

									<div className="margin-15px">
										<div className="txt-site txt-9 txt-bold txt-main margin-bottom-5px">
											PRIORITY
										</div>
										<div className="display-flex-normal">
											<div 
												className="fa fa-lw fa-arrow-up color-orange"
												style={{marginRight: '10px'}} />
											<div className="txt-site txt-10 txt-primary txt-thin">
												Medium
											</div>
										</div>
									</div>

									<div className="margin-30px">
										<div className="txt-site txt-10 txt-primary txt-thin">
											Created May 25, 2019, 11:05 AM
										</div>
										<div className="txt-site txt-10 txt-primary txt-thin">
											Updated 5 days ago
										</div>
									</div>

									

								</div>
							</div>
						</div>

					</div>
				</div>

			</div>
		)
	}

}

export default Pages