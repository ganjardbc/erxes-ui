import React, { Component } from 'react'
import { Paper, Tabs, Tab, Input, InputAdornment, Badge, Table, TableBody, TableCell, TableHead, TableRow, Button, ButtonGroup } from '@material-ui/core';

class LineItems extends Component {

    constructor() {
        super()
        let rows = [
            { name: 'Tire Replacement', labor: 7.5, parts: 0 },
            { name: 'Body Paint', labor: 15, parts: 0 }
        ];
        let summary = [
            { label: 'Subtotal', value: 219.48 },
            { label: 'Labor', value: 7.50 },
            { label: 'Parts', value: 211.98 },
        ]
        this.state = {
            value: 0,
            summary,
            rows
        }
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue })
    };

    renderTaskDetail = (details) => {
        return (
            <div style={{ minHeight: '300px' }}>
                AAAAAAAAAAAAA
            </div>
        )
    }

    renderServiceTask = () => {
        const { rows, summary } = this.state
        return (
            <div className="card-form margin-bottom-15px">
                <div className="cf-header">
                    <div className="cf-title grid grid-2x">
                        <div className="column-1">
                            Add Service Task
                            <select className="margin-left-10px cf-input slc slc-sekunder" style={{ width: '50%' }}>
                                <option value="1">Add to top</option>
                                <option value="1">opsi kategori</option>
                            </select>
                        </div>
                        <div className="column-2 content-right">
                            <span className="txt-site txt-blue txt-12 txt-extra-bold txt-right">View Service Reminders  <Badge className="margin-left-10px" badgeContent={3} color="secondary">
                            </Badge></span>
                        </div>
                    </div>
                </div>
                <div className="cf-body">
                    <div className="cf-field">
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
                    <div className="cf-field">
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan="3">
                                        <div>
                                            <label className="txt-site txt-bold padding-right-20px">Task</label>
                                            <label className="txt-site txt-10 txt-blue padding-right-10px"><i className="fa fa-list-ul padding-right-10px"></i>Expand all</label>
                                            <label className="txt-site txt-10 txt-blue padding-right-10px"><i className="fa fa-compress padding-right-10px"></i>Collapse all</label>
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">Labor</TableCell>
                                    <TableCell align="right">Parts</TableCell>
                                    <TableCell align="right" className="margin-right-20px">Subtotal</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={row.name}>
                                        <TableCell style={{ cursor: 'pointer' }}>
                                            <i className="fa fa-lg fa-caret-right"></i>
                                        </TableCell>
                                        <TableCell>
                                            <label className="cf-label" style={{ whiteSpace: 'nowrap' }}>
                                                {row.name}
                                                <button type="button" className="btn btn-no-color btn-small">
                                                    <i className="fa fa-xs fa-pencil-alt"></i>
                                                </button>
                                            </label>
                                        </TableCell>
                                        <TableCell>
                                            <ButtonGroup color="primary">
                                                <Button color="light" type="button" className="btn btn-small">
                                                    <i className="fa fa-info-circle"></i>
                                                </Button>
                                                <Button color="light" type="button" className="btn btn-small" style={{ whiteSpace: 'nowrap' }}>
                                                    <i className="fa fa-user"> 1</i>
                                                </Button>
                                                <Button color="light" type="button" className="btn btn-small">
                                                    <i className="fa fa-th-large"></i>
                                                </Button>
                                                <Button color="light" type="button" className="btn btn-small">
                                                    <i className="fa fa-history"></i>
                                                </Button>
                                            </ButtonGroup>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Input
                                                style={{ backgroundColor: 'lightgray' }}
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
                                        </TableCell>
                                        <TableCell align="right">
                                            <Input
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
                                        </TableCell>
                                        <TableCell align="right">
                                            <Input
                                                style={{ backgroundColor: 'lightgray' }}
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
                                        </TableCell>
                                        <TableCell align="center">
                                            <button type='button' className='btn btn-no-color'>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="cf-field">
                        <div className="grid grid-2x-colmin5">
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
                </div>
                <div className="cf-footer">
                </div>
            </div>
        )
    }

    render() {
        const { value, rows } = this.state
        return (
            <div>
                <div className="main-content">
                    <div className="padding-5px">
                        <form>
                            <div className="grid grid-2x-colmin5 grid-mobile-none gap-15px">
                                <div className="col-1">
                                    <div className="txt-site txt-title">
                                        <i className="fa fa-list padding-bottom-10px padding-left-5px padding-right-10px"></i> Line Items
                                    </div>
                                    <div className="card-form margin-bottom-15px">
                                        <div className="cf-header">
                                        </div>
                                        <div className="cf-body">
                                            <Paper square>
                                                <Tabs
                                                    value={value}
                                                    indicatorColor="primary"
                                                    textColor="primary"
                                                    onChange={this.handleChange}
                                                    aria-label="disabled tabs example"
                                                >
                                                    <Tab label={<label><i className="fa fa-wrench"></i>{` Service Task (${rows.length})`}</label>} />
                                                    <Tab label={<label><i className="fa fa-user"></i> Labor (1)</label>} />
                                                    <Tab label={<label><i className="fa fa-th-large"></i> Parts (1)</label>} />
                                                </Tabs>
                                                {value === 0 &&
                                                    <div style={{ minHeight: '300px' }}>
                                                        {this.renderServiceTask()}
                                                    </div>
                                                }
                                                {value === 1 &&
                                                    <div style={{ minHeight: '300px' }}>
                                                    </div>
                                                }
                                                {value === 2 &&
                                                    <div style={{ minHeight: '300px' }}>
                                                    </div>
                                                }
                                            </Paper>
                                        </div>
                                        <div className="cf-footer">

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
export default LineItems