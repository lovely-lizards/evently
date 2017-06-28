import React from 'react';
import ReactDOM from 'react-dom';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			foodOptions: ['Chinese', 'Japanese', 'Filipino', 'Mexican', 'Vegan'],
			musicOptions: ['Hip-Hop', 'House', 'Classical', 'Rock', 'Country'],
			photoOptions: ['Wedding', 'Studio', 'Product', 'Landscape', 'Event'],
			foodPicks: [],
			musicPicks: [],
			photographyPicks: [],
			foodBudget: 0,
			musicBudget: 0,
			photographyBudget: 0,
			address: '',
			notes: '',
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

	render () {
		return (
			<div>
				<div id='needs'>
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
								Budget: <input type="number" name="food budget" />
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
								Budget: <input type="number" name="music budget" />
							</li>
						</ul>
						<ul>
							<li>Photography</li>
							{this.state.photoOptions.map((photo, key) => (
								<li key={key}> 
									<input type="checkbox" defaultChecked={this.state.defaultChecked} />
									{photo}
								</li>
							))}
							<li>
								Budget: <input type="number" name="photography budget" />
							</li>
						</ul>
				</div>
				<div id='location'>
					<h1>Location</h1>
					Address: <input type="text" name="address" />
				</div>
				<div id='Note'>
					<h1>Notes</h1>
					Additional Information: 
					<li>
						<textarea rows="6" cols="60"></textarea>
					</li>
				</div>
			</div>
		)
	}
}

export default CreateEvent;