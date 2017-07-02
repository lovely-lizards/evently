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
      events: [],
			data: [0],
    }
  }

  componentDidMount() {
		var that = this;
    utils.getEventsByUser(data => {
			var currentData = [];
			var pastData = [];
			data.forEach(function(data) {
				if (new Date(data.date) > new Date()) {
					currentData.push(data);
				} else {
					pastData.push(data);
				}
				that.setState({
					current: currentData,
					past: pastData
				});
			});
    });
  }
        
	showTab(tab) {

  this.setState({
  			showTab: tab
    })
	}


  render() {
    return (
			<div>
        <div className="container">        
          <ul className="nav nav-tabs">

            <li className='nav-item'>
              <a className={'nav-link '.concat(this.state.showTab === 'create' ? 'active' : null)} onClick={()=>this.showTab('create')} href='#'>Create Event</a>
            </li>
            <li className='nav-item'>
              <a className={'nav-link '.concat(this.state.showTab === 'current' ? 'active' : null)} onClick={()=>this.showTab('current')} href='#'>Current Events</a>
            </li>
            <li className='nav-item'>
              <a className={'nav-link '.concat(this.state.showTab === 'past' ? 'active' : null)} onClick={()=>this.showTab('past')} href='#'>Past Events</a>
            </li>
          
          </ul>
        </div>

				<div>

					{this.state.showTab === 'current' ? <CurrentEvents/> : null}
					{this.state.showTab === 'create' ? <CreateEvent/> : null}
					{this.state.showTab === 'past' ? <PastEvents events={this.state.past} /> : null}

				</div>
			</div>
    )
  }
}
export default Hosts;
