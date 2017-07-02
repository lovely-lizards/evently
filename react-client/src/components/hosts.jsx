import React from 'react';
import utils from '../utils.js';
import ReactDOM from 'react-dom';
import CreateEvent from './CreateEvent.jsx';
import CurrentEvents from './CurrentEvents.jsx';
import PastEvents from './PastEvents.jsx';

class Hosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

        
	showTab(tab) {
  this.setState({
  			showTab: tab
    })
	}


  render() {
    return (
			<div>  
      
        <button className="ui left-attached teal button" onClick={()=>this.showTab('create')}>Create Event</button>
        <button className="right-attached ui teal button" onClick={()=>this.showTab('current')}>Current Events</button>
        <button className="right-attached ui teal button" onClick={()=>this.showTab('past')}>Past Events</button>

				<div>

					{this.state.showTab === 'current' ? <CurrentEvents/> : null}
					{this.state.showTab === 'create' ? <CreateEvent/> : null}
					{this.state.showTab === 'past' ? <PastEvents/> : null}

				</div>
			</div>
    )
  }
}
export default Hosts;
