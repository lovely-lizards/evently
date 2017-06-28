import React from 'react';
<<<<<<< HEAD

import ReactDOM from 'react-dom';
import CreateEvent from './CreateEvent.jsx';

=======
import ReactDOM from 'react-dom';
<<<<<<< HEAD
>>>>>>> added tabs on vendors
=======
import CreateEvent from './CreateEvent.jsx';
>>>>>>> added checklist, but does not save value

class Hosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD

    }
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
					{this.state.showTab === 'current' ? <div>bidded list</div> : null}
					{this.state.showTab === 'past' ? <div> matched list</div> : null}
				</div>
			</div>
    )
  }
}



=======
    }
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
					{this.state.showTab === 'current' ? <div>bidded list</div> : null}
					{this.state.showTab === 'past' ? <div> matched list</div> : null}
				</div>
			</div>
    )
  }
}

<<<<<<< HEAD
>>>>>>> added tabs on vendors
=======

>>>>>>> added checklist, but does not save value
export default Hosts;