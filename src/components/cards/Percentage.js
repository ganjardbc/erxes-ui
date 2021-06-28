import React, { Component } from 'react'

class Percentage extends Component {
  render() {
    return (
      <div className="card df-card">
                    
        <div className="padding-15px background-blue">
          Percentage
        </div>

        <div className="card-mid">
          <div className="c100 p25 default green card-center">
            <span>
                25.5%
            </span>
            <div className="slice" style={{margin: "auto"}}>
                <div className="bar"></div>
                <div className="fill"></div>
            </div>
          </div>
          {/* <div className="card-percentage border-50">
            <div className="percentage-info">
              <div className="percentage-title">
                  50%
              </div>
              <div className="percentage-subtitle">
                  Percentage
              </div>
            </div>
          </div> */}
        </div>

      </div>
    )
  }
}

export default Percentage