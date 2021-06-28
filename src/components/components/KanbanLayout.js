import React, { Component } from 'react'

class Pages extends Component {

  constructor () {
    super()
    this.state = {}
  }

  createCard = (type, title, status) => {

    if (type === 'text') {
      var dt = <div className="margin-bottom-10px txt-site txt-12 txt-bold">{title}</div>
    }

    if (type === 'image') {
      var dt = <div>
          <div className="image image-middle image-radius background-dark-grey"></div>
          <div className="margin-10px txt-site txt-12 txt-bold">{title}</div>
        </div>
    }

    return (
    <div className="a-k-card background-white shadow">
      {dt}
      <div className="grid grid-2x">
        <div className="col-1">
          <button className="btn btn-small-circle btn-grey">
            <i className="fa fa-lw fa-bookmark color-green" />
          </button>
          <button className="btn btn-small-circle btn-grey">
            <i className="fa fa-lw fa-arrow-up color-orange" />
          </button>
          <button className="btn btn-small-circle btn-grey">
            <i className="fa fa-lw fa-ellipsis-h" />
          </button>
        </div>
        <div className="col-2 content-right">
          <div className="txt-site txt-top">{status}</div>
        </div>
      </div>
    </div>)
  }

  render () {
		return (
			<div className="main-content">

        <div className="card small-margin no-radius border-all">

          <div className="grid grid-2x margin-bottom-10px">
            <div className="col-1">
              <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
                Kanban Layout
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

        </div>

        <div className="padding-left-5px padding-right-5px">
          <div className="app-kanban">


            <div className="a-k-list">
              <div className="a-k-board">
                <div className="a-k-b-top">
                  <div className="grid grid-2x">
                    <div className="col-1">
                      TODO LIST
                    </div>
                    <div className="col-2 content-right">
                      <button className="btn btn-small-circle btn-grey">
                        <i className="fa fa-lw fa-plus" />
                      </button>
                      <button className="btn btn-small-circle btn-grey">
                        <i className="fa fa-lw fa-ellipsis-h" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="a-k-b-mid change-scrollbar background-dark-grey">
                  {this.createCard('image', 'Example cards..', 'BU-UX')}
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                  {this.createCard('image', 'Example cards..', 'BU-UX')}
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                </div>
              </div>
            </div>

            <div className="a-k-list">
              <div className="a-k-board">
                <div className="a-k-b-top">
                  <div className="grid grid-2x">
                    <div className="col-1">
                      IN PROGRESS
                    </div>
                    <div className="col-2 content-right">
                      <button className="btn btn-small-circle btn-grey">
                        <i className="fa fa-lw fa-plus" />
                      </button>
                      <button className="btn btn-small-circle btn-grey">
                        <i className="fa fa-lw fa-ellipsis-h" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="a-k-b-mid change-scrollbar background-dark-grey">
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                </div>
              </div>
            </div>

            <div className="a-k-list">
              <div className="a-k-board">
                <div className="a-k-b-top">
                  <div className="grid grid-2x">
                    <div className="col-1">
                      DONE
                    </div>
                    <div className="col-2 content-right">
                      <button className="btn btn-small-circle btn-grey">
                        <i className="fa fa-lw fa-plus" />
                      </button>
                      <button className="btn btn-small-circle btn-grey">
                        <i className="fa fa-lw fa-ellipsis-h" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="a-k-b-mid change-scrollbar background-dark-grey">
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                  {this.createCard('text', 'Example cards..', 'BU-UX')}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
	}

}

export default Pages