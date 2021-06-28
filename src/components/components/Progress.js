import React, { Component } from 'react'


import { makeStyles, withStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const BorderLinearProgress = withStyles({
	root: {
    height: 10,
    borderRadius: '10px',
    backgroundColor: lighten('#529ecc', 0.5),
  },
  bar: {
    borderRadius: '10px',
    backgroundColor: '#529ecc',
  },
})(LinearProgress)

class Pages extends Component {

  constructor () {
    super()
  }

  render () {
		return (
			<div className="main-content">

        <div className="padding-15px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Progress Bar DO Style
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        <div className="padding-15px">
          <div className="card-do">
            <div className="col-1">
              <div className="image image-50px image-circle background-blue">
                <i className="stt" />
              </div>
            </div>
            <div className="col-2">
              <div className="display-flex-normal">
                <h2 className="txt-site txt-main margin-right-10px">tab-absensi</h2>
                <button className="btn btn-mikro btn-primary btn-radius">
                  RESIZING DROPLET
                </button>
              </div>
              <div>
                <span className="txt-site txt-10 txt-bold color-post">
                  <a href="#">dano.malik </a>
                </span>
                <span className="txt-site txt-primary txt-10">
                  / 8 GB Memory / 50 GB Disk / SGP1
                </span>
                <span className="txt-site txt-primary txt-10">
                  Ubuntu 19.04 x64
                </span>
              </div>
              <div className="width width-400px">
                <BorderLinearProgress variant="determinate" value={30} valueBuffer={500} />
              </div>
            </div>
            <div className="col-3 content-right">
              <div>
                <label className="switch green">
                  <input type="checkbox" />
                  <span className="slider round status-yes-no" />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-15px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Progress Bar
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        <div className="padding-15px">
          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
            Linear Bar Determinate
          </div>
        	<BorderLinearProgress variant="determinate" value={50} valueBuffer={500} />
        </div>

        <div className="padding-15px">
          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
            Linear Bar Undeterminate
          </div>
        	<BorderLinearProgress />
        </div>

        <div className="padding-15px">
          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
            Circular Bar Determinate
          </div>
          <CircularProgress variant="determinate" value={70} />
        </div>

        <div className="padding-15px">
          <div className="txt-site txt-14 txt-bold txt-main padding-5px">
            Circular Bar Undeterminate
          </div>
          <CircularProgress />
        </div>

      </div>
    )
  }

}

export default Pages