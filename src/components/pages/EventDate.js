import React, { Component } from 'react'
import { Chart } from 'react-google-charts'
class EventDate extends Component {
    constructor() {
        super()
        this.state = {
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks',
            }
        }
    }

    render() {
        return (
            <div className="main-content">
                <div className="padding-15px">
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="Gantt"
                        loader={<div>Loading Chart</div>}
                        data={[
                            [
                                { type: 'string', label: 'Task ID' },
                                { type: 'string', label: 'Task Name' },
                                { type: 'date', label: 'Start Date' },
                                { type: 'date', label: 'End Date' },
                                { type: 'number', label: 'Duration' },
                                { type: 'number', label: 'Percent Complete' },
                                { type: 'string', label: 'Dependencies' },
                            ],
                            [
                                'Planning-001',
                                'Plan event - Ashley G',
                                new Date(2021, 0, 1),
                                new Date(2021, 0, 3),
                                null,
                                0,
                                null,
                            ],
                            [
                                'Determine-001',
                                'Determine Attendace List - Jessica A',
                                null,
                                new Date(2021, 0, 5),
                                2 * 24 * 60 * 60 * 1000,
                                0,
                                'Planning-001',
                            ],
                            [
                                'Create-001',
                                'Create Catering Plan - Ashley G',
                                null,
                                new Date(2021, 0, 6),
                                1 * 24 * 60 * 60 * 1000,
                                0,
                                'Determine-001',
                            ],
                            [
                                'Review-001',
                                'Review venue floor plan - Ashley G',
                                null,
                                new Date(2021, 0, 8),
                                2 * 24 * 60 * 60 * 1000,
                                0,
                                'Create-001',
                            ],
                            [
                                'Review-002',
                                'Invite Attendees - Amanda S',
                                null,
                                new Date(2021, 0, 10),
                                2 * 24 * 60 * 60 * 1000,
                                0,
                                'Review-001',
                            ],
                            [
                                'Event-001',
                                'Event Date - Jessica B',
                                new Date(2021, 0, 13),
                                new Date(2021, 0, 14),
                                null,
                                0,
                                null,
                            ]
                        ]}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            </div>
        )
    }
}
export default EventDate