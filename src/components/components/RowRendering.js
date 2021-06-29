import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MUIDataTable from "mui-datatables-bitozen"

var ct = require("../../modules/custom/customTable")

class Pages extends Component {

  constructor () {
    super()
    this.state = {}
  }

  getMuiTheme = () => createMuiTheme(ct.customTable());

  options = ct.customOptions3()

  columns = [
      "No", 
      "Gambar",  
      "Judul",
      "Berat",
      "Satuan",
      "Harga",
      {
        name: "",
        options: {
          sort: false,
          customBodyRender: () => {
            return (
              <div style={{width: '80px'}}>
                <button className="btn btn-green btn-small-circle margin-right-5px">
                  <i className="fa fa-lw fa-pencil-alt" />
                </button>
                <button className="btn btn-red btn-small-circle margin-right-5px">
                  <i className="fa fa-lw fa-trash-alt" />
                </button>
              </div>
            )
          }
        }
      }
  ]

  data = [
    [
      "1", 
      <div 
        className="image image-50px image-radius background-blue"
        style={{
          backgroundImage: 'url("data:image/jpeg;base64,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")',
          width: '50px'
        }}></div>, 
      <div className="txt-site txt-11 txt-bold color-green">
        Kopi Hitam
      </div>, 
      <div className="txt-site txt-11 txt-thin txt-main">
        400 GR
      </div>, 
      <div className="txt-site txt-11 txt-thin txt-main">
        Bungkus
      </div>, 
      <div className="txt-site txt-11 txt-bold color-red">
        Rp. 140.000
      </div>, 
    ],
    [
      "2", 
      <div 
        className="image image-50px image-radius background-blue"
        style={{
          backgroundImage: 'url("data:image/jpeg;base64,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")',
          width: '50px'
        }}></div>, 
      <div className="txt-site txt-11 txt-bold color-green">
        White Coffee
      </div>, 
      <div className="txt-site txt-11 txt-thin txt-main">
        250 GR
      </div>, 
      <div className="txt-site txt-11 txt-thin txt-main">
        Bungkus
      </div>, 
      <div className="txt-site txt-11 txt-bold color-red">
        Rp. 90.000
      </div>, 
    ],
  ]

  render () {
		return (
			<div className="main-content">

        <div className="padding-5px">
          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title={"Table"}
              data={this.data}
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