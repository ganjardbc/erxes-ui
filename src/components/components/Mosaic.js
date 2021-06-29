import React, { Component } from 'react'
import { Mosaic, MosaicWindow } from 'react-mosaic-component'
// import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

export type ViewId = 'a' | 'b' | 'c' | 'new';

const ViewIdMosaic = Mosaic;
const ViewIdMosaicWindow = MosaicWindow;

const TITLE_MAP: Record = {
  a: 'Left Window',
  b: 'Top Right Window',
  c: 'Bottom Right Window',
  new: 'New Window',
};

class Pages extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
  	return (
			<div className="mosaic">
				<div className="padding-15px">
					<ViewIdMosaic
            renderTile={(id, path) => (
              <ViewIdMosaicWindow path={path} createNode={() => 'new'} title={TITLE_MAP[id]}>
                <h1>{TITLE_MAP[id]}</h1>
              </ViewIdMosaicWindow>
            )}
            initialValue={{
              direction: 'row',
              first: 'a',
              second: {
                direction: 'column',
                first: 'b',
                second: 'c',
              },
            }}
          />
				</div>
			</div>
		)
  }

}

export default Pages