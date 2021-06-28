import React, { Component } from 'react'
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import CardPiechart from '../cards/Piechart'
import CardPercentage from '../cards/Percentage'
import CardStatistic from '../cards/Statistic'
import CardBarchart from '../cards/Barchart'
import CardLinechart from '../cards/Linechart'

const ReactGridLayout = WidthProvider(RGL);

class Pages extends Component {

	static defaultProps = {
    className: "layout",
    items: 8,
    rowHeight: 50,
    onLayoutChange: function() {},
    cols: 6
	};

  constructor (props) {
    super(props)
    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      return (
        <div key={i} className="no-margin">
          <CardStatistic />
        </div>
      );
    });
  }

  generateLayout() {
    // const p = this.props;
    // return _.map(new Array(p.items), function(item, i) {
    //   const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
    //   // const y = 26;
    //   return {
    //     // x: (i * 2) % 12,
    //     // y: Math.floor(i / 12) * y,
    //     x: (i * 2) % 6,
    //     y: 0,
    //     w: 2,
    //     h: 4.2,
    //     i: i.toString()
    //   };
    // });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }


  render () {

		return (
			<div className="main-content">

        <div className="margin-bottom-15px">
        	
        	<div className="grid grid-2x padding-15px">
	          <div className="col-1">
	            <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
	              Grid Layout
	            </div>
	          </div>
	          <div className="col-2 content-right"></div>
	        </div>

	        <ReactGridLayout
	        	style={{
	        		height: "auto", 
	        		padding: "0 0", 
	        		margin: "0 0",
	        		width: "100%"
	        	}}
					  layout={this.state.layout}
					  onLayoutChange={this.onLayoutChange}
					  {...this.props}>
            
            <div 
              key={11} 
              data-grid={{ w: 2, h: 4.2, x: 0, y: 0 }}
              className="no-margin">
              <CardStatistic />
            </div>

            <div 
              key={12} 
              data-grid={{ w: 2, h: 4.2, x: 2, y: 0 }}
              className="no-margin">
              <CardStatistic />
            </div>  

            <div 
              key={13} 
              data-grid={{ w: 2, h: 4.2, x: 4, y: 0 }}
              className="no-margin">
              <CardPercentage />
            </div>


            <div 
              key={21} 
              data-grid={{ w: 2, h: 7.6, x: 0, y: 2 }}
              className="no-margin">
              <CardPiechart />
            </div>

            <div 
              key={22} 
              data-grid={{ w: 2, h: 7.6, x: 2, y: 2 }}
              className="no-margin">
              <CardPiechart />
            </div>  

            <div 
              key={23} 
              data-grid={{ w: 2, h: 7.6, x: 4, y: 2 }}
              className="no-margin">
              <CardPiechart />
            </div>


            <div 
              key={31} 
              data-grid={{ w: 3, h: 7.5, x: 0, y: 6 }}
              className="no-margin">
              <CardBarchart />
            </div>

            <div 
              key={32} 
              data-grid={{ w: 3, h: 7.5, x: 4, y: 6 }}
              className="no-margin">
              <CardLinechart />
            </div>

					</ReactGridLayout>

	      </div>

	    </div>
	  )
	}

  // cardAll = (val) => {
  //   let dt = []

  //   for (let index = 0; index < val; index++) {
  //     if (index % 2 == 1) { 
  //       dt.push(
  //         <div key={index}>
  //           <CardPercentage />
  //         </div>
  //       )
  //     } else {
  //         dt.push(
  //         <div key={index}>
  //           <CardStatistic />
  //         </div>
  //       )
  //     }
  //   }

  //   return dt
  // }

  // cardPie = (val) => {
  //   let dt = []

  //   for (let index = 0; index < val; index++) {
  //     dt.push(
  //       <div key={index}>
  //         <CardPiechart />
  //       </div>
  //     )
  //   }

  //   return dt
  // }

  // cardPercentage = (val) => {
  //   let dt = []

  //   for (let index = 0; index < val; index++) {
  //     dt.push(
  //       <div key={index}>
  //         <CardPercentage />
  //       </div>
  //     )
  //   }

  //   return dt
  // }

  // cardStatistic = (val) => {
  //   let dt = []

  //   for (let index = 0; index < val; index++) {
  //     dt.push(
  //       <div key={index}>
  //         <CardStatistic />
  //       </div>
  //     )
  //   }

  //   return dt
  // }

}

export default Pages