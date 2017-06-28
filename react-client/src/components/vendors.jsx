import React from 'react';
import ReactDOM from 'react-dom';


class Vendors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
					<button className="tablinks" onClick={()=>this.showTab('upcoming')}>Upcoming Events</button>
					<button className="tablinks" onClick={()=>this.showTab('bidded')}>Bidded Events</button>
					<button className="tablinks" onClick={()=>this.showTab('matched')}>Matched Events</button>
				</div>
				<div>
					{this.state.showTab === 'upcoming' ? <div>upcoming list</div> : null}
					{this.state.showTab === 'bidded' ? <div>bidded list</div> : null}
					{this.state.showTab === 'matched' ? <div> matched list</div> : null}
				</div>
			</div>

		)
  }

}

export default Vendors;