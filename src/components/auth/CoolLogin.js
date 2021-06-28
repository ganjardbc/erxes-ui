import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, HashRouter, Redirect } from "react-router-dom"
import cover from './../../assets/img/cover.png'
import logo from './../../assets/img/daya-logo.png'
import bgLogin from './../../assets/img/bg-login.png'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: false,
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value})
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    // alert('username : ' + this.state.username + ' password : ' + this.state.password)
    event.preventDefault()
    this.setState({redirect: true})
  }

  render() {

    if (this.state.redirect) {
      return <Redirect push to="/home"></Redirect>
    }

    return (
      <HashRouter history={ Router.browserHistory }>
        <div className="main-content">
          <div className="app-login background-dark-grey">
            <div className="login-cool">
              <div className="lc-col-1 padding-20px">

                <div className="display-flex-normal">
                  <div className="image image-circle image-50px background-white border-all">
                    <img src={logo}></img>
                  </div>
                  
                  <div style={{position: 'relative', top: '15px', paddingLeft: '15px'}}>
                    <h1 className="txt-site txt-bold txt-14 txt-main">
                      DDMS
                    </h1>
                  </div>
                </div>

                <p className="txt-site txt-thin txt-11 txt-line txt-primary">
                  Welcome back, please login to your account.
                </p>

                <div className="padding-10px"></div>

                <form onSubmit={this.handleSubmit}>
                  <div className="margin-15px">
                    <div className="margin-bottom-5px txt-site txt-10 txt-main txt-bold">
                      Email or Username
                    </div>
                    <input 
                      type="text" 
                      className="txt txt-sekunder-color"
                      value={this.state.username}
                      onChange={this.handleChangeUsername}
                      required></input>
                  </div>
                  
                  <div className="margin-15px">
                    <div className="margin-bottom-5px txt-site txt-10 txt-main txt-bold">
                      Password
                    </div>
                    <input 
                      type="password" 
                      className="txt txt-sekunder-color"
                      value={this.state.password}
                      onChange={this.handleChangePassword}
                      required></input>
                  </div>

                  <div className="grid grid-2x">
                    <div className="col-1">
                      <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <span className="txt-site txt-10 txt-bold color-black">
                          Remember me
                        </span>
                      </label>
                    </div>
                    <div className="col-2 content-right">
                      <a href="/#" className="txt-site txt-10 txt-bold txt-underline-hover color-red">
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div className="padding-5px"></div>

                  <div className="margin-15px">
                      <input 
                         type="submit" 
                         value="Sign In"
                         className="btn btn-width-all background-blue"></input>
                  </div>

                </form>

                <div className="padding-10px">
                  <div className="txt-site txt-10 txt-primary txt-center">
                      Or sign in with
                  </div>
                </div>

                <div className="margin-top-15px display-flex width width-200px" style={{margin: 'auto'}}>
                  <button className="btn btn-circle btn-grey">
                    <i className="fab fa-lg fa-twitter" />
                  </button>
                  <button className="btn btn-circle btn-grey">
                    <i className="fab fa-lg fa-facebook" />
                  </button>
                  <button className="btn btn-circle btn-grey">
                    <i className="fab fa-lg fa-linkedin" />
                  </button>
                  <button className="btn btn-circle btn-grey">
                    <i className="fab fa-lg fa-google" />
                  </button>
                </div>

                <div className="padding-top-15px">
                  <div className="width width-center" style={{textAlign: 'center'}}>
                    <span className="txt-site txt-10 txt-bold txt-underline-hover color-black">
                      Does'nt have account?
                    </span>
                    <span style={{padding: '2px'}} />
                    <a href="/#" className="txt-site txt-10 txt-bold txt-underline-hover color-red">
                      Create Account
                    </a>
                  </div>
                </div>

              </div>
              <div className="lc-col-2">
                <div className="image image-all" style={{backgroundImage: 'url('+bgLogin+')'}}></div>
                <div className="float-label">
                  Image by <a href="https://dribbble.com/kit8" target="_blank">@Kit8</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Login