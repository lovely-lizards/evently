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

    utils.getUserId((id) => {

      utils.getVendorsById(id.id , (data) => {

        var services = [];
        console.log('SERVICES', data.service);
        if (data.service.food) {
          var foodService = Object.keys(data.service.food);
          services.push(foodService);
        }

        if (data.service.music) {
          var musicService = Object.keys(data.service.music);
          services.push(musicService);
        }

        if (data.service.photography) {
          var photoService = Object.keys(data.service.photography);
          services.push(photoService);
        }

        this.setState({
          serviceData: services,
          userId: id
        });
		  });
    })
  }

	showTab(tab) {
		this.setState({
			showTab: tab
		});
	}


  render() {
    return (
			<div>
          <button className="ui left-attached teal button" onClick={()=>this.showTab('signup')}>Vender Sign Up</button>
          <button className="right-attached ui teal button" onClick={()=>this.showTab('upcoming')}>Upcoming Events</button>
          <button className="right-attached ui teal button" onClick={()=>this.showTab('bidded')}>Bidded Events</button>
          <button className="right-attached ui teal button" onClick={()=>this.showTab('matched')}>Matched Events</button>
        
        {this.state.showTab === 'signup' ? <VendorSignUp/> : null}
				
        <div>
				
        	{this.state.showTab === 'upcoming' ? <UpcomingEvents tab={this.state.showTab}/> : null}
					{this.state.showTab === 'bidded' ? <div>bidded list</div> : null}
					{this.state.showTab === 'matched' ? <MatchedList list={this.state.events} user={this.state.userId} service={this.state.serviceData}/> : null}
				</div>
			</div>
    )
  }

}

export default Vendors;

