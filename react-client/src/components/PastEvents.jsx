import React from 'react';
import ReactDOM from 'react-dom';
import utils from '../utils.js';
import ShowNeeds from './ShowNeeds.jsx';

export default class PastEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			pastEvents: []
		};
	}

	componentDidMount() {
		utils.getEventsByUser(events => {
			let pastEvents = [];
			events.forEach(event => {
				if (new Date(event.date) < new Date()) {
					pastEvents.push(event);
				}
			});
			this.setState({
				pastEvents: pastEvents.sort((a,b) => {
					return new Date(a.date) < new Date(b.date);
				})
			});
		});
	}

	render() {
		return (
			<div className='past-events'>
				{

				this.state.pastEvents.map((event, idx) => 
					<ShowNeeds event={event} key={idx}/>
				)
				}
			</div>
		);
	}
}

