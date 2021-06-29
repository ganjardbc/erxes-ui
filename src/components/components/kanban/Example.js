import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
const style = {
  width: '100%',
}
const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
        status: 'BU-UX'
      },
      {
        id: 2,
        text: 'Make it generic enough',
        status: 'BU-UX'
      },
      {
        id: 3,
        text: 'Write README',
        status: 'BU-UX'
      },
      {
        id: 4,
        text: 'Create some examples',
        status: 'BU-UX'
      },
      {
        id: 5,
        text:
          'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        status: 'BU-UX'
      },
      {
        id: 6,
        text: '???',
        status: 'BU-UX'
      },
      {
        id: 7,
        text: 'PROFIT',
        status: 'BU-UX'
      },
    ])
    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex]
        setCards(
          update(cards, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
          }),
        )
      },
      [cards],
    )
    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          status={card.status}
          moveCard={moveCard}
        />
      )
    }
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    )
  }
}
export default Container
