import React, { Component } from 'react'
import { Calendar } from 'react-date-range'

class Pages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datePicker: this.props.date ? this.props.date : null
    }
  }

  handleClickOutside(element) {
    // console.log(element)
    const outsideclickListener = event => {
      if (!element.contains(event.target)) {
        element.style.display = 'none'
        removeClickListener()
      }
    }

    const removeClickListener = () => {
      // this.setState({smallProfileClass: clActivePopup})
      document.removeEventListener('click', outsideclickListener)
    }

    document.addEventListener('click', outsideclickListener)
  }

  clPlaceDate = () => {
    var element = document.getElementById('app-calendar-picker')
    element.style.display = 'none'
  }

  opPlaceDate = () => {
    var element = document.getElementById('app-calendar-picker')
    element.style.display = 'block'
    this.handleClickOutside(element)
  }

  handleChange = moment => {
    console.log(moment)
  }

  handleSave = () => {
    console.log('saved', this.state.datePicker)
  }

  handleSelectDate = (e) => {
    this.props.onChange(e)
    this.setState({
      datePicker: e
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState({
        datePicker: this.props.date 
      })
    }
  }


  render() {
    return (
      <div>
        <div className="card-date-picker">
          <div className="double">
            <input
              type="text"
              className="input"
              readOnly
              value={this.state.datePicker} />
            <button
              type="button"
              className="btn btn-grey border-left btn-no-radius"
              onClick={this.opPlaceDate}>
              <i className="fa fa-lg fa-calendar-alt" />
            </button>
          </div>
          <div
            className="content"
            style={{ display: 'none' }}
            id="app-calendar-picker">
            <div>
              <Calendar
                date={this.state.datePicker}
                onChange={this.handleSelectDate}
                color="#5629b6" />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Pages