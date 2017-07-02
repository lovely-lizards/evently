import React from 'react';
import ReactDOM from 'react-dom';
import ShowNeedsHost from './ShowNeedsHost.jsx';
import $ from 'jquery';
import utils from '../utils.js';

class CurrentEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			isHidden: true,
			events: []		
		}
	}

	componentDidMount() {
		utils.getEventsByUser(data => {
			this.setState({
				events: data
			})
		})
	}


	render() {
		return (
			<div>
				{
				this.state.events.map((event, idx) =>
					<ShowNeedsHost event={event} idx={idx}/>
				)
			}
			</div>
		);
	}
}

export default CurrentEvents
