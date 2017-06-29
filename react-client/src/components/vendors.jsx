import React from 'react';
import utils from '../utils.js';
import ReactDOM from 'react-dom';
import VendorSignUp from './VendorSignUp.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';
import MatchedList from './MatchedList.jsx';

class Vendors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      showTab: 'upcoming',
      events: []
    }
  }

  componentDidMount() {

    utils.getEvents(data => {

      this.setState({
        events: data
      });

    });
  }

	showTab(tab) {
		this.setState({
			showTab: tab
		});
	}


  render() {
    return (
			<div>
        <div className="container">
        
          <ul className="nav nav-tabs">

            <li className='nav-item'>
              <a className={'nav-link '.concat(this.state.showTab === 'signup' ? 'active' : null)} onClick={()=>this.showTab('signup')} href='#'>Vender Sign Up</a>
            </li>
            <li className='nav-item'>
              <a className={'nav-link '.concat(this.state.showTab === 'upcoming' ? 'active' : null)} onClick={()=>this.showTab('upcoming')} href='#'>Upcoming Events</a>
            </li>
            <li className='nav-item'>
              <a className={'nav-link '.concat(this.state.showTab === 'bidded' ? 'active' : null)} onClick={()=>this.showTab('bidded')} href='#'>Bidded Events</a>
            </li>
            <li className='nav-item'>
              <a className={'nav-link '.concat(this.state.showTab === 'matched' ? 'active' : null)} onClick={()=>this.showTab('matched')} href='#'>Matched Events</a>
            </li>

          </ul>
        </div>
        
        {this.state.showTab === 'signup' ? <VendorSignUp/> : null}
				
        <div>
				
        	{this.state.showTab === 'upcoming' ? <UpcomingEvents events={this.state.events}/> : null}
					{this.state.showTab === 'bidded' ? <div>bidded list</div> : null}
					{this.state.showTab === 'matched' ? <MatchedList/> : null}
				</div>
			</div>
    )
  }

}

export default Vendors;

//{_id, userid, needs, location, date, __v, vendors}