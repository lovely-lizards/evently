import React from 'react';
import ReactDOM from 'react-dom';
import ShowNeeds from './ShowNeeds.jsx';
import $ from 'jquery';
import utils from '../utils.js';

export default class CurrentEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			isHidden: true,
			events: []		
		}
	}
/*  

When the component mounts it will grab all the events by 
the user and check the date against today's date, set the state and 
sort the events from most recent upcoming events to the latest
upcoming events

*/
	componentDidMount() {
		utils.getEventsByUser(events => {
			var upcomingEvents = [];
			events.forEach((event) => {
				if (new Date(event.date) > new Date()) {
					upcomingEvents.push(event);
				}
			});			
			this.setState({
				events: upcomingEvents.sort((a,b) => {
					return new Date(a.date) > new Date(b.date);
				})
			})
		})
	}


	render() {
		return (
			<div className="ui four cards">
				{
				this.state.events.map((event, idx) =>
					<ShowNeeds event={event} key={idx}/>
				)
			}
			</div>
		);
	}
}

