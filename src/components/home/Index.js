import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, HashRouter, Redirect } from "react-router-dom"


class Home extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
  	return (
  		
  		<div className="main-content background-green" style={{height: "2000px"}}>
  			Homes
  		</div>

  	)
  }

}

export default Home