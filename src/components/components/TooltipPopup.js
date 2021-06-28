import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'

class Pages extends Component {
	constructor () {
		super()
		this.state = {}
	}

	render () {
		return (
			<div className="main-content">
				<div className="padding-15px">
					<h1>Tooltip</h1>
					<div className="margin-top-15px display-flex">
						<span
							className="app-pointer" 
							data-tip="This is tool tip">
							Normal Tooltip
						</span>
						<span
							className="app-pointer" 
							data-tip="This is tool tip" 
							data-type="light" 
							data-border="true">
							White Tooltip Top
						</span>
						<span
							className="app-pointer" 
							data-tip="This is tool tip" 
							data-type="info" 
							data-border="true"
							data-place="bottom">
							Blue Tooltip Bottom
						</span>
						<span
							className="app-pointer" 
							data-tip="This is tool tip" 
							data-type="warning" 
							data-border="true"
							data-place="right">
							Warning Tooltip Right
						</span>
						<span
							className="app-pointer" 
							data-tip="This is tool tip" 
							data-type="error" 
							data-border="true"
							data-place="left">
							Error Tooltip Left
						</span>
					</div>
					<ReactTooltip />
				</div>
				<div className="padding-15px">
					<h1>Github Tooltip</h1>
					<div className="margin-top-15px">
						<button 
							data-scroll-hide="true"
							data-tip=""
							data-for="github-tooltip"
							className="btn btn-small btn-green">
							Github Tooltip
						</button>
						<ReactTooltip 
							clickable="true"
							border="true"
							type="light"
							place="bottom" 
							id="github-tooltip">
							<div className="width width-300px">
								<div className="margin-10px display-flex-normal">
									<span className="width width-25px">
										<i className="fa fa-lw fa-box" />
									</span>
									<span className="txt-site txt-11 txt-main margin-right-5px">
										Used by 
									</span>
									<span className="txt-site txt-11 txt-main txt-bold">
										80,306 repositories
									</span>
								</div>
								<div className="margin-10px display-flex-normal">
									<div className="image image-25px background-blue margin-right-5px"></div>
									<div className="image image-25px background-blue margin-right-5px"></div>
									<div className="image image-25px background-blue margin-right-5px"></div>
									<div className="image image-25px background-blue margin-right-5px"></div>
									<div className="image image-25px background-blue margin-right-5px"></div>
									<div className="txt-site txt-9 txt-safe txt-bold margin-top-5px">
										+80,298
									</div>
								</div>
								<div className="margin-20px">
									<div className="border-top"></div>
								</div>
								<div className="margin-10px display-flex-normal">
									<span className="width width-25px">
										<i className="fa fa-lw fa-code" />
									</span>
									<span className="txt-site txt-11 txt-main">
										Install via package
									</span>
								</div>
								<div className="margin-10px">
									<span className="txt-site txt-11 txt-main txt-bold">
										npm i expo-cli --save
									</span>
								</div>
							</div>
						</ReactTooltip>
					</div>
				</div>
			</div>
		)
	}
}

export default Pages