import React, { Component } from 'react'
import { BrowserRouter as Router, HashRouter, Redirect } from "react-router-dom"
import logo from './../../assets/img/daya-logo.png'

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
          <div 
            className="app-login background-dark-grey">

            <div className="login-small">

              <div className="logo-faded">
                <div 
                  className="image image-circle background-white border-all" 
                  style={{margin: "auto"}}>
                  <img src={logo} alt=""></img>
                </div>
              </div>

              <div className="margin-10px grid grid-2x">
                <div className="col-1">
                  <div className="txt-site txt-16 txt-bold txt-main">
                    Sign In
                  </div>
                </div>
                <div className="col-2 content-right">
                  <div className="post-top">
                    <a href="/#" className="txt-site txt-10 txt-bold txt-underline-hover color-red">
                      Create Account
                    </a>
                    <span style={{padding: '2px'}} />
                    <a href="/#" className="txt-site txt-10 txt-bold txt-underline-hover color-black">
                      Insted?
                    </a>
                  </div>
                </div>
              </div>

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
                        Trouble signing in?
                      </a>
                    </div>
                  </div>

                  <div className="margin-15px">
                    {/* <NavLink to="/home"> */}
                      <input 
                        type="submit" 
                        value="Sign In"
                        className="btn btn-width-all background-blue"></input>
                    {/* </NavLink> */}
                  </div>
                  <div className="txt-site txt-12 txt-primary txt-center">
                      or
                  </div>
                  <div className="margin-15px">
                    <button 
                      type="button"
                      className="btn btn-width-all btn-pos">
                      <span className="fab fa-lg fa-google" /> Sign In With Google
                    </button>
                  </div>
              </form>

            </div>

          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Login