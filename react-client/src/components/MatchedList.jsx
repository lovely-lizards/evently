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
		this.props.list.forEach((event) => {
			var isMatch = false
			this.props.service.forEach((service) => {
				service.forEach((type) => {
					console.log(type);
					if (event.needs.food.hasOwnProperty(type)) {
						isMatch = true;
					}
					if (event.needs.music.hasOwnProperty(type)) {
						isMatch = true;
					}
					if (event.needs.photography.hasOwnProperty(type)){
						isMatch = true;
					};
				});
			});
			if (isMatch) {
				filteredData.push(event);
			}
		});
		this.setState({
			data: filteredData
		});
	}
		// console.log(filteredData);
		// // var foodService = Object.keys(obj.service.food);
		// // var musicService = Object.keys(obj.service.music);
		// // var photoService = Object.keys(obj.service.photography);
		// console.log(this.props);


	render() {
		return (
			<div className='matched-events'>
				{this.state.data.map(function(data, key) {
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

