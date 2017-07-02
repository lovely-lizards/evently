import React from 'react';
import ReactDOM from 'react-dom';

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  
  render() {
    return (
      <div>
				<div>{this.props.events.map(event =>
					<div className="ui card">
						<div className="content">
							<h4 className="header">{event.title}</h4>
							<h6 className="meta">Date: {event.date}</h6>
							<h6 className="meta">Location: {event.location}</h6>
							<div>
								<button className="ui teal button">Needs: </button> {
									Object.keys(event.needs).map(need => 
										<div className="container">
											<div className="row">{need}</div>
											<div className="col-xl-2">
												{
													Object.keys(event.needs[need]).map( item => 
														<li>{item === 'budget' ? 'Budget: ' + event.needs[need].budget: item}</li>
													)
												}
											</div>
										</div>
									)
								}
							</div>

						</div>					
					</div>
				)}
				</div>
			</div>

    )
  }

}

export default UpcomingEvents
