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
			console.log(data);
			data.forEach(function(data) {
				console.log(data);
				console.log('event date', new Date(data.date))
				console.log('current date', new Date());
				console.log(new Date(data.date) > new Date());
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
		// 		data: [{	
		// 		userid: 10158962670505581,
		// 		needs: {
		// 			food: {
		// 				budget: 200,
		// 				Chinese: true,
		// 				Japanese: true,
		// 			},
		// 			music: {
		// 				budget: 300,
		// 				edm: true,
		// 				Rock: true,
		// 			},
		// 			photography: {
		// 				budget: 300,
		// 				events: true
		// 			}
		// 		},
		// 		title: 'Corgi Meetup',
		// 		location: '611 Mission St #2, San Francisco, CA 94105',
		// 		date: '2018-11-15',
		// 		note: 'vegan prease',
		// 		vendors: []
		// 	},
		// 	{	
		// 		userid: 10158962670505581,
		// 		needs: {
		// 			food: {
		// 				budget: 4000,
		// 				Mexican: true,
		// 			},
		// 			music: {
		// 				budget: 2000,
		// 				edm: true,
		// 				Rock: true,
		// 			},
		// 			photography: {
		// 				budget: 3,
		// 				events: true
		// 			}
		// 		},
		// 		title: 'Kill All Humans After Party',
		// 		location: 'Planet Earth',
		// 		date: '2012-12-12',
		// 		note: 'no humans allowed',
		// 		vendors: []
		// 	}],
		// 	current:[],
		// 	past:[],
    // }
        
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

					{this.state.showTab === 'current' ? <CurrentEvents events={this.state.current}/> : null}
					{this.state.showTab === 'create' ? <CreateEvent/> : null}
					{this.state.showTab === 'past' ? <PastEvents events={this.state.past} /> : null}

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