import React, { Component } from 'react'

class Pages extends Component {

	render() {
		return (
			<div>
				<h1>Step 1</h1>
				<form>
          <div className="margin-bottom-15px">
            <div className="margin-5px">
                <span className="txt-site txt-11 txt-main txt-bold">
                	No KTP
                </span>
            </div>
            <input 
              type="text" 
              className="txt txt-sekunder-color"
              placeholder=""
              required></input>
          </div>
          <div className="grid grid-2x gap-15px">
            <div className="col-1">
              <div className="margin-bottom-15px">
                <div className="margin-5px">
                    <span className="txt-site txt-11 txt-main txt-bold">
                      Nama Depan
                    </span>
                </div>
                <input 
                  type="text" 
                  className="txt txt-sekunder-color"
                  placeholder=""
                  required></input>
              </div>
            </div>
            <div className="col-2">
              <div className="margin-bottom-15px">
                <div className="margin-5px">
                    <span className="txt-site txt-11 txt-main txt-bold">
                      Nama Belakang
                    </span>
                </div>
                <input 
                  type="text" 
                  className="txt txt-sekunder-color"
                  placeholder=""
                  required></input>
              </div>
            </div>
          </div>
				</form>
			</div>
		)
  }

}

export default Pages