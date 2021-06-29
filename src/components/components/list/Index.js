import React from 'react'
import Example from './Example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function App() {
		return (
			<div className="main-content">
				<div className="padding-15px">
					<h1>Moveable List</h1>
				</div>
				<div className="padding-15px">
					<DndProvider backend={HTML5Backend}>
						<Example />
					</DndProvider>
				</div>
			</div>
		)
}

export default App