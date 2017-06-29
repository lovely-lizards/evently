import React from 'react';
import ReactDom from 'react-dom';
import utils from '../utils.js';

class MatchedList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []

		}
	}

	componentDidMount() {
		var filteredData = [];
		var foodService = Object.keys(obj.service.food);
		var musicService = Object.keys(obj.service.music);
		var photoService = Object.keys(obj.service.photography);

		// if (host.needs.food.hasOwnProperty(obj.service.food))
		// utils.getEvents(hostData => {
		// 	utils.getVendor(vendorData => {

		// 	})
		// })
		// if ()

	}

	render() {
		return (
			<div className='matched-events'>
				{this.data.map(function(data, key) {
					return (
					<div className='events' key={key}>
						<div>{data.title}</div>
						<div>{data.date}</div>
						<div>{data.location}</div>
					</div> )
				})}
			</div>
		)
	} 
}

export default MatchedList;

