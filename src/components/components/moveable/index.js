import React, {Component} from 'react'
import Example from './Example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Pages extends Component {

    constructor (props) {
      super(props)
      this.state = {
          data: [
            {
              id: 1
            },
            {
              id: 2
            },
            {
              id: 3
            },
            {},
            // {
            //   id: 1,
            //   text: 'Write a cool JS library',
            // },
            // {
            //   id: 2,
            //   text: 'Make it generic enough',
            // },
            // {
            //   id: 3,
            //   text: 'Write README',
            // },
            // {
            //   id: 4,
            //   text: 'Create some examples',
            // },
            // {
            //   id: 5,
            //   text:
            //     'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            // },
            // {
            //   id: 6,
            //   text: '???',
            // },
            // {
            //   id: 7,
            //   text: 'PROFIT',
            // },
          ]
      }
    }

    render() {
        return (
			<div className="main-content">
				<div className="padding-15px">
				    <h1>Moveable Component</h1>
                <div class="padding-top-15px">
                    <DndProvider backend={HTML5Backend}>
                        <Example data={this.state.data} />
                    </DndProvider>
                </div>
            </div>
			</div>
		)
    }
}

export default Pages