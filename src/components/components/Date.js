import React, { Component } from 'react'
import { DateRangePicker } from 'react-date-range'

class Pages extends Component {

  constructor (props) {
    super(props)
    this.state = {
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

	render () {
		return (
			<div className="main-content">

        <div className="padding-15px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Date Picker
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        <div className="padding-15px">

          <div className="padding-bottom-15px">
            <input
              type="text"
              className="txt txt-sekunder-color"
              style={{width: '350px', marginRight: '15px'}}
              readOnly
              value={ this.state.dateRangePicker.selection.startDate }
            />
            <input
              type="text"
              className="txt txt-sekunder-color"
              style={{width: '350px'}}
              readOnly
              value={ this.state.dateRangePicker.selection.endDate }
            />
          </div>

          {<DateRangePicker
            onChange={this.handleRangeChange.bind(this, 'dateRangePicker')}
            ranges={[this.state.dateRangePicker.selection]}
            months={2}
            direction="horizontal"
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            // className={'PreviewArea'}
            // months={2}
            // direction="horizontal"
            // lange="id"
            // format="YYYY-MM-DD"
          />}
        </div>

      </div>
		)
	}

}

export default Pages