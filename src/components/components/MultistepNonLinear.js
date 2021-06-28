import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// steppers
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepContent from '@material-ui/core/StepContent'
import StepLabel from '@material-ui/core/StepLabel'
import StepIcon from '@material-ui/core/StepIcon'
import StepButton from '@material-ui/core/StepButton'
import Button from '@material-ui/core/Button'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

// pages
import Form1 from './pages/Form1'
import Form2 from './pages/Form2'
import Form3 from './pages/Form3'
import Form4 from './pages/Form4'

const styles = theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing.unit
  },
  completed: {
    display: 'inline-block'
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBtottom: theme.spacing.unit
  }
})

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
    completed: {},
  }

  totalSteps = () => getSteps().length

  handleNext = () => {
    let activeStep

    if (this.isLastStep() && !this.allStepsCompleted()) { 
      const steps = getSteps()
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed))
    } else {
      activeStep = this.state.activeStep + 1;
    }

    this.setState({
      activeStep
    })
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step
    })
  }

  handleComplete = () => {
    const {completed} = this.state
    completed[this.state.activeStep] = true
    this.setState({
      completed
    })
    this.handleNext()
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    })
  }

  completedSteps () {
    return Object.keys(this.state.completed).length
  }

  isLastStep () {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted () {
    return this.completedSteps() === this.totalSteps()
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

    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div className="main-content">

        <div className="padding-15px grid grid-2x">
          <div className="col-1">
            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
              Multi Step Non Linear
            </div>
          </div>
          <div className="col-2 content-right"></div>
        </div>

        <div>
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <Stepper nonLinear activeStep={activeStep} orientation="horizontal">
              {steps.map((label, index) => (

                <Step key={label}>
                  <StepButton 
                    onClick={this.handleStep(index)}
                    completed={this.state.completed[index]}>
                    {label}
                  </StepButton>
                </Step>

              ))}
            </Stepper>
          </MuiThemeProvider>
        </div>

        <div className="padding-15px">
          
          {this.allStepsCompleted() ? (
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
                <div className="col-1">
                  {activeStep !== steps.length && (this.state.completed[this.state.activeStep] ? (
                    <div>
                      Step {activeStep + 1} already completed
                    </div>
                  ) : (
                    <div>
                      <button
                        className="btn btn-green"
                        onClick={this.handleComplete}>
                        {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'COMPLETE STEPS'}
                      </button>

                      {/*<Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleComplete}>
                        {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Steps'}
                      </Button>*/}

                    </div>
                  ))}
                </div>
                <div className="col-2 content-right">
                  <button
                    className="btn btn-primary"
                    disabled={activeStep === 0}
                    onClick={this.handleBack}>
                    BACK
                  </button>
                  <button
                    style={{marginLeft: "10px"}}
                    className="btn btn-primary"
                    onClick={this.handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'NEXT'}
                  </button>

                  {/*<Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="container"
                    color="primary"
                    onClick={this.handleNext}>
                    Next
                  </Button>*/}

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