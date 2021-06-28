import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function App() {
		return (
			<div>
				<DndProvider backend={HTML5Backend}>
					Ahuy
				</DndProvider>
			</div>
		)
}

export default App