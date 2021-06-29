import React, { Component } from 'react'
import Img from 'react-image'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
    	cardFlipping: 'card-flipping'
    }
  }

  opCardFlipping = () => {
  	if (this.state.cardFlipping === 'card-flipping') { 
  		this.setState({
  			cardFlipping: 'card-flipping active'
  		})
  	} else {
  		this.setState({
  			cardFlipping: 'card-flipping'
  		})
  	}
  }

  render() {
  	return(
  		<div className="main-content">
				{/*<div className="padding-15px">
					<h2 className="txt-site txt-main">Flipping Card</h2>
				</div>*/}
				<div className="padding-15px width width-800px width-center">

					<div className="padding-20px"></div>
					<div className="padding-10px"></div>

					<div className={this.state.cardFlipping}>
						<div className="card-body">
							<div className="card-side side-front">
								<div className="grid grid-2x grid-mobile-none">
									<div className="col-1">
										<div className="image image-full background-grey">
											<Img 
				                src="https://images.techhive.com/images/article/2017/02/intel_coffee_lake_figurative_image-100708700-large.jpg"
				                className="img"
				                loader={
				                  <div className="icn">
				                    <i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" />
				                  </div>
				                }
				                unloader={
				                  <div className="icn">
				                    <i className="color-green post-center fa fa-lg fa-circle-notch fa-spin" />
				                  </div>
				                } />
										</div>
									</div>
									<div className="col-2">
										<div className="padding-30px">
											<p className="txt-site txt-primary txt-11 margin-bottom-15px">
												By Ahuy
											</p>
											<h1 className="txt-site txt-main txt-bold margin-15px">
												Coffee
											</h1>
											<p className="txt-site txt-primary txt-11 margin-15px">
												Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan).
											</p>
											<p className="txt-site txt-primary txt-11 margin-15px">
												Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa (specifically having its origin in Ethiopia and Sudan).
											</p>
											<div className="content-right">
												<button 
													onClick={this.opCardFlipping}
													className="btn btn-green">
													Give Feedback
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-side side-back">
								<div className="padding-15px">
									<div className="padding-15px">
										<h1 className="txt-site txt-main txt-center txt-bold margin-15px">
											Let's get in touch!
										</h1>
										<div className="float-top-right">
											<button 
												onClick={this.opCardFlipping}
												className="btn btn-circle btn-grey">
												<i className="fa fa-lg fa-times" />
											</button>
										</div>
										<div className="margin-15px padding-top-15px">
											<input type="email" className="txt txt-sekunder margin-5px" placeholder="email@email.com" />
											<textarea className="txt txt-sekunder edit-text margin-5px" placeholder="Your feedback.."></textarea>
										</div>
										<div className="margin-15px grid grid-2x">
											<div className="col-1">
												<button className="btn btn-circle btn-grey">
													<i className="fab fa-lg fa-facebook" />
												</button>
												<button className="btn btn-circle btn-grey">
													<i className="fab fa-lg fa-twitter" />
												</button>
												<button className="btn btn-circle btn-grey">
													<i className="fab fa-lg fa-instagram" />
												</button>
											</div>
											<div className="col-2 content-right">
												<button 
													onClick={this.opCardFlipping}
													className="btn btn-grey"
													style={{marginRight: '10px'}}>
													Cancel
												</button>
												<button className="btn btn-green">
													SEND
												</button>
											</div>
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