import React, { Component } from 'react'
import { DateRange, DateRangePicker, Calendar } from 'react-date-range'

class Pages extends Component {

  constructor (props) {
    super(props)
    this.state = {
      placeDate: false,
      placeRange: false,
      placeDateRange: false,
      datePicker: new Date(),
      dateRange: {
        selection: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
          color: '#2ecc71'
        },
        compare: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'compare',
        },
      },
      dateRangePicker: {
        selection: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
          color: '#2ecc71'
        },
        compare: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'compare',
        },
      },
    }
	}

	handleSelect = (range) => {
    console.log(range)
    this.setState({
      datePicker: range
    })
  }

  handleRangeChange = (which, payload) => {
    console.log(which, payload);
    this.setState({
      [which]: {
        ...this.state[which],
        ...payload,
      },
    })
  }

  opPlaceDate = () => {
    if (this.state.placeDate == false) { 
      this.setState({
        placeDate: true
      })
    } else {
      this.setState({
        placeDate: false
      })
    }
  }

  opPlaceRange = () => {
    if (this.state.placeRange == false) { 
      this.setState({
        placeRange: true
      })
    } else {
      this.setState({
        placeRange: false
      })
    }
  }

  opPlaceDateRange = () => {
    if (this.state.placeDateRange == false) { 
      this.setState({
        placeDateRange: true
      })
    } else {
      this.setState({
        placeDateRange: false
      })
    }
  }

	render () {
		return (
			<div className="main-content">

        <div className="padding-5px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Date Picker
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        {/* Date Picker */}
        <div className="padding-5px">

          <div className="txt-site txt-12 txt-bold txt-main margin-bottom-5px">
            Date picker
          </div>

          <div className="card-date-picker" style={{width: '300px'}}>

            <div className="double">
              <input
                type="text"
                className="input"
                readOnly
                value={ this.state.datePicker }
              />
              <button 
                type="button" 
                className="btn btn-grey border-left btn-no-radius" 
                onClick={this.opPlaceDate}>
                <i className="fa fa-lg fa-calendar-alt" />
              </button>
            </div>

            {(this.state.placeDate) ? (
              <div className="content">
                <div className="padding-5px grid grid-2x border-bottom">
                  <div className="col-1">
                    <div className="txt-site txt-main txt-11 txt-bold post-top">
                      Choose dates
                    </div>
                  </div>
                  <div className="col-2 content-right">
                    <button 
                      type="button" 
                      className="btn btn-grey btn-circle" 
                      onClick={this.opPlaceDate}>
                      <i className="fa fa-lg fa-times" />
                    </button>
                  </div>
                </div>
                <div>
                  <Calendar 
                    date={ this.state.datePicker } 
                    onChange={ this.handleSelect }
                    color="#2ecc71" />
                </div>
              </div>
            ) : (
              <div></div>
            )}

          </div>

        </div>



        {/* Date Range */}
        <div className="padding-5px">

          <div className="txt-site txt-12 txt-bold txt-main margin-bottom-5px">
            Date range
          </div>

          <div className="card-date-picker" style={{width: '600px'}}>

            <div className="double">
              <input
                type="text"
                className="input"
                readOnly
                value={ this.state.dateRange.selection.startDate }
              />
              <input
                type="text"
                className="input border-left"
                readOnly
                value={ this.state.dateRange.selection.endDate }
              />
              <button 
                type="button" 
                className="btn btn-grey border-left btn-no-radius" 
                onClick={this.opPlaceRange}>
                <i className="fa fa-lg fa-calendar-alt" />
              </button>
            </div>

            {(this.state.placeRange) ? (
              <div className="content">
                <div className="padding-5px grid grid-2x border-bottom">
                  <div className="col-1">
                    <div className="txt-site txt-main txt-11 txt-bold post-top">
                      Choose dates
                    </div>
                  </div>
                  <div className="col-2 content-right">
                    <button 
                      type="button" 
                      className="btn btn-grey btn-circle" 
                      onClick={this.opPlaceRange}>
                      <i className="fa fa-lg fa-times" />
                    </button>
                  </div>
                </div>
                <div>
                  <DateRange
                    onChange={this.handleRangeChange.bind(this, 'dateRange')}
                    ranges={[this.state.dateRange.selection]}
                    months={2}
                    direction="horizontal"
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}

          </div>

        </div>



        {/* Date Range Picker */}
        <div className="padding-5px">

          <div className="txt-site txt-12 txt-bold txt-main margin-bottom-5px">
            Date range picker
          </div>

          <div className="card-date-picker" style={{width: '600px'}}>

            <div className="double">
              <input
                type="text"
                className="input"
                readOnly
                value={ this.state.dateRangePicker.selection.startDate }
              />
              <input
                type="text"
                className="input border-left"
                readOnly
                value={ this.state.dateRangePicker.selection.endDate }
              />
              <button 
                type="button" 
                className="btn btn-grey border-left btn-no-radius" 
                onClick={this.opPlaceDateRange}>
                <i className="fa fa-lg fa-calendar-alt" />
              </button>
            </div>

            {(this.state.placeDateRange) ? (
              <div className="content">
                <div className="padding-5px grid grid-2x border-bottom">
                  <div className="col-1">
                    <div className="txt-site txt-main txt-11 txt-bold post-top">
                      Choose dates
                    </div>
                  </div>
                  <div className="col-2 content-right">
                    <button 
                      type="button" 
                      className="btn btn-grey btn-circle" 
                      onClick={this.opPlaceDateRange}>
                      <i className="fa fa-lg fa-times" />
                    </button>
                  </div>
                </div>
                <div>
                  <DateRangePicker
                    onChange={this.handleRangeChange.bind(this, 'dateRangePicker')}
                    ranges={[this.state.dateRangePicker.selection]}
                    months={2}
                    direction="horizontal"
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}

          </div>

        </div>

      </div>
		)
	}

}

export default Pages
