import React from 'react';
import utils from '../utils.js';
import ReactDOM from 'react-dom';
import VendorSignUp from './VendorSignUp.jsx';
import UpcomingEvents from './UpcomingEvents.jsx';

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
				<div className="tab">
          <button className="tabLinks" onClick={()=>this.showTab('signup')}>Vendor Sign Up</button>
					<button className="tablinks" onClick={()=>this.showTab('upcoming')}>Upcoming Events</button>
					<button className="tablinks" onClick={()=>this.showTab('bidded')}>Bidded Events</button>
					<button className="tablinks" onClick={()=>this.showTab('matched')}>Matched Events</button>
				</div>
        {this.state.showTab === 'signup' ? <VendorSignUp/> : null}
				<div>
					{this.state.showTab === 'upcoming' ? <UpcomingEvents events={this.state.events}/> : null}
					{this.state.showTab === 'bidded' ? <div>bidded list</div> : null}
					{this.state.showTab === 'matched' ? <div> matched list</div> : null}
				</div>
			</div>
    )
  }

}

export default Vendors;

//{_id, userid, needs, location, date, __v, vendors}