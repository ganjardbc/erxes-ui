import React, { Component } from 'react'
import DualListBox from 'react-dual-listbox'
import 'react-dual-listbox/lib/react-dual-listbox.css'

const options = [
    { value: 'one', label: 'Option One' },
    { value: 'two', label: 'Option Two' },
]

const options2 = [
        {
            label: 'Earth',
            options: [
                { value: 'luna', label: 'Moon' },
            ],
        },
        {
            label: 'Mars',
            options: [
                { value: 'phobos', label: 'Phobos' },
                { value: 'deimos', label: 'Deimos' },
            ],
        },
        {
            label: 'Jupiter',
            options: [
                { value: 'io', label: 'Io' },
                { value: 'europa', label: 'Europa' },
                { value: 'ganymede', label: 'Ganymede' },
                { value: 'callisto', label: 'Callisto' },
            ],
        },
]

class Pages extends Component {

  constructor (props) {
    super(props)
    this.state = {
    	selected: ['one'],
    	selected2: ['one'],
    }
  }

  onChange = (selected) => {
    this.setState({ selected });
  }

  onChange2 = (selected2) => {
    this.setState({ selected2 });
  }

  render () {
  	
  	const { selected } = this.state
  	const { selected2 } = this.state

		return (
			<div className="main-content">
				<div className="padding-15px">
					<DualListBox
            options={options}
            selected={selected}
            onChange={this.onChange}
            alignActions="top"
          />
          <div className="padding-15px"></div>
          <DualListBox
            options={options2}
            selected={selected2}
            onChange={this.onChange2}
            canFilter
            filterCallback={(option, filterInput) => {
                if (filterInput === '') {
                    return true;
                }

                return (new RegExp(filterInput, 'i')).test(option.label);
            }}
            filterPlaceholder="Filter..."
          />
				</div>
			</div>
		)
	}

}

export default Pages