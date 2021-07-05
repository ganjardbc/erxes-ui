import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
import CardSimpleLineChart from '../pages/FESimpleLineChart'

class CardTotalCost extends React.Component {
    render () {
        return (
            <div className="card no-margin no-hover no-radius border-all">
                <div className="padding-15px display-flex space-between border-bottom" style={{paddingTop: 5, paddingBottom: 5}}>
                    <div>
                        <div className="post-top txt-site txt-main txt-10 txt-bold" style={{marginRight: 5}}>
                            Total Cost
                        </div>
                    </div>
                    <button className="btn btn-post btn-small">
                        View Report 
                    </button>
                </div>
                <div className="display-flex column center" style={{ height: 280 }}>
                    <div style={{paddingRight: 10}}>
                        <CardSimpleLineChart />
                    </div>
                </div>
            </div>
        )
    }
}

class CardVehicle extends React.Component {
    render () {
        return (
            <div className="card no-margin no-hover no-radius border-all">
                <div className="padding-15px display-flex space-between border-bottom">
                    <div>
                        <div className="post-top txt-site txt-main txt-10 txt-bold">
                            Vehicle Renewal Reminders 
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="padding-15px display-flex column center" style={{ height: 250 }}>
                    <div className="display-flex" style={{height: 50, marginTop: 20, marginBottom: 20}}>
                        <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                            <div className="post-top">
                                <div className="txt-site txt-26 txt-red txt-bold">36</div>
                                <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Overdue</div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                            <div className="post-top">
                                <div className="txt-site txt-26 txt-primary txt-bold">1</div>
                                <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Due Soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardInspections extends React.Component {
    render () {
        return (
            <div className="card no-margin no-hover no-radius border-all">
                <div className="padding-15px display-flex space-between border-bottom">
                    <div>
                        <div className="post-top txt-site txt-main txt-10 txt-bold">
                            Inspections 
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="padding-15px display-flex column center" style={{ height: 250 }}>
                    <div className="display-flex" style={{height: 50, marginTop: 20, marginBottom: 20}}>
                        <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                            <div className="post-top">
                                <div className="txt-site txt-26 txt-red txt-bold">12</div>
                                <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Overdue</div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                            <div className="post-top">
                                <div className="txt-site txt-26 txt-safe txt-bold">7.87%</div>
                                <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Item Failure Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardReminders extends React.Component {
    render () {
        return (
            <div className="card no-margin no-hover no-radius border-all">
                <div className="padding-15px display-flex space-between border-bottom">
                    <div>
                        <div className="post-top txt-site txt-main txt-10 txt-bold">
                            Service Reminders 
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="padding-15px display-flex column center" style={{ height: 250 }}>
                    <div className="display-flex" style={{height: 50, marginTop: 20, marginBottom: 20}}>
                        <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                            <div className="post-top">
                                <div className="txt-site txt-26 txt-red txt-bold">14</div>
                                <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Overdue</div>
                            </div>
                        </div>
                        <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                            <div className="post-top">
                                <div className="txt-site txt-26 txt-primary txt-bold">5</div>
                                <div className="txt-site txt-10 txt-primary" style={{marginTop: 5}}>Due Soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class CardComments extends React.Component {
    render () {
        const data = [
            {
                cover: 'https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg',
                name: 'Allie Hudson',
                issue: 'Vehicle: The Black Pearl',
                comment: 'Comming in tomorrow for an oil change',
                date: '21 days ago'
            },
            {
                cover: 'https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg',
                name: 'Allie Hudson',
                issue: 'Vehicle: The Black Pearl',
                comment: 'Comming in tomorrow for an oil change',
                date: '21 days ago'
            },
            {
                cover: 'https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg',
                name: 'Allie Hudson',
                issue: 'Vehicle: The Black Pearl',
                comment: 'Comming in tomorrow for an oil change',
                date: '21 days ago'
            },
            {
                cover: 'https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg',
                name: 'Allie Hudson',
                issue: 'Vehicle: The Black Pearl',
                comment: 'Comming in tomorrow for an oil change',
                date: '21 days ago'
            },
            {
                cover: 'https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg',
                name: 'Allie Hudson',
                issue: 'Vehicle: The Black Pearl',
                comment: 'Comming in tomorrow for an oil change',
                date: '21 days ago'
            },
            {
                cover: 'https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg',
                name: 'Allie Hudson',
                issue: 'Vehicle: The Black Pearl',
                comment: 'Comming in tomorrow for an oil change',
                date: '21 days ago'
            },
            {
                cover: 'https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg',
                name: 'Allie Hudson',
                issue: 'Vehicle: The Black Pearl',
                comment: 'Comming in tomorrow for an oil change',
                date: '21 days ago'
            },
            {
                cover: 'https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg',
                name: 'Allie Hudson',
                issue: 'Vehicle: The Black Pearl',
                comment: 'Comming in tomorrow for an oil change',
                date: '21 days ago'
            }
        ]
        return (
            <div className="card no-margin no-hover no-radius border-all">
                <div className="padding-15px display-flex space-between border-bottom">
                    <div>
                        <div className="post-top txt-site txt-main txt-10 txt-bold">
                            Recent Comments
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="change-scrollbar" style={{height: 630, overflowY: 'auto'}}>
                    {data && data.map((dt, i) => {
                        return (
                            <div key={i} className={"padding-15px display-flex " + (i !== (data.length - 1) ? 'border-bottom' : '')}>
                                <div style={{width: 50, marginRight: 15}}>
                                    <div className="image image-50px image-circle" style={{ overflow: 'hidden' }}>
                                        <img className="cover" src={dt.cover} alt="" />
                                    </div>
                                </div>
                                <div style={{width: 'calc(100% - 185px)'}}>
                                    <div style={{marginBottom: 10}}>
                                        <span className="txt-site txt-12 txt-safe txt-bold">{ dt.name }</span>
                                        <span className="txt-site txt-11 txt-main txt-bold" style={{marginLeft: 5, marginRight: 5}}>commented on</span>
                                        <span className="txt-site txt-12 txt-safe txt-bold">{ dt.issue }</span>
                                    </div>
                                    <div className="txt-site txt-11 txt-main">{ dt.comment }</div>
                                </div>
                                <div style={{width: 120}} className="display-flex right">
                                    <div className="txt-site txt-10 txt-primary">{ dt.date }</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const style = {
  place: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const Container = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'Write a cool JS library',
                content: <CardTotalCost />
            },
            {
                id: 2,
                text: 'Make it generic enough',
                content: <CardReminders />
            },
            {
                id: 3,
                text: 'Write README',
                content: <CardVehicle />
            },
            {
                id: 4,
                text: 'Create some examples',
                content: <CardInspections />
            }
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
                    content={card.content}
                    moveCard={moveCard}
                />
            )
        }
        return (
            <div className="display-flex">
                <div className="width width-50">
                    <div style={style.place}>
                        {cards.map((card, i) => {
                        var item = renderCard(card, i)
                        return item
                        })}
                    </div>
                </div>
                <div className="width width-50">
                    <div style={{margin: 10}}>
                        <CardComments />
                    </div>
                </div>
            </div>
        )
    }
}
export default Container
