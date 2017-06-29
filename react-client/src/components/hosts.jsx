import React from 'react';
import ReactDOM from 'react-dom';
import CreateEvent from './CreateEvent.jsx';
import CurrentEvents from './CurrentEvents.jsx';
import PastEvents from './PastEvents.jsx';

class Hosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			data: [{	
				userid: 10158962670505581,
				needs: {
					food: {
						budget: 200,
						Chinese: true,
						Japanese: true,
					},
					music: {
						budget: 300,
						edm: true,
						Rock: true,
					},
					photography: {
						budget: 300,
						events: true
					}
				},
				title: 'Corgi Meetup',
				location: '611 Mission St #2, San Francisco, CA 94105',
				date: '2018-11-15',
				note: 'vegan prease',
				vendors: []
			},
			{	
				userid: 10158962670505581,
				needs: {
					food: {
						budget: 4000,
						Mexican: true,
					},
					music: {
						budget: 2000,
						edm: true,
						Rock: true,
					},
					photography: {
						budget: 3,
						events: true
					}
				},
				title: 'Kill All Humans After Party',
				location: 'Planet Earth',
				date: '2012-12-12',
				note: 'no humans allowed',
				vendors: []
			}],
			current:[],
			past:[],
    }
  }

	componentDidMount() {
		var that = this;
		var currentData = [];
		var pastData = [];
		this.state.data.forEach(function(data) {
			console.log('event date', new Date(data.date))
			console.log('current date', new Date());
			console.log(new Date(data.date) > new Date());
			if (new Date(data.date) > new Date()) {
				currentData.push(data);
			} else {
				pastData.push(data);
			}
		});
		this.setState({
			current: currentData,
			past: pastData
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
				<div className="tab">
					<button className="tablinks" onClick={()=>this.showTab('create')}>Create Event</button>
					<button className="tablinks" onClick={()=>this.showTab('current')}>Current Events</button>
					<button className="tablinks" onClick={()=>this.showTab('past')}>Past Events</button>
				</div>
				<div>
					{this.state.showTab === 'create' ? <CreateEvent /> : null}
					{this.state.showTab === 'current' ? <CurrentEvents list={this.state.current}/> : null}
					{this.state.showTab === 'past' ? <PastEvents list={this.state.past} /> : null}
				</div>
			</div>
    )
  }
}
export default Hosts;