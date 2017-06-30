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
      showTab: 'current',
      events: []
    }
  }

  componentDidMount() {

    utils.getEventsByUser(data => {

      this.setState({
        events: data
      });

    });
  }
        
	showTab(tab) {

    if (tab === 'current') {
      utils.getEventsByUser(data => {

        this.setState({
          events: data,
          showTab: tab
        });

      });
    } else {
  		this.setState({
  			showTab: tab
  		});
    }
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

					{this.state.showTab === 'current' ? <CurrentEvents events={this.state.events}/> : null}
					{this.state.showTab === 'create' ? <CreateEvent/> : null}
					{this.state.showTab === 'past' ? <div> matched list</div> : null}

				</div>
			</div>
    )
  }
}
export default Hosts;

/*
Object {_id: "595448108ff4913f5cad4c27", userid: 10158962670505580, needs: Object, location: "944 Market St, San Francisco, CA", date: "1856527"…}
hosts.jsx?102c:46 Object {_id: "595448108ff4913f5cad4c28", userid: 10158962670505580, needs: Object, location: "611 Mission St #2, San Francisco, CA 94105", date: "7082017"…}
hosts.jsx?102c:46 Object {_id: "5954482a8ff4913f5cad4c2a", needs: Object, location: "522 asd", date: "2017-06-22", userid: 10158962670505580…}
hosts.jsx?102c:46 Object {_id: "5954652c48b1bf3fc39993fb", needs: Object, location: "123 asdas", date: "2017-06-21", userid: 10158962670505580…}
*/