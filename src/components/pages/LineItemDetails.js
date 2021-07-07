import React, { Component } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Input, InputAdornment, Badge, Table, TableBody, TableCell, TableRow, ButtonGroup } from '@material-ui/core';
import Dots from '../../modules/Dots'

class LineItemDetails extends Component {
    constructor() {
        let rows = [
            { name: 'Tire Replacement', labor: 7.5, parts: 0 },
            { name: 'Body Paint', labor: 15, parts: 0 }
        ];
        let summary = [
            { label: 'Subtotal', value: 219.48 },
            { label: 'Labor', value: 7.50 },
            { label: 'Parts', value: 211.98 },
        ]
        super()
        this.state = {
            rows,
            summary
        }
    }

    opNavigator = (id, target, title, icon = '', value = '', status = false) => {
        var cl = ''
        var icn = ''
        var val = ''

        if (status) {
            cl = 'n-c-link active'
        } else {
            cl = 'n-c-link'
        }

        if (icon !== '') {
            icn = <i className={'fa fa-lw ' + icon + ' txt-site txt-9 margin-right-5px'} />
        } else {
            icn = ''
        }

        if (value !== '') {
            val = <span className={'margin-left-5px txt-site txt-9 txt-safe txt-bold'}>{value}</span>
        } else {
            val = ''
        }

        return (
            <li
                className={cl}
                id={id}
                onClick={this.opContent(target)}>
                {icn}
                {title}
                {val}
                <label className="line"></label>
            </li>
        )
    }

    opContent = target => e => {
        e.preventDefault()

        var i, tabcontent, tablinks

        tabcontent = document.getElementsByClassName('n-c-content')
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none'
        }

        tablinks = document.getElementsByClassName('n-c-link')
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = 'n-c-link'
        }

        document.getElementById(target).style.display = 'block'
        e.currentTarget.className = 'n-c-link active'
        console.log(e.currentTarget)
    }

    render() {
        return (
            <div className="main-content">
                <div className="padding-15px">
                    <div className="display-flex width width-100">
                        <div className="txt-site txt-main txt-16 txt-extra-bold" style={{ textAlign: 'left', padding: 10 }}>
                            <i className="icn icn-left fa fa-lw fa-list" style={{ color: 'darkgray' }} /> Line Items
                        </div>
                    </div>
                    <div className="navigator nav-all nav-theme-5 no-margin padding-top-10px">
                        <ul>
                            {this.opNavigator('nav-1', 'content-nav-1', 'Service Task', 'fa-wrench', '1', true)}
                            {this.opNavigator('nav-2', 'content-nav-2', 'Labor', 'fa-user', '1')}
                            {this.opNavigator('nav-3', 'content-nav-3', 'Parts', 'fa-th-large', '1')}
                        </ul>
                    </div>
                    <div className="navigator-content">
                        <div className="n-c-content active" id="content-nav-1">{this.renderServiceTask()}</div>
                        <div className="n-c-content" id="content-nav-2">2</div>
                        <div className="n-c-content" id="content-nav-3">3</div>
                    </div>
                </div>
            </div>
        )
    }

    renderDetails(datas) {
        return (
            <div className="padding-10px">
                <div className="display-flex">
                    <div className="width width-50">
                        <div className="txt-site txt-primary txt-9 padding-bottom-10px">LAST COMPLETED</div>
                        <div className="txt-site txt-sekunder txt-extra-bold txt-12 padding-bottom-10px">
                            <span className="txt-site txt-underline txt-sekunder txt-extra-bold">6 days ago</span> <Dots /> 101 mi ago
                        </div>
                        <div className="txt-site txt-blue txt-9 padding-bottom-10px">History</div>
                    </div>
                    <div className="width width-50">
                        <div className="txt-site txt-primary txt-9 padding-bottom-10px">SCHEDULE</div>
                        <div className="txt-site txt-blue txt-extra-bold txt-12 padding-bottom-10px">
                            + Create Service Reminder
                        </div>
                    </div>
                </div>
                <div className="display-flex">
                    <textarea className="cf-input txt text-sekunder" placeholder="Enter notes or details (optional)"></textarea>
                </div>
                <div className="display-flex border-top border-bottom padding-15px">
                    <div className="display-flex center width width-5">
                        <button type="button" className="btn btn-circle btn-no-color">
                            <i className="icn icn-big fa fa-user"></i>
                        </button>
                    </div>
                    <div className="display-flex center width width-10">
                        <div className="image image-50px background-blue" style={{ overflow: 'hidden', borderRadius: "30px" }}>
                            <img style={{ backgroundSize: "cover" }} src="https://i.pinimg.com/originals/c3/66/16/c36616a8d1f2eb3505c49dd55d07b6a9.jpg" alt="" />
                        </div>
                    </div>
                    <div className="width width-35">
                        <div className="txt-site txt-main txt-extra-bold txt-9 padding-bottom-10px">Caimen Dennis <i className="icn icn-right fa fa-pencil-alt" /></div>
                        <div className="txt-site txt-primary txt-9 padding-bottom-10px">Admin</div>
                    </div>
                    <div className="width width-20">
                        <div className="txt-site txt-main txt-extra-bold txt-9 padding-bottom-10px">0.5 hrs</div>
                        <div className="txt-site txt-primary txt-9 padding-bottom-10px">$15.00</div>
                    </div>
                    <div className="width width-15">
                        <div className="txt-site txt-main txt-extra-bold txt-9 padding-bottom-10px">$7.5</div>
                    </div>
                    <div className="display-flex right width width-10">
                        <div className="txt-site txt-main txt-bold txt-9 padding-bottom-10px">x</div>
                    </div>
                </div>
            </div>
        )
    }

    renderServiceTask() {
        let { rows, summary } = this.state
        return (
            <div className="padding-10px">
                <div className="display-flex">
                    <div className="display-flex width width-30">
                        <div className="txt-site txt-bold txt-14 padding-5px">Add Service Task</div>
                        <button type='button' className="btn btn-no-color padding-5px">
                            Add to top
                            <i className="icn icn-right fa fa-caret-down" style={{ color: 'darkgray' }} />
                        </button>
                    </div>
                    <div className="display-flex right width width-70">
                        <span className="txt-site txt-blue txt-12 txt-extra-bold txt-right padding-5px">View Service Reminders  <Badge className="margin-left-10px" badgeContent={3} color="secondary">
                        </Badge></span>
                    </div>
                </div>
                <div className="display-flex">
                    <Input
                        id="input-with-icon-adornment"
                        placeholder="Search service task..."
                        className="cf-input txt txt-sekunder"
                        startAdornment={
                            <InputAdornment position="start">
                                <i className="fa fa-search"></i>
                            </InputAdornment>
                        }
                    />
                </div>
                <div className="display-flex border-bottom padding-5px margin-top-10px padding-bottom-10px">
                    <div className="display-flex width width-35">
                        <div className="txt-site txt-extra-bold txt-10 margin-right-10px">Task</div>
                        <div className="txt-site txt-extra-bold txt-blue txt-9 margin-right-10px">
                            <i className="icn fa fa-list-ul padding-right-5px" />Expand
                        </div>
                        <div className="txt-site txt-extra-bold txt-blue txt-9 margin-right-10px">
                            <i className="icn fa fa-compress padding-right-5px" />Collapse All
                        </div>
                    </div>
                    <div className="display-flex right width width-20">
                        <div className="txt-site txt-extra-bold txt-10 padding-right-10px">Labor</div>
                    </div>
                    <div className="display-flex right width width-20">
                        <div className="txt-site txt-extra-bold txt-10 padding-right-20px">Parts</div>
                    </div>
                    <div className="display-flex right width width-20">
                        <div className="txt-site txt-extra-bold txt-10 padding-right-30px">Subtotal</div>
                    </div>
                    <div className="width width-5">
                        <div className="txt-site txt-extra-bold txt-10"></div>
                    </div>
                </div>
                {rows.map((row, index) => {
                    return (
                        <Accordion>
                            <AccordionSummary
                                style={{ flexDirection: 'row-reverse' }}
                                expandIcon={<i className="icn icn-big fa fa-caret-right" />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="display-flex padding-5px" onClick={(event) => event.stopPropagation()}>
                                    <div className="display-flex width width-35">
                                        <div className="width width-45 padding-5px">
                                            <div className="txt-site txt-extra-bold txt-10 margin-right-10px">{row.name} <i className="icn icn-right fa fa-pencil-alt" /></div>
                                        </div>
                                        <div className="display-flex right width width-55 padding-5px">
                                            <button type="button" className="btn btn-small btn-sekunder" style={{ height: 20 }}>
                                                <i className="icn fa fa-info-circle" />
                                            </button>
                                            <button type="button" className="btn btn-small btn-sekunder" style={{ height: 20 }}>
                                                <i className="icn fa fa-user" />1
                                            </button>
                                            <button type="button" className="btn btn-small btn-sekunder" style={{ height: 20 }}>
                                                <i className="icn fa fa-th-large" />
                                            </button>
                                            <button type="button" className="btn btn-small btn-sekunder" style={{ height: 20 }}>
                                                <i className="icn fa fa-history" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="display-flex right width width-20 padding-5px">
                                        <Input
                                            style={{ backgroundColor: 'lightgray', height: 20, textAlign: 'right' }}
                                            type="number"
                                            id="input-with-icon-adornment"
                                            className="cf-input txt txt-sekunder"
                                            readOnly
                                            value={row.labor}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <i className="fa fa-dollar-sign"></i>
                                                </InputAdornment>
                                            }
                                        />
                                    </div>
                                    <div className="display-flex right width width-20 padding-5px">
                                        <Input
                                            style={{ height: 20, textAlign: 'right' }}
                                            type="number"
                                            id="input-with-icon-adornment"
                                            className="cf-input txt txt-sekunder"
                                            value={row.parts}
                                            onChange={(e) => {
                                                let { rows } = this.state
                                                rows[index].parts = e.target.value
                                                this.setState({ rows })
                                            }}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <i className="fa fa-dollar-sign"></i>
                                                </InputAdornment>
                                            }
                                        />
                                    </div>
                                    <div className="display-flex right width width-20 padding-5px">
                                        <Input
                                            style={{ backgroundColor: 'lightgray', height: 20, textAlign: 'right' }}
                                            type="number"
                                            id="input-with-icon-adornment"
                                            className="cf-input txt txt-sekunder"
                                            readOnly
                                            value={Number(row.labor) + Number(row.parts)}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <i className="fa fa-dollar-sign"></i>
                                                </InputAdornment>
                                            }
                                        />
                                    </div>
                                    <div className="display-flex center width width-5">
                                        <button type='button' className='btn btn-small btn-no-color'>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                {this.renderDetails(row)}
                            </AccordionDetails>
                        </Accordion>

                    )
                })}
                <div className="grid grid-2x-colmin5 padding-top-20px">
                    <div className="column-1">
                        <label className="cf-label">DESCRIPTION</label>
                        <textarea rows="10" className="cf-input txt txt-sekunder"></textarea>
                    </div>
                    <div className="column-2 content-right">
                        <label className="cf-label padding-bottom-20px">SUMMARY</label>
                        <Table size="small">
                            <TableBody>
                                {summary.map((row, index) => (
                                    <TableRow key={row.label}>
                                        <TableCell style={{ borderBottom: "none" }} align='right'>{row.label}</TableCell>
                                        <TableCell style={{ borderBottom: "none" }} align='right'>{`$${row.value}`}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow key={'disc'}>
                                    <TableCell style={{ borderBottom: "none" }} align='right'>{'Discount'}</TableCell>
                                    <TableCell style={{ borderBottom: "none" }} align='right'>
                                        <ButtonGroup>
                                            <select className="cf-input slc slc-sekunder" style={{ width: '50%' }}>
                                                <option value="1">%</option>
                                                <option value="2">$</option>
                                            </select>
                                            <input type="number" className="cf-input txt txt-sekunder" placeholder='0' />
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>
                                <TableRow key={'total'}>
                                    <TableCell style={{ borderBottom: "none" }} align='right'></TableCell>
                                    <TableCell style={{ borderBottom: "none" }} align='right'>{`$0`}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

            </div>
        )
    }
}
export default LineItemDetails