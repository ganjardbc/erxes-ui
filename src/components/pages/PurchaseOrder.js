import { Grid, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core'
import React, { Component } from 'react'

class PurchaseOrder extends Component {

    constructor() {
        super()
        this.state = {
            datas: this.getData(),
            activeTab: 0
        }
    }

    getData() {
        let data = []
        for (let index = 0; index < 3; index++) {
            data.push({
                no: Number(index) * 12,
                partLoc: 'Maintenance HQ',
                vendor: 'Autozone',
                details: '1 Part',
                status: 'Approved',
                total: 511.52,
                comments: index,
                files: index
            })
        }
        return data
    }

    renderNoData() {
        return (
            <div className="margin-bottom-15px">
                <h2 style={{ opacity: 0.5 }} className="txt-site txt-gray txt-center">No purchase orders in this category</h2>
            </div>
        )
    }

    renderData() {
        const { datas } = this.state
        return (
            <div className="margin-bottom-15px">
                <div className="grid grid-2x grid-mobile-none gap-15px">
                    <div className="column-1"></div>
                    <div className="column-2 content-right">
                        <div className="width display-flex right">
                            <button className="btn btn-small btn-sekunder">
                                Sort: Created - Newest first <i className="icn icn-right fa fa-lw fa-chevron-down" />
                            </button>
                            <div style={{ marginRight: 15, marginLeft: 15 }}>
                                <div className="post-top txt-site txt-10 txt-main">1 - 4 of 4</div>
                            </div>
                            <div className="display-flex">
                                <button className="btn btn-small btn-icn btn-sekunder">
                                    <i className="icn fa fa-lw fa-chevron-left" />
                                </button>
                                <button className="btn btn-small btn-icn btn-sekunder">
                                    <i className="icn fa fa-lw fa-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card margin-top-10px">
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell className="txt-site txt-9"></TableCell>
                                <TableCell className="txt-site txt-extra-bold">Part Location</TableCell>
                                <TableCell className="txt-site txt-extra-bold">Vendor</TableCell>
                                <TableCell className="txt-site txt-extra-bold">Details</TableCell>
                                <TableCell className="txt-site txt-extra-bold">Status</TableCell>
                                <TableCell className="txt-site txt-extra-bold" align="right">Total</TableCell>
                                <TableCell align="center"><i className="fa fa-comment-alt"></i></TableCell>
                                <TableCell align="center"><i className="fa fa-file"></i></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas && datas.map(item => {
                                return (
                                    <TableRow>
                                        <TableCell className="txt-site txt-9">{`#${item.no}`}</TableCell>
                                        <TableCell className="txt-site txt-9">{item.partLoc}</TableCell>
                                        <TableCell className="txt-site txt-9">{item.vendor}</TableCell>
                                        <TableCell className="txt-site txt-9">{item.details}</TableCell>
                                        <TableCell className="txt-site txt-9">{item.status}</TableCell>
                                        <TableCell align="right">{`$${item.total}`}</TableCell>
                                        <TableCell align="center">
                                            <div style={{ margin: 'auto', width: 20, height: 20, borderRadius: '100%', backgroundColor: 'lightgray' }}>
                                                <span className="txt-site txt-xs">{item.comments}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">
                                            <div style={{ margin: 'auto', width: 20, height: 20, borderRadius: '100%', backgroundColor: 'lightgray' }}>
                                                <span className="txt-site txt-xs">{item.files}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">
                                            <button type="button" className="btn btn-sm btn-no-color">
                                                <i className="fa fa-ellipsis-v"></i>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }

    render() {
        const { activeTab } = this.state
        return (
            <div className="main-content">
                <div className="padding-5px">
                    <form>
                        <div className="card-form margin-bottom-15px">
                            <div className="cf-header">
                                <div className="grid grid-2x grid-mobile-none gap-15px">
                                    <div className="column-1">
                                        <div className="cf-title">
                                            Purchase Orders
                                        </div>
                                    </div>
                                    <div className="column-2 content-right">
                                        <button type="button" className="btn btn-green"><i className="fa fa-plus"></i> Add Purchase Order </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="margin-bottom-15px">
                            <Grid container spacing='1'>
                                <Grid item xs>
                                    <input type="text" className="txt txt-sekunder" placeholder="Search numbers" />
                                </Grid>
                                <Grid item xs>
                                    <input type="text" className="txt txt-sekunder" placeholder="Filter vendors" />
                                </Grid>
                                <Grid item xs>
                                    <input type="text" className="txt txt-sekunder" placeholder="Filter part locations" />
                                </Grid>
                                <Grid item>
                                    <button type="button" className="btn btn-sekunder"><i className="fa fa-sliders-h"></i> More </button>
                                </Grid>
                                <Grid item>
                                    <button type="button" className="btn btn-blue"><i className="fa fa-search"></i> Search </button>
                                </Grid>
                                <Grid item xs justify="center" alignItems="center" style={{ margin: 'auto' }}>
                                    <label className="padding-left-20px txt-site txt-10">{`0 filters applied`}</label>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="border-bottom"></div>
                        <div className="card-form margin-bottom-15px">
                            <Grid container >
                                <Grid item xs className="border-right padding-10px" justify="center" alignItems="center"
                                    onClick={() => this.setState({ activeTab: 0 })}
                                    style={{ backgroundColor: activeTab === 0 ? null : 'lightgray', cursor: 'pointer', margin: 'auto', height: '100%' }} >
                                    <div style={{ margin: 'auto' }} className="content-center padding-10px">
                                        Open
                                    </div>
                                    <div style={{ margin: 'auto' }} className="content-center txt-site txt-30">{0}</div>
                                </Grid>
                                <Grid item xs className="border-right padding-10px" justify="center" alignItems="center"
                                    onClick={() => this.setState({ activeTab: 1 })}
                                    style={{ backgroundColor: activeTab === 1 ? null : 'lightgray', cursor: 'pointer', margin: 'auto', height: '100%' }} >
                                    <div style={{ margin: 'auto' }} className="content-center padding-10px">
                                        Approve
                                    </div>
                                    <div style={{ margin: 'auto' }} className="content-center txt-site txt-30 txt-blue">{4}</div>
                                </Grid>
                                <Grid item xs className="border-right padding-10px" justify="center" alignItems="center"
                                    onClick={() => this.setState({ activeTab: 2 })}
                                    style={{ backgroundColor: activeTab === 2 ? null : 'lightgray', cursor: 'pointer', margin: 'auto', height: '100%' }} >
                                    <div style={{ margin: 'auto' }} className="content-center padding-10px">
                                        Receive
                                    </div>
                                    <div style={{ margin: 'auto' }} className="content-center txt-site txt-30 txt-green">{52}</div>
                                </Grid>
                                <Grid item xs className="border-right padding-10px" justify="center" alignItems="center"
                                    onClick={() => this.setState({ activeTab: 3 })}
                                    style={{ backgroundColor: activeTab === 3 ? null : 'lightgray', cursor: 'pointer', margin: 'auto', height: '100%' }} >
                                    <div style={{ margin: 'auto' }} className="content-center padding-10px">
                                        Closed
                                    </div>
                                    <div style={{ margin: 'auto' }} className="content-center txt-site txt-30 txt-grey">{41}</div>
                                </Grid>
                            </Grid>
                        </div>
                        {activeTab === 1 ? this.renderData() : this.renderNoData()
                        }
                    </form>
                </div>
            </div>
        )
    }
}
export default PurchaseOrder