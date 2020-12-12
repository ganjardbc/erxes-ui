import React, { Component } from 'react'
import TimePicker from '../../modules/popup/Time'
import DatePicker from '../../modules/popup/Date'
import CalendarPicker from '../../modules/popup/Calendar'
import DropDown from '../../modules/popup/DropDown'
import PopUp from '../../modules/popup/PopUpAlert'

class Pages extends Component {

  constructor (props) {
    super(props)
    this.state = {
      popup: false,
      popupConfirm: false,
      popupAlert: false,
      exampleDropDown: [
		    { id: '1', title: 'Drop Down 1', value: 'DD-1' },
		    { id: '2', title: 'Drop Down 2', value: 'DD-2' },
		    { id: '3', title: 'Drop Down 3', value: 'DD-3' },
		    { id: '4', title: 'Drop Down 4', value: 'DD-4' },
		    { id: '5', title: 'Drop Down 5', value: 'DD-5' },
		    { id: '6', title: 'Drop Down 6', value: 'DD-6' }
		  ]
    }
  }
  
  opPopUp = () => {
    if (this.state.popup) { 
      this.setState({popup: false})
    } else {
      this.setState({popup: true})
    }
  }

  opPopUpConfirm = () => {
    if (this.state.popupConfirm) { 
      this.setState({popupConfirm: false})
    } else {
      this.setState({popupConfirm: true})
    }
  }

  opPopUpAlert = () => {
    if (this.state.popupAlert) { 
      this.setState({popupAlert: false})
    } else {
      this.setState({popupAlert: true})
    }
  }
	

	render () {
		return (
			<div className="main-content">

        <div className="padding-5px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Component Pickers
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        <div className="padding-5px">
          <div className="margin-15px" style={{ width: '300px' }}>
            <TimePicker time="15:15:33" onChange={(e) => {
              console.log('start date', e)
            }} />
          </div>
          <div className="margin-15px" style={{ width: '300px' }}>
            <DatePicker />
          </div>
          <div className="margin-15px" style={{ width: '300px' }}>
            <CalendarPicker onChange={(e) => { console.log('calendar', e) }} />
          </div>
          <div className="margin-15px" style={{ width: '300px' }}>
            <DropDown
              onChange={(e) => { console.log('data', e) }}
              data={this.state.exampleDropDown} />
          </div>
          <div className="margin-15px" style={{ width: '300px' }}>
            <button 
              className="btn btn-all btn-blue margin-right-10px"
              onClick={this.opPopUp}>
              Done
            </button>
            <button 
              className="btn btn-all btn-blue margin-right-10px"
              onClick={this.opPopUpConfirm}>
              Alert
            </button>
            <button 
              className="btn btn-all btn-blue"
              onClick={this.opPopUpAlert}>
              Confirm
            </button>

            { (this.state.popup) 
            ? <PopUp
              type={"save"}
              class={"app-popup app-popup-show"}
              onClick={this.opPopUp} /> 
            : <div></div> }

            { (this.state.popupConfirm) 
            ? <PopUp
              type={"confirm"}
              class={"app-popup app-popup-show"}
              onClick={this.opPopUpConfirm} /> 
            : <div></div> }

            { (this.state.popupAlert) 
            ? <PopUp
              type={"delete"}
              class={"app-popup app-popup-show"}
              onClick={this.opPopUpAlert} /> 
            : <div></div> }
          </div>
        </div>        

      </div>
		)
	}

}

export default Pages
