import React, {Component} from 'react'
import Container from './Container'
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
            }
          ]
      }
    }

    render() {
        return (
			<div className="main-content">
				<div className="padding-5px">
                    <DndProvider backend={HTML5Backend}>
                        <Container data={this.state.data} />
                    </DndProvider>
                </div>
			</div>
		)
    }
}

export default Pages