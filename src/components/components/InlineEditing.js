import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MUIDataTable from "mui-datatables"

import ButtonAction from '../components/forms/ButtonAction'
import InlineEditing from '../components/forms/InlineEditing'

var ct = require("../../modules/custom/customTable")

class Pages extends Component {

  constructor () {
    super()
    this.state = {
    	clEditAble: '',
    	editAble: false,
    }
  }

  opEditAble = () => {
  	if (this.state.editAble === false) { 
  		this.setState({
  			clEditAble: 'edit-able',
  			editAble: true, 
  		})
  	} else {
  		this.setState({
  			clEditAble: '',
  			editAble: false, 
  		})
  	}
  }

  getMuiTheme = () => createMuiTheme(ct.customTable());

  options = ct.customOptions()

  columns = [
      "No", 
      "Title", 
      "Title", 
      "Title", 
      "Title", 
      "Title", 
      // {
      //   name: "",
      //   options: {
      //     sort: false,
      //     customBodyRender: () => {
      //       return (
      //         <div style={{width: '80px'}}>
      //           <ButtonAction 
      //           	return={this.opEditAble}
			   //      		now={{
			   //      			'btnColor': 'btn btn-small-circle background-red',
			   //      			'btnIcon': 'fa fa-lw fa-pencil-alt',
			   //      			'btnText': ''
			   //      		}}
			   //      		then={{
			   //      			'btnColor': 'btn btn-small-circle background-green',
			   //      			'btnIcon': 'fa fa-lw fa-check',
			   //      			'btnText': ''
			   //      		}} />
      //         </div>
      //       )
      //     }
      //   }
      // }
  ]

  render () {

  	const data = [
	    [
	    	"1", 
	    	<InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
	    	<InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
	    	<InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
	    	<InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
	    	<InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
	    	<InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />
	    ],
      [
        "1", 
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />
      ],
      [
        "1", 
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />
      ],
      [
        "1", 
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />,
        <InlineEditing 
          text={'xxxx'} 
          api={'https://example.com/api'} />
      ],
	  ]

		return (
			<div className="main-content">

        <div className="padding-15px">
        	
        	<div className="grid grid-2x margin-bottom-20px">
	          <div className="col-1">
	            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
	              Inline Editing
	            </div>
	          </div>
	          <div className="col-2 content-right"></div>
	        </div>


          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title={"Table"}
              data={data}
              columns={this.columns}
              options={this.options}
            />
          </MuiThemeProvider>

	      </div>

	    </div>
	  )
	}

}

export default Pages