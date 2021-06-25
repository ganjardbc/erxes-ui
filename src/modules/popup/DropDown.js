import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import onClickOutside from "react-onclickoutside"

class Pages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ddState: 'drop-down',
      ddData: this.props.data,
      ddTitle: (this.props.title) ? this.props.title : 'Select one menu',
      ddSetKey: (this.props.setKey) ? this.props.setKey : null
    }
  }

  componentWillMount() {
    console.log('old data', this.props.data)

    if (this.props.type === 'bizpar') {
      let payload = []
      let val = this.props.value
      this.props.data && this.props.data.map((data, index) => {
        let stt
        if (val === data.bizparKey) {
          stt = 'active'
          this.setState({ ddTitle: data.bizparValue })
        } else {
          stt = ''
        }
        payload.push(
          {
            id: data.bizparKey,
            title: data.bizparValue,
            value: data.bizparKey,
            status: stt
          }
        )

        return null
      })
      this.setState({ ddData: payload })
      // console.log('new data', payload)
    } else {
      if (this.props.value) {
        let payload = []
        let val = this.props.value
        this.props.data && this.props.data.map((data, index) => {
          let stt
          if (val === data.value) {
            stt = 'active'
          } else {
            stt = ''
          }
          payload.push(
            {
              id: data.id,
              title: data.title,
              value: data.value,
              status: stt
            }
          )
          return null 
        })
        this.setState({ ddData: payload })
        this.setState({ ddTitle: val })
      }
    }
  }

  opDropContent = (oldindex) => (e) => {
    e.preventDefault()

    // console.log('old data', this.state.ddData[oldindex])

    let payload = []
    let title = (oldindex === 'null') ? this.props.title : this.state.ddData[oldindex].title
    let value = (oldindex === 'null') ? '' : this.state.ddData[oldindex].value

    this.state.ddData && this.state.ddData.map((data, index) => {
      let stt
      (oldindex === index) ? stt = 'active' : stt = ''
      payload.push({
        id: data.id,
        title: data.title,
        value: data.value,
        status: stt
      })

      return null
    })

    let newData = {
      ddData: payload,
      ddTitle: title
    }

    // console.log('new data', newData)

    this.props.onChange(value)
    this.setState(newData)
    this.clDropDown()
  }

  handleClickOutside(element) {
    // console.log(element)
    const outsideclickListener = event => {
      if (!element.contains(event.target)) {
        // element.style.display = 'none'
        this.setState({ ddState: 'drop-down' })
        removeClickListener()
      }
    }

    const removeClickListener = () => {
      // this.setState({smallProfileClass: clActivePopup})
      document.removeEventListener('click', outsideclickListener)
    }

    document.addEventListener('click', outsideclickListener)
  }

  clDropDown = () => {
    this.setState({ ddState: 'drop-down' })
  }

  opDropDown = () => {
    var element = document.getElementById('app-drop-down')
    this.setState({ ddState: 'drop-down active' })
    this.handleClickOutside(element)

    // if (this.state.ddState === 'drop-down') {
    //   this.setState({ddState: 'drop-down active'})
    // } else {
    //   this.setState({ddState: 'drop-down'})
    // }
  }

  componentDidUpdate(prevProps) {
    if (this.props.bizValue !== prevProps.bizValue) {
      this.setState({
        ddTitle: this.props.bizValue
      })
    }
    if (this.props.bizValueHolidayType !== prevProps.bizValueHolidayType) {
      this.setState({
        ddTitle: this.props.bizValueHolidayType
      })
    }
  }

  render() {
    return (
      <div
        className={this.state.ddState}
        id="app-drop-down"
        key={this.props.key}>
        <div className="dd-border">
          <div className="dd-selected" style={{ backgroundColor: this.props.disabled ? "#E6E6E6" : null }} onClick={this.props.disabled ? null : this.opDropDown}>
            <div className="dd-title">
              <span className="title">{this.state.ddTitle}</span>
            </div>
            <div className="dd-icon">
              <span className="icon"></span>
            </div>
          </div>
          {(this.state.ddData)
            ? <div className="dd-place">
              <ul>
                {(this.props.title)
                  ? <li
                    key={'drop-down-key'}
                    onClick={this.opDropContent('null')}>
                    {(this.props.title) ? this.props.title : 'Select one menu'}
                  </li>
                  : null}
                {/* jika set key di masukan */}
                {this.state.ddData && this.state.ddData.map((data, index) => {
                  return (
                    <li
                      key={data.id}
                      className={(data.status === 'active') ? 'selected' : ''}
                      onClick={this.opDropContent(index)}>
                      {data.title}
                    </li>
                  )
                })}

              </ul>
            </div>
            : null}

        </div>
      </div>
    )
  }

}

export default Pages