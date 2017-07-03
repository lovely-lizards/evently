import React from 'react';
import ReactDOM from 'react-dom';
import utils from '../utils.js';
import ShowNeeds from './ShowNeeds.jsx';

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			events: [],
			tab: this.props.tab
    }
  }

  /*  
	Load all events from user, check the event against the current date
	If event is newer than current date, sort the events from the most 
	recent upcoming event. Then push the event into the array then 
	set the state to that array.
	*/

	componentDidMount() {
		let upcomingEvents = [];
		utils.getEvents(events => {
			events.forEach((event) => {
				if (new Date(event.date) > new Date()) {
					upcomingEvents.push(event);
				}
			});
			this.setState({
				events: upcomingEvents.sort((a, b) => {
					return new Date(a.date) > new Date(b.date);
				})
			});
		});
	}
  
  render() {
    return (
      <div>
				<div className="ui four cards">
					{
						this.state.events.map((event, idx) => 
							<ShowNeeds event={event} key={idx} tab={this.state.tab}/>
						)
					}
				</div>
			</div>

    )
  }

}


export default UpcomingEvents
