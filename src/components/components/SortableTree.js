import React, { Component } from 'react'
import SortableTree, { changeNodeAtPath, addNodeUnderParent, removeNodeAtPath } from 'react-sortable-tree'

const defaultTreeData = [
	{ 
		title: 'Robert Fowler', 
		subtitle: 'Marketing Director',
		expanded: true,
		children: [
			{ 
				title: 'Bill Durbin' ,
				subtitle: 'Marketing Communication Mgr.',
				children: [
					{
						title: 'Tony Williams',
						subtitle: 'Marketing Communication Mgr',
						children: [
							{
								title: 'Cindy J. Rorance',
								subtitle: 'Employee',
							},
							{
								title: 'Tina Mustika',
								subtitle: 'Employee',
							}
						]
					},
					{
						title: 'Lora Blair',
						subtitle: 'Marketing Communication Mgr',
						children: [
							{
								title: 'Rosie Green',
								subtitle: 'Employee',
							},
							{
								title: 'Max Brown',
								subtitle: 'Employee',
							},
							{
								title: 'Stphen Woods',
								subtitle: 'Employee',
							},
							{
								title: 'Jennie Curry',
								subtitle: 'Employee',
							}
						]
					}
				]
			},
			{ 
				title: 'David Johnson' ,
				subtitle: 'Business Development Manager',
				children: [
					{
						title: 'Kate Jeter',
						subtitle: 'Responsibility 1'
					},
					{
						title: 'Derek Crisp',
						subtitle: 'Responsibility 2'
					}
				]
			}
		] 
	},
]

const defaultTreeData2 = [
	{
		title: 'Adam Levin', 
		subtitle: 'Marketing Director 2',
		expanded: true,
		children: [
			{ 
				title: 'Crish Path' ,
				subtitle: 'Marketing Communication Mgr.',
				children: []
			},
			{ 
				title: 'Rian Fowler' ,
				subtitle: 'Marketing Communication Mgr.',
				children: []
			}
		] 
	}
]

class Pages extends Component {

  constructor (props) {
    super(props)
    this.state = {
    	editClass: false,
    	moveClass: false,
    	prevData: defaultTreeData,
    	nextData: defaultTreeData2,
    	name: '',
    	position: '',
    	treeData: defaultTreeData,
		treeData2: defaultTreeData2,
		shouldCopyOnOutsideDrop: false
    }}

    openMoveTree = () => {
    	this.setState({moveClass: !this.state.moveClass})
	    // if (this.state.moveClass) {
	    // 	this.setState({moveClass: false})
	    // } else {
	    // 	this.setState({moveClass: true})
	    // }
	}

	openEditNode = () => {
		this.setState({editClass: !this.state.editClass})
		// if (this.state.editClass) { 
		// 	this.setState({editClass: false})
		// } else {
		// 	this.setState({editClass: true})
		// }
	}

	render () {
		const externalNodeType = 'yourNodeType'
		const { shouldCopyOnOutsideDrop } = this.state
		return (
			<div className="main-content">
				<div className="padding-15px">

					<h1>
						Sortable Tree
					</h1>

					<div className="grid grid-2x" >
						<div style={{ height: 400 }}>
							<SortableTree
								treeData={this.state.treeData}
								onChange={treeData => { 
									this.setState({ prevData: this.state.treeData })
									this.setState({ treeData }) 
								}}
								onMoveNode={() => {
									this.setState({ nextData: this.state.treeData })
									// this.setState({ moveClass: true })
									console.log('data 1', this.state.treeData)
								}}
								generateNodeProps={({ node, path }) => ({
									title: (<input 
		                                type="text" 
		                                className="text-field-mikro txt-site txt-10 txt-bold txt-main txt-no-line-height"
		                                placeholder=""
		                                value={node.title}
		                                required
		                                onChange={event => {
		                                	const title = event.target.value
		                                	this.setState(state => ({
		                                		treeData: changeNodeAtPath({
		                                			treeData: state.treeData,
		                                			path,
		                                			getNodeKey: ({ treeIndex }) => treeIndex,
		                                			newNode: { ...node, title },
		                                		}),
						                    }))
		                                }} />),
									subtitle: (<input 
		                                type="text" 
		                                className="text-field-mikro txt-site txt-8 txt-thin txt-primary txt-no-line-height"
		                                placeholder=""
		                                value={node.subtitle}
		                                required
		                                onChange={event => {
		                                	const subtitle = event.target.value
		                                	this.setState(state => ({
		                                		treeData: changeNodeAtPath({
		                                			treeData: state.treeData,
		                                			path,
		                                			getNodeKey: ({ treeIndex }) => treeIndex,
		                                			newNode: { ...node, subtitle },
		                                		}),
						                    }))
		                                }} />),
									buttons:[
										<button 
											className="btn btn-small-circle btn-grey"
											onClick={() => {
												this.setState(state => ({
													treeData: removeNodeAtPath({
														treeData: state.treeData,
														path,
														getNodeKey: ({ treeIndex }) => treeIndex
													})
												}))
											}}>
											<i className="fa fa-1x fa-trash-alt" />
										</button>
									]
								})}
								dndType={externalNodeType}
								shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop} />
						</div>
						<div style={{ height: 400 }}>
							<SortableTree
								treeData={this.state.treeData2}
								onChange={treeData2 => { 
									this.setState({ prevData: this.state.treeData2 })
									this.setState({ treeData2 }) 
								}}
								onMoveNode={() => {
									this.setState({ nextData: this.state.treeData2 })
									// this.setState({ moveClass: true })
									console.log('data 1', this.state.treeData2)
								}}
								generateNodeProps={({ node, path }) => ({
									title: (<input 
		                                type="text" 
		                                className="text-field-mikro txt-site txt-10 txt-bold txt-main txt-no-line-height"
		                                placeholder=""
		                                value={node.title}
		                                required
		                                onChange={event => {
		                                	const title = event.target.value
		                                	this.setState(state => ({
		                                		treeData2: changeNodeAtPath({
		                                			treeData2: state.treeData2,
		                                			path,
		                                			getNodeKey: ({ treeIndex }) => treeIndex,
		                                			newNode: { ...node, title },
		                                		}),
						                    }))
		                                }} />),
									subtitle: (<input 
		                                type="text" 
		                                className="text-field-mikro txt-site txt-8 txt-thin txt-primary txt-no-line-height"
		                                placeholder=""
		                                value={node.subtitle}
		                                required
		                                onChange={event => {
		                                	const subtitle = event.target.value
		                                	this.setState(state => ({
		                                		treeData2: changeNodeAtPath({
		                                			treeData2: state.treeData2,
		                                			path,
		                                			getNodeKey: ({ treeIndex }) => treeIndex,
		                                			newNode: { ...node, subtitle },
		                                		}),
						                    }))
		                                }} />),
									buttons:[
										<button 
											className="btn btn-small-circle btn-grey"
											onClick={() => {
												this.setState(state => ({
													treeData2: removeNodeAtPath({
														treeData2: state.treeData2,
														path,
														getNodeKey: ({ treeIndex }) => treeIndex
													})
												}))
											}}>
											<i className="fa fa-1x fa-trash-alt" />
										</button>
									]
								})}
								dndType={externalNodeType}
								shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop} />
						</div>
					</div>

					<div>
						<label htmlFor="should-copy" style={{ fontSize: '0.8rem' }}>
							Enable node copy via <b>shouldCopyOnOutsideDrop</b>:
							<input
							type="checkbox"
							id="should-copy"
							value={shouldCopyOnOutsideDrop}
							onChange={event =>
								this.setState({
									shouldCopyOnOutsideDrop: event.target.checked,
								})
							} />
						</label>
					</div>

		            <div className="border-bottom padding-15px grid grid-2x grid-mobile-none gap-20px">
		                <div className="column-1">
		                	<div className="margin-bottom-15px txt-site txt-12 txt-bold txt-main">
		                		Data Kiri
		                	</div>
		                	<div className="margin-bottom-15px">
		                		<textarea
					                className="txt txt-sekunder" 
					                value={ JSON.stringify(this.state.treeData, null, 2) }
					                placeholder=""
					                style={{height: '300px', resize: "none"}} />
		                	</div>
		                </div>
		                <div className="column-2">
		                    <div className="margin-bottom-15px txt-site txt-12 txt-bold txt-main">
		                		Data Kanan
		                	</div>
		                	<div className="margin-bottom-15px">
		                		<textarea
					                className="txt txt-sekunder" 
					                value={ JSON.stringify(this.state.treeData2, null, 2) }
					                placeholder=""
					                style={{height: '300px', resize: "none"}} />
		                	</div>
		                </div>
		            </div>
				</div>

				{/* {(this.state.editClass) 
				? (<div className="app-popup app-popup-show">
					<div className="padding-top-20px"></div>
					<div className="popup-content-small background-white border-radius">
						<div className="padding-15px background-blue grid grid-2x">
		                    <div className="col-1">
		                        <div className="txt-site txt-12 txt-bold post-center">
		                            Edit Node
		                        </div>
		                    </div>
		                    <div className="col-2 content-right">
		                        <button className="btn btn-circle background-blue" onClick={ this.openEditNode }>
		                            <i className="fa fa-lg fa-times"></i>
		                        </button>
		                    </div>
		                </div>

		                <div className="border-bottom padding-15px">
		                	<div>
		                		<div className="margin-bottom-15px">
		                            <div className="margin-5px">
		                                <span className="txt-site txt-11 txt-main txt-bold">
		                                  Name
		                                </span>
		                            </div>
		                            <input 
		                                type="text" 
		                                className="txt txt-sekunder-color"
		                                placeholder=""
		                                value={this.state.name}
		                                required
		                                onChange={event => {
		                                	const name = event.target.value
		                                	this.setState({name: name})
		                                }} ></input>
		                        </div>
		                        <div className="margin-bottom-15px">
		                            <div className="margin-5px">
		                                <span className="txt-site txt-11 txt-main txt-bold">
		                                  Position
		                                </span>
		                            </div>
		                            <input 
		                                type="text" 
		                                className="txt txt-sekunder-color"
		                                placeholder=""
		                                value={this.state.position}
		                                required
		                                onChange={event => {
		                                	const position = event.target.value
		                                	this.setState({position: position})
		                                }} ></input>
		                        </div>
		                    </div>
		                </div>

		                <div className="padding-15px">
	                        <div className="grid grid-2x">
	                            <div className="col-1"></div>
	                            <div className="col-2 content-right">
	                                <button 
	                                  className="btn btn-primary" 
	                                  type="button" 
	                                  onClick={ this.openEditNode }>
	                                    <span className='fa fa-1x fa-times'></span> <span>CANCEL</span>
	                                </button>
	                                <button 
	                                  style={{marginLeft: "15px"}}
	                                  className="btn btn-green" 
	                                  type="submit">
	                                    <span className='far fa-1x fa-save'></span> <span>SUBMIT</span>
	                                </button>
	                            </div>
	                        </div>
	                    </div>
					</div>
					<div className="padding-top-20px"></div>
				</div>)
				: null }

				{(this.state.moveClass) 
				? 
				<div className="app-popup app-popup-show">
					<div className="padding-top-20px"></div>
					<div className="popup-content background-white border-radius">

						<div className="padding-15px background-blue grid grid-2x">
		                    <div className="col-1">
		                        <div className="txt-site txt-12 txt-bold post-center">
		                            Data Organization
		                        </div>
		                    </div>
		                    <div className="col-2 content-right">
		                        <button className="btn btn-circle background-blue" onClick={ this.openMoveTree }>
		                            <i className="fa fa-lg fa-times"></i>
		                        </button>
		                    </div>
		                </div>

		                <div className="border-bottom padding-15px grid grid-2x grid-mobile-none gap-20px">
		                	<div className="column-1">
		                		<div className="margin-bottom-15px txt-site txt-12 txt-bold txt-main">
		                			Data Sebelumnya
		                		</div>
		                		<div className="margin-bottom-15px">
		                			<textarea
					                    className="txt txt-sekunder" 
					                    value={ JSON.stringify(this.state.prevData, null, 2) }
					                    placeholder=""
					                    style={{height: '300px', resize: "none"}} />
		                		</div>
		                    </div>
		                    <div className="column-2">
		                    	<div className="margin-bottom-15px txt-site txt-12 txt-bold txt-main">
		                			Data Sekarang
		                		</div>
		                		<div className="margin-bottom-15px">
		                			<textarea
					                    className="txt txt-sekunder" 
					                    value={ JSON.stringify(this.state.nextData, null, 2) }
					                    placeholder=""
					                    style={{height: '300px', resize: "none"}} />
		                		</div>
		                    </div>
		                </div>


		                <div className="padding-15px">

	                        <div className="grid grid-2x">
	                            <div className="col-1"></div>
	                            <div className="col-2 content-right">
	                                <button 
	                                  className="btn btn-primary" 
	                                  type="button" 
	                                  onClick={ this.openMoveTree }>
	                                    <span className='fa fa-1x fa-times'></span> <span>Close</span>
	                                </button>
	                            </div>
	                        </div>

	                    </div>


					</div>
					<div className="padding-top-20px"></div>
				</div>
				: null} */}
			</div>
		)
	}

}

export default Pages