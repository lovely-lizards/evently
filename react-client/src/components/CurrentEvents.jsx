import React from 'react';
import ReactDOM from 'react-dom';

class CurrentEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		}
	}

	render() {
		return (
			<div className='current-events'>
				{this.props.list.map(function(data, key) {
					return (
					<div className='events' key={key}>
						<div>{data.title}</div>
						<div>{data.date}</div>
						<div>{data.location}</div>
					</div> )
				})}
			</div>
		);
	}
}

export default CurrentEvents