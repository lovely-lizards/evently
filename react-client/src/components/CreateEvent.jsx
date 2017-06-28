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

	render () {
		return (
			<div>
				<div id='needs'>
					<h1>Needs</h1>
						<ul>
							<li>Food</li>
							{this.state.foodOptions.map((food, key) => (
								<li key={key}> 
									<input type="checkbox" defaultChecked={this.state.defaultChecked} />
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
									<input type="checkbox" defaultChecked={this.state.defaultChecked} />
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