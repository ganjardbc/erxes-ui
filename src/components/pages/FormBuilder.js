import React, { Component } from 'react'
// import FormBuilders from '../components/forms/FormBuilders'
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
// import FormBuilder from '@langleyfoxall/react-dynamic-form-builder';

import Form from "react-jsonschema-form"

// require('bootstrap')

const schema = {
  title: "Todo",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  type: "object",
  required: [
    "firstName",
    "lastName"
  ],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
      default: "Chuck"
    },
    lastName: {
      type: "string",
      title: "Last name"
    },
    age: {
      type: "integer",
      title: "Age"
    },
    bio: {
      type: "string",
      title: "Bio"
    },
    password: {
      type: "string",
      title: "Password",
      minLength: 3
    },
    telephone: {
      type: "string",
      title: "Telephone",
      minLength: 10
    }
  },
}

const form = {
	firstName: "Chuck",
	lastName: "Norris",
	age: 75,
	bio: "Roundhouse kicking asses since 1940",
	password: "noneed"
}

const ui = {
  firstName: {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  age: {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)"
  },
  bio: {
    "ui:widget": "textarea"
  },
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  date: {
    "ui:widget": "alt-datetime"
  },
  telephone: {
    "ui:options": {
      "inputType": "tel"
    }
  }
}


// const mainData2 = [
// 	{
// 		label: "Full Name",
// 		type: "text",
// 		style: "1",
// 		value: "",
// 		validationRules: [
// 			{
// 				rule: "required",
// 				message: "Please enter a full name"
// 			}
// 		]
// 	},
// 	{
// 		label: "E-mail",
// 		type: "email",
// 		style: "1",
// 		value: "",
// 		placeholder: "full-name@email.com",
// 		validationRules: [
// 			{
// 				rule: "required",
// 				message: "Please enter a valid email"
// 			}
// 		]
// 	},
// 	{
// 		label: "Private Account",
// 		type: "toggle",
// 		style: "2",
// 		validationRules: []
// 	}
// ]


class Pages extends Component {

  constructor () {
    super()
    this.state = {
    	schemaData: schema,
    	formData: form,
    	uiData: ui,
    	schemaReceive: JSON.stringify(schema, null, 2),
    	formReceive: JSON.stringify(form, null, 2),
    	uiReceive: JSON.stringify(ui, null, 2),
    	status: true,
    	result: ''
    }
  }

  IsJsonString (str) {
    try {
      JSON.parse(str);
    } catch (e) {
      // console.log(e)
      return false;
    }
    return true;
  }

  onSubmit = (event) => {

  	// untuk keperluan submit
  	// var jsn = event.formData

  	// untuk result
  	var str = JSON.stringify(event.formData, null, 2)
  	this.setState({result: str})
  }

  onLog = (event) => {
  	console.log(event)
  }

  handleSchema = (event) => {
    if (this.IsJsonString(event.target.value)) { 
      this.setState({
        schemaData: JSON.parse(event.target.value),
        status: true
      })
    } else {
      this.setState({
        schemaData: {},
        status: false
      })
    }
    this.setState({schemaReceive: event.target.value})
  }

  handleForm = (event) => {
    if (this.IsJsonString(event.target.value)) { 
      this.setState({
        formData: JSON.parse(event.target.value),
        status: true
      })
    } else {
      this.setState({
        formData: {},
        status: false
      })
    }
    this.setState({formReceive: event.target.value})
  }

  handleUi = (event) => {
    if (this.IsJsonString(event.target.value)) { 
      this.setState({
        uiData: JSON.parse(event.target.value),
        status: true
      })
    } else {
      this.setState({
        uiData: {},
        status: false
      })
    }
    this.setState({uiReceive: event.target.value})
  }

  handleResult = (event) => {
    this.setState({result: event.target.value})
  }

  handleAdd = (event) => {

    if (event.keyCode === 9) {
      event.preventDefault()

      var val = event.target.value
      var start = event.target.selectionStart
      var end = event.target.selectionEnd

      event.target.value = val.substring(0, start) + '\t' + val.substring(end)

      event.target.selectionStart = event.target.selectionEnd = start + 1

      return false
    }
  }

  render () {
		return (
			<div className="main-content">

				<div>
					
					<div className="grid grid-2x grid-mobile-none">
              <div className="col-1">

                <div className="card no-hover">
                  <div className="padding-15px">
                  	<div className="txt-site txt-11 txt-bold margin-bottom-5px">
                  		JSON Schema
                  	</div>
                    <textarea
                      className="txt txt-sekunder" 
                      value={ this.state.schemaReceive }
                      onChange={ this.handleSchema }
                      onKeyDown={ this.handleAdd }
                      placeholder="Write Json Code"
                      style={{height: '300px', resize: "none"}} />
                  </div>
                </div>

                {/*<div className="padding-15px margin-top">
                	<div className="txt-site txt-11 txt-bold margin-bottom-5px">
                		JSON UI
                	</div>
                  <textarea
                    className="txt txt-sekunder" 
                    value={ this.state.uiReceive }
                    onChange={ this.handleUi }
                    onKeyDown={ this.handleAdd }
                    placeholder="Write Json Code"
                    style={{height: '300px', resize: "none"}} />
                </div>*/}

                <div className="margin-top-10px"></div>

                <div className="card no-hover">
                  <div className="padding-15px">
                  	<div className="txt-site txt-11 txt-bold margin-bottom-5px">
                  		JSON Form
                  	</div>
                    <textarea
                      className="txt txt-sekunder" 
                      value={ this.state.formReceive }
                      onChange={ this.handleForm }
                      onKeyDown={ this.handleAdd }
                      placeholder="Write Json Code"
                      style={{height: '200px', resize: "none"}} />
                  </div>
                </div>

              </div>
              <div className="col-2">

                <div className="card no-hover">
  	              <div className="padding-15px margin-15px">

  	              	{ (this.state.status === true) ? (
  		              		<div>
  			                  <Form 
  			                  	schema={this.state.schemaData} 
  			                  	formData={this.state.formData}
  			                  	uiData={this.state.uiData}
  			                  	onSubmit={this.onSubmit} />
  			                </div>
  	              		) : (
  	              			<div>Write the right JSON Schema Form</div>
  	              		) 
  	              	}

                	</div>
                </div>


              </div>
           </div>

           <div>
           	<div className="card no-hover">
           		<div className="padding-15px">
                	<div className="txt-site txt-11 txt-bold margin-bottom-5px">
                		JSON Result
                	</div>
                  <textarea
                    className="txt txt-sekunder" 
                    value={ this.state.result }
                    onChange={ this.handleResult }
                    onKeyDown={ this.handleAdd }
                    placeholder="Write Json Code"
                    style={{height: '400px', resize: "none"}} />
              </div>
           	</div>
           </div>

				</div>

	    </div>
	  )
	}

}

export default Pages