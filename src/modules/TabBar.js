import React, { Component } from 'react'

class TabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
    	    nextStep: 0
        }
    }

    componentDidUpdate() {
        // console.log(this.state.nextStep)
    }

    toLeft = () => {
        var dt = document.getElementById('navigator')
        // var width = dt.scrollWidth
        var step = dt.clientWidth
        var nextStep = this.state.nextStep - step
  
        if (nextStep >= 0) {
            this.setState({nextStep: nextStep})
            dt.scroll(nextStep, 0)
        }
  
    }
  
    toRight = () => {
        var dt = document.getElementById('navigator')
        var width = dt.scrollWidth
        var step = dt.clientWidth
        // var scroll = dt.scrollLeft
        var nextStep = this.state.nextStep + step
  
        if (nextStep <= width) {
            this.setState({nextStep: nextStep})
            dt.scroll(nextStep, 0)
        }
  
    }

    render() {
        const {enableScroll, theme, isSmall, data} = this.props
        let smallTheme = isSmall ? 'nav-small' : ''
        let selectedTheme = ''
        switch (theme) {
            case 'theme-1':
                selectedTheme = 'nav-theme-1'
                break;
            case 'theme-2':
                selectedTheme = 'nav-theme-2'
                break;
            case 'theme-3':
                selectedTheme = 'nav-theme-3'
                break;
            case 'theme-4':
                selectedTheme = 'nav-theme-4'
                break;
            case 'theme-5':
                selectedTheme = 'nav-theme-5'
                break;
            case 'theme-6':
                selectedTheme = 'nav-theme-6'
                break;
            case 'theme-7':
                selectedTheme = 'nav-theme-7'
                break;
            case 'theme-8':
                selectedTheme = 'nav-theme-8'
                break;
            case 'theme-9':
                selectedTheme = 'nav-theme-9'
                break;
            default:
                selectedTheme = 'nav-theme-2'
                break;
        }
        return (
            <div className={(enableScroll) ? "navigator nav-all " + selectedTheme + " nav-scroll" + smallTheme : "navigator nav-all " + selectedTheme + ' ' + smallTheme}>
                {enableScroll && (
                    <button 
                        type='button'
                        onClick={ this.toLeft }
                        className="btn btn-circle btn-grey">
                        <i className="fa fa-lg fa-caret-left"></i>
                    </button>
                )}
                <ul id="navigator">
                    {data.map((item, i) => (
                        <li
                            onClick={this.props.onClick.bind(this)}
                            className={item.status}
                            data-id={i}>
                            {item.title}
                        </li>
                    ))}
                </ul>
                {enableScroll && (
                    <button 
                        type='button'
                        onClick={ this.toRight }
                        className="btn btn-circle btn-grey">
                        <i className="fa fa-lg fa-caret-right"></i>
                    </button>
                )}
            </div>
        )
    }
}

export default TabBar