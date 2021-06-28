import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
const style = {
  place: {
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  container: {
    width: 'calc(25% - 2rem)',
    height: '300px',
    border: '0.2rem dashed gray',
    padding: '0.5rem 1rem',
    margin: '1rem'
  }
}
const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {},
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
          moveCard={moveCard}
        />
      )
    }
    const renderContainer = () => {
      return (
        <div style={style.container}></div>
      )
    }
    const renderAdd = () => {
      return (
        <div style={style.container}>
          <div style={{
            lineHeight: '300px',
            textAlign: 'center'
          }}>
            <i class="fa fa-2x fa-plus"></i>
          </div>
        </div>
      )
    }
    return (
      <>
        <div style={style.place}>
          {cards.map((card, i) => {
            var item
            (card.id) 
            ? item = renderCard(card, i)
            : item = renderAdd()
            return item
          })}
        </div>
      </>
    )
  }
}
export default Container
