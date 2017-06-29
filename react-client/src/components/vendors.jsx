import React from 'react';
import utils from '../utils.js';
import ReactDOM from 'react-dom';

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
					<button className="tablinks" onClick={()=>this.showTab('upcoming')}>Upcoming Events</button>
					<button className="tablinks" onClick={()=>this.showTab('bidded')}>Bidded Events</button>
					<button className="tablinks" onClick={()=>this.showTab('matched')}>Matched Events</button>
				</div>
				<div>
					{this.state.showTab === 'upcoming'
          ? <div>
              <div>{this.state.events.map(event =>
                      <div>
                        <div>{event.date}</div>
                        <div>{event.location}</div>
                        <div>Needs: {Object.keys(event.needs).map(need =>
                                <div>
                                  <div>{need}</div>
                                  <div>
                                    {Object.keys(event.needs[need]).map(item =>
                                      <li>{item === 'budget' ? 'Budget: ' + event.needs[need].budget: item}</li>
                                    )}
                                  </div>
                                </div>
                             )}
                        </div>
                      </div>
                   )}
              </div>
            </div>
          : null}
					{this.state.showTab === 'bidded' ? <div>bidded list</div> : null}
					{this.state.showTab === 'matched' ? <div> matched list</div> : null}
				</div>
			</div>
    )
  }

}

export default Vendors;

//{_id, userid, needs, location, date, __v, vendors}