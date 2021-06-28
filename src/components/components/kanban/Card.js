import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
  marginBottom: '.5rem',
  cursor: 'move',
}

const Card = ({ id, text, status, index, moveCard }) => {
  const ref = useRef(null)
  
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  
  const opacity = isDragging ? 0 : 1
  
  drag(drop(ref))

  return (
  	<div ref={ref} className="a-k-card" style={{ ...style, opacity }}>
      {text}
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
    </div>
  )
}
export default Card
