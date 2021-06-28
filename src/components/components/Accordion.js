import React, { Component } from 'react'

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
  {
    title: 'Pricing plans',
    paragraph
  },
  {
    title: 'How to apply',
    paragraph
  },
  {
    title: 'Purchasing process',
    paragraph
  },
  {
    title: 'Usage guides',
    paragraph
  }
]

class Accordion extends Component {
  render () {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

class AccordionItem extends Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        paragraph,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}>
                {paragraph}
              </p>
            </div>
          </div>
      </div>
    )
  }
}

class Pages extends Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
		return (
			<div className="main-content">
				<div className="padding-15px">
						<h3 className="txt-site txt-main margin-bottom-15px">
							Accordion With Logic Typescript
						</h3>
						<Accordion />
				</div>
				<div className="padding-15px"></div>
				<div className="padding-15px grid grid-2x">
					<div className="col-1">
						<h3 className="txt-site txt-main margin-bottom-15px">
							Accordion With Radiobutton
						</h3>
						<div className="card no-margin">
							<div className="accordion-selectbox">
								<ul>
									
									<li className="border-bottom">
										<input type="radio" name="accordion-radio" id="accordion-radio-1" />
										<label for="accordion-radio-1">
											<div className="a-s-list">
												<h3 className="a-s-title">Pricing plans</h3>
												<span className="a-s-icon" />
											</div>
										</label>
										<div className="a-s-content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</li>

									<li className="border-bottom">
										<input type="radio" name="accordion-radio" id="accordion-radio-2" />
										<label for="accordion-radio-2">
											<div className="a-s-list">
												<h3 className="a-s-title">How to apply</h3>
												<span className="a-s-icon" />
											</div>
										</label>
										<div className="a-s-content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</li>
									
									<li className="border-bottom">
										<input type="radio" name="accordion-radio" id="accordion-radio-3" />
										<label for="accordion-radio-3">
											<div className="a-s-list">
												<h3 className="a-s-title">Purchesing process</h3>
												<span className="a-s-icon" />
											</div>
										</label>
										<div className="a-s-content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</li>
									
									<li className="border-bottom">
										<input type="radio" name="accordion-radio" id="accordion-radio-4" />
										<label for="accordion-radio-4">
											<div className="a-s-list">
												<h3 className="a-s-title">Usage guides</h3>
												<span className="a-s-icon" />
											</div>
										</label>
										<div className="a-s-content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</li>

								</ul>
							</div>
						</div>
					</div>
					<div className="col-2">
						<h3 className="txt-site txt-main margin-bottom-15px">
							Accordion With Selecbox
						</h3>
						<div className="card no-margin">
							<div className="accordion-selectbox">
								<ul>
									
									<li className="border-bottom">
										<input type="checkbox" id="accordion-1" />
										<label for="accordion-1">
											<div className="a-s-list">
												<h3 className="a-s-title">Pricing plans</h3>
												<span className="a-s-icon" />
											</div>
										</label>
										<div className="a-s-content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</li>

									<li className="border-bottom">
										<input type="checkbox" id="accordion-2" />
										<label for="accordion-2">
											<div className="a-s-list">
												<h3 className="a-s-title">How to apply</h3>
												<span className="a-s-icon" />
											</div>
										</label>
										<div className="a-s-content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</li>
									
									<li className="border-bottom">
										<input type="checkbox" id="accordion-3" />
										<label for="accordion-3">
											<div className="a-s-list">
												<h3 className="a-s-title">Purchesing process</h3>
												<span className="a-s-icon" />
											</div>
										</label>
										<div className="a-s-content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</li>
									
									<li className="border-bottom">
										<input type="checkbox" id="accordion-4" />
										<label for="accordion-4">
											<div className="a-s-list">
												<h3 className="a-s-title">Usage guides</h3>
												<span className="a-s-icon" />
											</div>
										</label>
										<div className="a-s-content">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</li>

								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="padding-15px"></div>
			</div>
		)
	}

}

export default Pages