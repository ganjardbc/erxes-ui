import React from 'react';
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

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
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

class SearchRecommendation extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            focus: false,
            suggestions: []
        };
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
                    <select style={{ border: "1px solid #aaa", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", padding: "10px", fontWeight: "bold" }}>
                        <option style={{ fontWeight: "bold" }} selected value="all">All</option>
                    </select>
                </div>
            </div>
        );

        return (
            <div className="main-content">
                <div className="padding-15px grid grid-2x">
                    <div className="col-1">
                        <div className="txt-site txt-18 txt-bold txt-main padding-top-5px">
                            Search
                        </div>
                    </div>
                    <div className="col-2 content-right"></div>
                </div>
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
            </div>
        );
    }
}

export default SearchRecommendation