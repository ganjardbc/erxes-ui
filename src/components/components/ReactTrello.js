import React, { Component } from 'react'
import Board from 'react-trello'

const cardStyle = {
  borderRadius: 7, 
  backgroundColor: '#f5f5f5',
  boxShadow: '0 0 0 0 #fff', 
  border: '0px rgba(0,0,0,0.1) solid',
  marginBottom: 10
}

const bordStyle = {
  borderRadius: 5, 
  backgroundColor: "#fff",
  border: '1px rgba(0,0,0,0.1) solid',
}

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      style: bordStyle,
      cards: [
        {
          id: 'Card1', 
          title: 'Write Blog', 
          description: 'Can AI make memes', 
          label: '30 mins',
          cardStyle: cardStyle,
        },
        {
          id: 'Card2', 
          title: 'Pay Rent', 
          description: 'Transfer via NEFT', 
          label: '5 mins', 
          cardStyle: cardStyle,
          metadata: {
            sha: 'be312a1'
          }
        }
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      style: bordStyle,
      cards: []
    }
  ]
}

class Pages extends Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
		return (
			<div className="main-content">

        <div className="padding-15px">
          <div className="grid grid-2x margin-bottom-10px">
            <div className="col-1">
              <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
                React Layout
              </div>
            </div>
            <div className="col-2 content-right">
              <button className="btn btn-grey btn-circle">
                <i className="far fa-lw fa-star" />
              </button>
              <button className="btn btn-grey">
                <i className="far fa-lw fa-clock" /> 0 Days Remaining
              </button>
              <button className="btn btn-grey">
                Complete Sprint
              </button>
              <button className="btn btn-grey btn-circle">
                <i className="fa fa-lw fa-share-alt" />
              </button>
              <button className="btn btn-grey btn-circle">
                <i className="fa fa-lw fa-ellipsis-h" />
              </button>
            </div>
          </div>

          <div className="grid grid-2x-colmin8">

            <div className="col-1 display-flex-normal">
              
              <form action="/#">
                <div className="input-group input-grey input-border" style={{marginRight: "10px", width: '300px'}}>
                  <input 
                    className="txt txt-transparant txt-no-radius txt-no-shadow" 
                    name="search" 
                    placeholder="Search.." 
                    required />
                  <button 
                    type="submit" 
                    className="btn btn-all btn-no-radius btn-grey">
                    <i className="fa fa-lg fa-search" />
                  </button>
                </div>
              </form>

              <button className="btn btn-grey">
                Only My Issue
              </button>

              <button className="btn btn-grey">
                Recently Updated
              </button>
            </div>

            <div className="col-2 content-right">
              
              <div className="image-group">
                <div className="i-g-list">
                  <div className="image image-circle">
                    <i className="icn fa fa-1x fa-user-circle" />
                  </div>
                </div>
                <div className="i-g-list">
                  <div className="image image-circle">
                    <i className="icn fa fa-1x fa-user-circle" />
                  </div>
                </div>
                <div className="i-g-list">
                  <div className="image image-circle">
                    <i className="icn fa fa-1x fa-user-circle" />
                  </div>
                </div>
                <div className="i-g-list">
                  <div className="image image-circle">
                    <i className="icn fa fa-1x fa-user-circle" />
                  </div>
                </div>
                <div className="i-g-list">
                  <div className="image image-circle">
                    <i className="icn fa fa-1x fa-plus-circle" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="padding-top-10px">
            <Board 
              data={data}
              canAddLanes={true}
              editable={true}
              collapsibleLanes={true}
              draggable={true}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                padding: '0px',
                height: 'auto'
              }} />
          </div>

        </div>

      </div>
    )
	}

}

export default Pages