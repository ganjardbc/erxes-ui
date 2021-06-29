import React, { Component } from 'react'

import CardPercentage from '../../components/cards/Percentage'
import CardPiechart from '../../components/cards/Piechart'
import CardLinechart from '../../components/cards/Linechart'
import CardBarchart from '../../components/cards/Barchart'
import CardStatistic from '../../components/cards/Statistic'


class Home extends Component {

  constructor() {
    super()
    this.state = {}
  }

  cardPercentage = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardPercentage></CardPercentage>
      )
    }

    return dt
  }

  cardLinechart = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardLinechart></CardLinechart>
      )
    }

    return dt
  }

  cardBarchart = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardBarchart></CardBarchart>
      )
    }

    return dt
  }

  cardPie = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardPiechart></CardPiechart>
      )
    }

    return dt
  }

  cardStatistic = (val) => {
    let dt = []

    for (let index = 0; index < val; index++) {
      dt.push(
        <CardStatistic></CardStatistic>
      )
    }

    return dt
  }

  render() {
  	return (
  		
  		<div className="main-content">

  			<div className="display-flex-mobile">
          { this.cardPie(3) }
        </div>

        <div className="display-flex-mobile">
          { this.cardStatistic(2) }
          { this.cardPercentage(2) }
        </div>

        <div className="display-flex-mobile">
          { this.cardBarchart(1) }
          { this.cardLinechart(1) }
        </div>

  		</div>

  	)
  }

}

export default Home