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
      events: [],
      userId: '',
      serviceData: []
    }
  }

  componentDidMount() {
    var that = this
    utils.getUserId((id) => {
      console.log(id);
      utils.getVendorsById(id.id , (data) => {
        console.log(data);
        var foodService = Object.keys(data.service.food);
        var musicService = Object.keys(data.service.music);
        var photoService = Object.keys(data.service.photography); 
        that.setState({
          serviceData: [foodService, musicService, photoService]
        });
		  });
      this.setState({userId: id});
    })
    utils.getEvents(data => {
      this.setState({
        events: data
      });
    });
    console.log(this.state.userId);
    console.log(this.state.events);
    console.log(this.state.data);
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
					{this.state.showTab === 'matched' ? <MatchedList list={this.state.events} user={this.state.userId} service={this.state.serviceData}/> : null}
				</div>
			</div>
    )
  }

}

export default Vendors;

//{_id, userid, needs, location, date, __v, vendors}