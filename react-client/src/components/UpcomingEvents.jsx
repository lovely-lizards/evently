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
					<div className="card">
						<div className="card-block">
							<h4 className="card-title font-weight-bold text-success">{event.title}</h4>
							<h6 className="card-subtitle mb-2 text-muted">Date: {event.date}</h6>
							<h6 className="card-subtitle mb-2 text-muted">Location: {event.location}</h6>
							<div>
								<h5 className="font-weight-bold-italic">Needs: </h5> {
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
