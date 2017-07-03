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
