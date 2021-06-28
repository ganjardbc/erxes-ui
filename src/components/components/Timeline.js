import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import ReactTooltip from 'react-tooltip'

import 'react-vertical-timeline-component/style.min.css'

import WorkIcon from "@material-ui/icons/Work"
import SchoolIcon from "@material-ui/icons/School"
import StarIcon from "@material-ui/icons/Star"

class Pages extends Component {

  constructor () {
    super()
    this.state = {
      createClass: 'app-popup',
      editClass: 'app-popup',
    }
  }

  render() {
    return (
      <div className="main-content background-dark-grey">

        <div className="padding-15px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Timeline
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
            data-tip="Tooltip for image 1" 
            data-type="light" 
            data-border="true"
          >
            <div className="txt-site txt-16 txt-main txt-bold">
              Title will be place in here
            </div>

            <div className="card-timeline">
              <div className="c-n-col-1">
                <div className="image image-circle image-50px background-blue"></div>
              </div>
              <div className="c-n-col-2 txt-site txt-11 txt-primary txt-thin">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>

            <div className="bubble red top-right-fadding">
              12
            </div>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
            data-tip="Tooltip for image 2" 
            data-type="light" 
            data-border="true"
          >
            <div className="txt-site txt-16 txt-main txt-bold">
              Title will be place in here
            </div>
            <div className="card-timeline">
              <div className="c-n-col-1">
                <div className="image image-circle image-50px background-blue"></div>
              </div>
              <div className="c-n-col-2 txt-site txt-11 txt-primary txt-thin">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>

            <div className="bubble green top-right-fadding">
              12
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
          />

        </VerticalTimeline>

        <ReactTooltip />

      </div>
    )
  }


}

export default Pages