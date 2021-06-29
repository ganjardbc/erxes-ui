import React, { Component } from 'react'

class Pages extends Component {

	render() {
		return (
			<div>
				<h1>Step 3</h1>
				<form>
					<div className="margin-bottom-15px">
            <div className="margin-5px">
                <span className="txt-site txt-11 txt-main txt-bold">
                	Field 3
                </span>
            </div>
            <input 
              type="text" 
              className="txt txt-sekunder-color"
              placeholder=""
              required></input>
          </div>
          <div className="margin-bottom-15px">
            <div className="margin-5px">
                <span className="txt-site txt-11 txt-main txt-bold">
                	Field 4
                </span>
            </div>
            <input 
              type="text" 
              className="txt txt-sekunder-color"
              placeholder=""
              required></input>
          </div>
				</form>
			</div>
		)
  }

}

export default Pages