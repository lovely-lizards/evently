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
	/*  
	Load all events from user, check the event against the current date
	If event is older than current date, sort the events from the most 
	recent expired event. Then push the event into the array then 
	set the state to that array.
	*/
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

