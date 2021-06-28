import React, { Component } from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'

const today = new Date();

class Pages extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
  	
  	const randomValues = getRange(1000).map(index => {
	    return {
	      date: shiftDate(today, -index),
	      count: getRandomInt(1, 3),
	    };
	  });

	  function shiftDate(date, numDays) {
		  const newDate = new Date(date);
		  newDate.setDate(newDate.getDate() + numDays);
		  return newDate;
		}

		function getRange(count) {
		  return Array.from({ length: count }, (_, i) => i);
		}

		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		return (
			<div className="main-content">
				<div className="padding-15px">

					<h1>
						Calendar Heatmap
					</h1>

					<div className="padding-10px"></div>

					<CalendarHeatmap
		        startDate={shiftDate(today, -400)}
		        endDate={today}
		        values={randomValues}
		        classForValue={value => {
		          if (!value) {
		            return 'color-empty';
		          }
		          return `color-github-${value.count}`;
		        }}
		        tooltipDataAttrs={value => {
		          return {
		            'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
		              value.count
		            }`,
		          };
		        }}
		        showWeekdayLabels={false}
		        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
		      />

		      <ReactTooltip />

					<div className="padding-15px"></div>

					<CalendarHeatmap
					  startDate={new Date('2019-01-01')}
					  endDate={new Date('2019-12-31')}
					  values={[
					    { date: '2019-01-01' },
					    { date: '2019-01-10' },
					    { date: '2019-01-20' },
					    { date: '2019-01-30' },
					    // ...and so on
					  ]}
					/>

				</div>
			</div>
		)
	}

}

export default Pages