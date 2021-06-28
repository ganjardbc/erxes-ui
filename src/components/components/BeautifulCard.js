import React, { Component } from 'react'
import Card from 'react-credit-cards'
// import Img from 'react-image'

class Pages extends Component {

  constructor () {
    super()
    this.state = {
	    number: '',
	    name: '',
	    expiry: '',
	    cvc: '',
	    issuer: '',
	    focused: '',
	    formData: null,
  	}
    // this.handleCardNumber = this.handleCardNumber.bind(this)
    // this.handleCardName = this.handleCardName.bind(this)
    // this.handleCardExpiry = this.handleCardExpiry.bind(this)
    // this.handleCardCvc = this.handleCardCvc.bind(this)
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = target.value;
    } else if (target.name === 'expiry') {
      target.value = target.value;
    } else if (target.name === 'cvc') {
      target.value = target.value;
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  // handleCardNumber(event) {
  // 	this.setState({number: event.target.value})
  // }

  // handleCardName(event) {
  // 	this.setState({name: event.target.value})
  // }

  // handleCardExpiry(event) {
  // 	this.setState({expiry: event.target.value})
  // }

  // handleCardCvc(event) {
  // 	this.setState({cvc: event.target.value})
  // }

  // handleSubmit(event) {
  // 	event.preventDefault()
  // }

  render() {
  	
  	const { name, number, expiry, cvc, focused, issuer, formData } = this.state

  	return(
  		<div className="main-content">
  			<div className="padding-15px">
  				<h1 className="txt-site txt-main txt-center">React Credit Cards</h1>
  			</div>
  			<div className="padding-15px grid grid-2x gap-30px">
  				<div className="col-1">
  					<Card
	            number={number}
	            name={name}
	            expiry={expiry}
	            cvc={cvc}
	            focused={focused}
	            callback={this.handleCallback}
	          />
  				</div>
  				<div className="col-2">
  					<h3 className="txt-site txt-main">Data</h3>
  					<form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
	            <div className="form-group margin-10px">
	              <input
	                type="tel"
	                name="number"
	                className="txt txt-sekunder"
	                placeholder="Card Number"
	                pattern="[\d| ]{16,22}"
	                required
	                onChange={this.handleInputChange}
	                onFocus={this.handleInputFocus}
	              />
	              <small>E.g.: 49..., 51..., 36..., 37...</small>
	            </div>
	            <div className="form-group margin-10px">
	              <input
	                type="text"
	                name="name"
	                className="txt txt-sekunder"
	                placeholder="Name"
	                required
	                onChange={this.handleInputChange}
	                onFocus={this.handleInputFocus}
	              />
	            </div>
	            <div className="grid grid-2x gap-15px margin-10px">
	              <div className="col-1">
	                <input
	                  type="tel"
	                  name="expiry"
	                  className="txt txt-sekunder"
	                  placeholder="Valid Thru"
	                  pattern="\d\d/\d\d"
	                  required
	                  onChange={this.handleInputChange}
	                  onFocus={this.handleInputFocus}
	                />
	              </div>
	              <div className="col-2">
	                <input
	                  type="tel"
	                  name="cvc"
	                  className="txt txt-sekunder"
	                  placeholder="CVC"
	                  pattern="\d{3,4}"
	                  required
	                  onChange={this.handleInputChange}
	                  onFocus={this.handleInputFocus}
	                />
	              </div>
	            </div>
	            <input type="hidden" name="issuer" value={issuer} />
	            <div className="form-actions margin-10px">
	              <button className="btn btn-green btn-all btn-block">PAY</button>
	            </div>
	          </form>
  				</div>
  				{formData && (
            <div className="App-highlight">
              {formData.map((d, i) => <div key={i}>{d}</div>)}
            </div>
          )}
  			</div>
  		</div>
  	)
  }

}

export default Pages