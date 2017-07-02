import React from 'react';
import ReactDOM from 'react-dom';
import utils from '../utils.js';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			foodOptions: ['Chinese', 'Japanese', 'Filipino', 'Mexican', 'Vegan'],
			musicOptions: ['Hip-Hop', 'House', 'Classical', 'Rock', 'Country'],
			photoOptions: ['Wedding', 'Studio', 'Product', 'Landscape', 'Event'],
			foodPicks: [],
			musicPicks: [],
			photoPicks: [],
			foodBudget: 0,
			musicBudget: 0,
			photoBudget: 0,
			address: '',
			notes: '',
			date: '',
			title: '',
			defaultChecked: false
    }
  }

	checkListsFood(event) {
		var isChecked = event.target.checked;
		var foodValue = event.target.value;
		if (isChecked) {
			this.setState((prevState, props) => ({
				foodPicks: prevState.foodPicks.concat([foodValue])
			}))
		} else {
			var foodIndex = this.state.foodPicks.indexOf(foodValue);
			var newArray = this.state.foodPicks.splice(foodIndex,1);
			this.setState({
				foodPicks: this.state.foodPicks
			});
		}
	}
	checkListFood(event) {
		var isChecked = event.target.checked;
		var foodValue = event.target.value;
		if (isChecked) {
			this.setState((prevState, props) => ({
				foodPicks: prevState.foodPicks.concat([foodValue])
			}))
		} else {
			var foodIndex = this.state.foodPicks.indexOf(foodValue);
			var newArray = this.state.foodPicks.splice(foodIndex,1);
			this.setState({
				foodPicks: this.state.foodPicks
			});
		}
	}

	checkListMusic(event) {
		var isChecked = event.target.checked;
		var musicValue = event.target.value;
		if (isChecked) {
			this.setState((prevState, props) => ({
				musicPicks: prevState.musicPicks.concat([musicValue])
			}))
		} else {
			var musicIndex = this.state.musicPicks.indexOf(musicValue);
			var newArray = this.state.musicPicks.splice(musicIndex,1);
			this.setState({
				musicPicks: this.state.musicPicks
			});
		}
		console.log(this.state.musicPicks);
	}

	checkListPhoto(event) {
		var isChecked = event.target.checked;
		var photoValue = event.target.value;
		if (isChecked) {
			this.setState((prevState, props) => ({
			photoPicks: prevState.musicPicks.concat([photoValue])
			}))
		} else {
			var photoIndex = this.state.musicPicks.indexOf(photoValue);
			var newArray = this.state.musicPicks.splice(photoIndex,1);
			this.setState({
				photoPicks: this.state.photoPicks
			});
		}
		console.log(this.state.photoPicks);
	}

	handleAddressChange(event) {
		this.setState({address: event.target.value})
		console.log(this.state.address);
	}

	handleNoteChange(event) {
		this.setState({notes: event.target.value})
		console.log(this.state.notes);
	}

	foodBudgetChange(event) {
		this.setState({foodBudget: event.target.value})
		console.log(this.state.foodBudget);
	}

	musicBudgetChange(event) {
		this.setState({musicBudget: event.target.value})
		console.log(this.state.musicBudget);
	}

	photoBudgetChange(event) {
		this.setState({foodBudget: event.target.value})
		console.log(this.state.photoBudget);
	}

	dateChange(event) {
		console.log(event.target.value);
		this.setState({date: event.target.value})
		console.log(this.state.date);
	}

	titleChange(event) {
		this.setState({title: event.target.value})
		console.log(this.state.title);
	}


	submitData() {
		var numberDate = new Date(this.state.date);
		console.log(numberDate);
		

		var submitData = {
			title: this.state.title,
			needs: {
				food: {
					budget: this.state.foodBudget,
				},
				music: {
					budget: this.state.musicBudget,
				},
				photography: {
					budget: this.state.photoBudget,
				}
			},
			location: this.state.address,
			date: this.state.date,
			notes: this.state.notes,
			vendors: []
		}

		if (this.state.foodPicks) {
			this.state.foodPicks.forEach(function(foodType) {
				submitData.needs.food[foodType] = true;
			});
		}

		if (this.state.musicPicks) {
			this.state.musicPicks.forEach(function(musicType) {
				submitData.needs.music[musicType] = true;
			});
		}
		
		if (this.state.photoPicks) {
			this.state.photoPicks.forEach(function(photoType) {
				submitData.needs.photography[photoType] = true;
			});
		}
		console.log(submitData);

		utils.createEvent(submitData);
	}


	render () {
		return (
			<div>
				<div id='needs fields'>
					<div>Event Title</div> <input type="text" name="event-title" onChange={this.titleChange.bind(this)}/>
					<div>Date of Event</div> <input type="date" name="event-date" onChange={this.dateChange.bind(this)}/>
					<h1>Needs</h1>
						<ul>
							<li>Food</li>
							{this.state.foodOptions.map((food, key) => (
								<li key={key}> 
									<input type="checkbox" 
									defaultChecked={this.state.defaultChecked} 
									value={food} 
									onClick={this.checkListFood.bind(this)}/>
									{food}
								</li>
							))}
							<li>
								Budget: <input type="number" name="food budget" onChange={this.foodBudgetChange.bind(this)}/>
							</li>
						</ul>
						<ul>
							<li>Music</li>
							{this.state.musicOptions.map((music, key) => (
								<li key={key}> 
									<input type="checkbox" 
									defaultChecked={this.state.defaultChecked} 
									value={music}
									onClick={this.checkListMusic.bind(this)} />
									{music}
								</li>
							))}
							<li>
								Budget: <input type="number" name="music budget" onChange={this.musicBudgetChange.bind(this)} />
							</li>
						</ul>
						<ul>
							<li>Photography</li>
							{this.state.photoOptions.map((photo, key) => (
								<li key={key}> 
									<input type="checkbox" defaultChecked={this.state.defaultChecked} 
									value={photo}
									onClick={this.checkListPhoto.bind(this)} />
									{photo}
								</li>
							))}
							<li>
								Budget: <input type="number" name="photography budget" onChange={this.photoBudgetChange.bind(this)}/>
							</li>
						</ul>
				</div>
				<div id='location'>
					<h1>Location</h1>
					Address: <input type="text" name="address" value={this.state.address} onChange={this.handleAddressChange.bind(this)} />
				</div>
				<div id='Note'>
					<h1>Notes</h1>
					Additional Information: <br/>
					<textarea rows="6" cols="60" value={this.state.notes} onChange={this.handleNoteChange.bind(this)}></textarea>
				</div>
				<button onClick={this.submitData.bind(this)}> Submit Form </button>
			</div>
		)
	}
}

export default CreateEvent;