import React from 'react';
import ReactDOM from 'react-dom';
import ShowNeedsHost from './ShowNeedsHost.jsx';
import $ from 'jquery';

class CurrentEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			isHidden: true,
			showEvent: 0
		}
	}



	render() {
		return (
			<div>
				{
				this.props.events.map((event, idx) =>
					<ShowNeedsHost event={event} idx={idx}/>
				)
			}
			</div>
		);
	}
}

export default CurrentEvents

/*

 */