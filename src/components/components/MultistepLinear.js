import React, { Component } from 'react'

// steppers
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

// pages
import Form1 from './pages/Form1'
import Form2 from './pages/Form2'
import Form3 from './pages/Form3'
import Form4 from './pages/Form4'

function getSteps() {
  return [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
  ]
}

function getStepContent(step) {  
  switch (step) {
    case 0:
      return (
        <Form1 />
      )
    case 1:
      return (
        <Form2 />
      )
    case 2:
      return (
        <Form3 />
      )
    case 3:
      return (
        <Form4 />
      )
    default:
      return 'Unknown step'
  }
}


class Pages extends Component {

  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step
    })
  }

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MuiStepIcon: {
        active: {
          color: '#e74c3c !important'
        },
        completed: {
          color: '#2ecc71 !important'
        }
      }
    }
  })

  render() {

    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div className="main-content">

        <div className="padding-15px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Multi Step Linear
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        <div>
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <Stepper Linear activeStep={activeStep}>
              {steps.map((label, index) => (

                <Step key={label}>
                  <StepButton 
                    onClick={this.handleStep(index)}>
                    {label}
                  </StepButton>
                  {/*<StepLabel>{label}</StepLabel>*/}
                </Step>

              ))}
            </Stepper>
          </MuiThemeProvider>
        </div>

        <div className="padding-15px">
          
          {this.state.activeStep === steps.length ? (
            <div>
              <div className="padding-bottom-15px">All steps completed</div>
              <div>
                <button 
                  onClick={this.handleReset}
                  className="btn btn-green">
                  RESET
                </button>
              </div>
            </div>
          ) : (
            <div>

              <div className="padding-bottom-15px">
                {getStepContent(activeStep)}
              </div>

              <div className="grid grid-2x">
                <div className="col-1"></div>
                <div className="col-2 content-right">
                  <button
                    className="btn btn-primary"
                    disabled={activeStep === 0}
                    onClick={this.handleBack}>
                    BACK
                  </button>
                  <button
                    style={{marginLeft: "10px"}}
                    className="btn btn-green"
                    onClick={this.handleNext}>
                    {activeStep === steps.length - 1 ? 'FINISH' : 'NEXT'}
                  </button>

                </div>


              </div>
              
            </div>
          )}

        </div>

      </div>
    )
  }


}

export default Pages