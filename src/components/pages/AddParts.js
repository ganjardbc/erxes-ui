import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';

const data = [
    {
        title: 'VEHICLES',
        content: [
            {
                name: 'LE-5',
                subname: 'Active - 2015/Chevrolet/Tahoe - Law Enforcement - 1GNLC2KC5FR626841',
                image: 'Images:police tahoe 1.jpg'
            },
            {
                name: 'LE-2',
                subname: 'Out of Service - 2015/Chevrolet/Tahoe - Law Enforcement - 1GNLC2KC8FR527367',
                image: 'Images:chevrolet-tahoe-police-vehicle-1306223690-420.jpg'
            },
            {
                name: 'LE-1',
                subname: 'Active - 2015/Chevrolet/Tahoe - Law Enforcement - 1GNLC2KC5FR626842',
                image: 'Images:police tahoe 1.jpg'
            },
        ]
    },
    {
        title: 'INSPECTION SUBMISSIONS',
        content: [
            {
                name: 'LE-1 Nov 7, 2019',
                subname: 'Daily Vehicle Inspection - Submitted by Meghan Saunders',
                image: 'Vehicle Model:Tahoe'
            },
            {
                name: 'LE-5 Nov 6, 2019',
                subname: 'Daily Vehicle Inspection - Submitted by Caimen Dennis',
                image: 'Vehicle Model:Tahoe'
            }
        ]
    },
    {
        title: '2000s',
        content: [
            {
                name: 'C#',
                subname: '',
                image: ''
            },
            {
                name: 'Scala',
                subname: '',
                image: ''
            },
            {
                name: 'Clojure',
                subname: '',
                image: ''
            },
            {
                name: 'Go',
                subname: '',
                image: ''
            }
        ]
    },
    {
        title: '2010s',
        content: [
            {
                name: 'Elm',
                subname: '',
                image: ''
            }
        ]
    }
];

const history = [
    {
        title: 'RECENT VEHICLES',
        content: [
            { name: "Chevy Service Van" },
            { name: "LE-5" },
            { name: "123 RWN" },
            { name: "DW-2" },
        ]
    }
]

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return data
        .map(section => {
            return {
                title: section.title,
                content: section.content.filter(content => regex.test(content.name))
            };
        })
        .filter(section => section.content.length > 0);
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <div style={{ padding: "0px" }}>
            <div style={{ fontWeight: "bold" }}>{suggestion.name}</div>
            <div className="txt-site txt-11 txt-main">{suggestion.subname}</div>
            <div style={{ fontSize: "10px", color: "#aaa" }}>
                {suggestion.image}
            </div>
            <span></span>
        </div>
    );
}

function renderHistory(suggestion) {
    return (
        <div style={{ padding: "0px" }}>
            <div style={{ fontWeight: "bold" }}>{suggestion.name}</div>
        </div>
    );
}

function renderSectionTitle(section) {
    return (
        <div style={{ padding: "10px", fontSize: "12px", color: "#777", backgroundColor: "#EDF1F5" }}>
            <strong>{section.title}</strong>
        </div>
    );
}

function getSectionSuggestions(section) {
    return section.content;
}

class AddParts extends Component {

    constructor() {
        super()
        this.state = {
            value: '',
            focus: false,
            suggestions: []
        }
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue,
            focus: false
        });
    };

    onHistory = () => {
        let suggestions = Object.assign([], history)
        this.setState({ suggestions, value: 'History' })
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions, focus } = this.state;
        const inputProps = {
            placeholder: "Type 'LE'",
            value,
            onChange: this.onChange,
            onFocus: () => this.setState({ focus: true }, this.onHistory)
        };
        const renderInputComponent = inputProps => (
            <div className="margin-bottom-20px card-date-picker">
                <div className="double" style={{ border: "none", backgroundColor: "transparent" }}>
                    <div style={{ backgroundColor: "#fff", padding: "8px 0px 8px 15px", color: "#aaa", border: "1px solid #aaa", borderRight: "none", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }}>
                        <i className="fas fa-search"></i>
                    </div>
                    <input {...inputProps} />
                </div>
            </div>
        );
        return (
            <div className="main-content">
                <div className="padding-5px">
                    <form>
                        <div className="width width-80">
                            <div className="card-form margin-bottom-15px">
                                <div className="cf-header border-bottom">
                                    <div className="cf-title">
                                        Add Parts <span className="cf-subtitle"> Tire Replacement </span>
                                    </div>
                                </div>
                                <div className="cf-body">
                                    <div className="cf-field">
                                        <Autosuggest
                                            multiSection={true}
                                            highlightFirstSuggestion={true}
                                            suggestions={suggestions}
                                            onSuggestionsFetchRequested={focus ? this.onHistory : this.onSuggestionsFetchRequested}
                                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                            getSuggestionValue={getSuggestionValue}
                                            renderSuggestion={focus ? renderHistory : renderSuggestion}
                                            renderSectionTitle={renderSectionTitle}
                                            getSectionSuggestions={getSectionSuggestions}
                                            inputProps={inputProps}
                                            renderInputComponent={renderInputComponent}
                                        />
                                        {/* <input placeholder="Search parts..." type="text" className="cf-input txt txt-sekunder" /> */}
                                    </div>
                                    <div className="cf-field border-bottom padding-bottom-15px">
                                        <div className="display-flex">
                                            <div className="display-flex width width-30">
                                                <div className="txt-site txt-extra-bold txt-10 margin-right-10px">Part</div>
                                                <div className="txt-site txt-extra-bold txt-blue txt-9 margin-right-10px">
                                                    <i className="icn fa fa-list-ul padding-right-5px" />Expand
                                                </div>
                                                <div className="txt-site txt-extra-bold txt-blue txt-9 margin-right-10px">
                                                    <i className="icn fa fa-compress padding-right-5px" />Collapse All
                                                </div>
                                            </div>
                                            <div className="width width-15">
                                                <div className="txt-site txt-extra-bold txt-10">Parts Quantity</div>
                                            </div>
                                            <div className="width width-15">
                                                <div className="txt-site txt-extra-bold txt-10">Unit Cost</div>
                                            </div>
                                            <div className="width width-25">
                                                <div className="txt-site txt-extra-bold txt-10">Inventory Adjustment</div>
                                            </div>
                                            <div className="width width-5">
                                                <div className="txt-site txt-extra-bold txt-10">Subtotal</div>
                                            </div>
                                            <div className="width width-5">
                                                <div className="txt-site txt-extra-bold txt-10"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cf-field border-bottom padding-bottom-15px">
                                        <div className="display-flex">
                                            <div className="display-flex width width-30">
                                                <div className="width width-5 padding-5px">
                                                    <i className="icn fa fa-caret-right" />
                                                </div>
                                                <div className="display-flex">
                                                    <div style={{ width: 40, marginRight: 15 }}>
                                                        <div className="image image-40px image-radius background-blue" style={{ overflow: 'hidden' }}>
                                                            <img style={{ height: '100%', width: 'auto' }} src="https://asset.kompas.com/crops/O28JjUYAX1rzviozhepsrpdovk0=/79x29:1226x794/750x500/data/photo/2019/03/20/2754664179.jpeg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div style={{ width: 'calc(100% - 55px)' }}>
                                                        <div className="txt-site txt-12 txt-main txt-bold" style={{ marginBottom: 5 }}>Michelin LTX A/T2</div>
                                                        <div className="display-flex">
                                                            <div className="txt-site txt-9 txt-primary">All-terrain truck tire designed for both off-road and on-road use</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="width width-15">
                                                <input style={{ width: '70%' }} className="cf-input txt txt-sekunder" type="number" />
                                            </div>
                                            <div className="width width-15">
                                                <input style={{ width: '70%' }} className="cf-input txt txt-sekunder" readOnly type="text" value={`$   211.891`} />
                                            </div>
                                            <div className="width width-25">
                                                <input style={{ width: '70%' }} placeholder="No adjustment" className="cf-input txt txt-sekunder" type="number" />
                                            </div>
                                            <div className="width width-10 padding-5px">
                                                <div className="cf-label">{`$211.891`}</div>
                                            </div>
                                            <div className="width width-5">
                                                <button type='button' className='btn btn-no-color'>
                                                    <i className="fa fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cf-footer">
                                    <div className="padding-bottom-20px border-bottom"></div>
                                    <div className="grid grid-2x grid-mobile-none gap-15px">
                                        <div className="col-1 padding-top-10px">
                                        </div>
                                        <div className="col-2 content-right padding-top-10px">
                                            <button type="button" className="btn btn-blue">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddParts