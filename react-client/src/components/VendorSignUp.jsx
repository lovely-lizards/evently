import React from 'react';
import ReactDOM from 'react-dom';
import utils from '../utils.js';

class VendorSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodOptions: ['Chinese', 'Japanese', 'Filipino', 'Mexican', 'Vegan'],
      musicOptions: ['Hip-Hop', 'House', 'Classical', 'Rock', 'Country'],
      photoOptions: ['Wedding', 'Studio', 'Product', 'Landscape', 'Event'],
      foodPicks: [],
      musicPicks: [],
      photoPicks: [],
      organization: '',
      address: '',
      description:''
    }
  }

  checkListFood(e) {
    var isChecked = e.target.checked;
    var foodValue = e.target.value;
    if(isChecked) {
      this.setState((prevState, props) => ({
        foodPicks: prevState.foodPicks.concat([foodValue])
      }))
    } else {
      var foodIndex = this.state.foodPicks.indexOf(foodValue);
      var newArray = this.state.foodPicks.splice(foodIndex, 1);
      this.setState({
        foodPicks: this.state.foodPicks
      });
    }
  }

  checkListMusic(e) {
    var isChecked = e.target.checked;
    var musicValue = e.target.value;
    if(isChecked) {
      this.setState((prevState, props) => ({
        musicPicks: prevState.musicPicks.concat([musicValue])
      }))
    } else {
      var musicIndex = this.state.musicPicks.indexOf(musicValue);
      var newArray = this.state.musicPicks.splice(musicIndex, 1);
      this.setState({
        musicPicks: this.state.musicPicks
      });
    }
  }

  checkListPhoto(e) {
    var isChecked = e.target.checked;
    var photoValue = e.target.value;
    if(isChecked) {
      this.setState((prevState, props) => ({
        photoPicks: prevState.photoPicks.concat([photoValue])
      }))
    } else {
      var photoIndex = this.state.photoPicks.indexOf(photoValue);
      var newArray = this.state.photoPicks.splice(photoIndex, 1);
      this.setState({
        photoPicks: this.state.photoPicks
      });
    }
  }

  handleAddressChange(e) {
    this.setState({address: e.target.value})
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  organizationChange(e) {
    this.setState({organization: e.target.value})
  }

  submitData() {
    var submitData = {
      organization: this.state.organization,
      service: {
        food: {},
        music: {},
        photography: {},
      },
      location: this.state.address,
      description: this.state.description
    }
		if (this.state.foodPicks) {
			this.state.foodPicks.forEach(function(foodType) {
				submitData.service.food[foodType] = true;
			});
		}

		if (this.state.musicPicks) {
			this.state.musicPicks.forEach(function(musicType) {
				submitData.service.music[musicType] = true;
			});
		}
		
		if (this.state.photoPicks) {
			this.state.photoPicks.forEach(function(photoType) {
				submitData.service.photography[photoType] = true;
			});
		}
    console.log(submitData);
    utils.createVendor(submitData);
    alert('congrats! you are now a vendor!');
  }

  

  render () {
    return (
      <div>
        <div>
          <h2>Organization Name</h2> <input type="text" name="organization-title" onChange={this.organizationChange.bind(this)}/>
          <h2>Service</h2>
          <ul>
            <li>Food</li>
            {this.state.foodOptions.map((food,key) => (
              <li key={key}>
                <input type="checkbox"
                defaultChecked={this.state.defaultChecked}
                value={food}
                onClick={this.checkListFood.bind(this)}/>
                {food}
              </li>
            ))}
          </ul>
          <ul>
            <li>Music</li>
            {this.state.musicOptions.map((music,key) => (
              <li key={key}>
                <input type="checkbox"
                defaultChecked={this.state.defaultChecked}
                value={music}
                onClick={this.checkListMusic.bind(this)}/>
                {music}
              </li>
            ))}
          </ul>
          <ul>
            <li>Photography</li>
            {this.state.photoOptions.map((photo,key) => (
              <li key={key}>
                <input type="checkbox"
                defaultChecked={this.state.defaultChecked}
                value={photo}
                onClick={this.checkListPhoto.bind(this)}/>
                {photo}
              </li>
            ))}
          </ul>
          <div className="location">
            <h2>Location</h2>
            Address: <input type="text" name="address" value={this.state.address} onChange={this.handleAddressChange.bind(this)}/>
          </div>
          <div>&nbsp;</div>
          <div className="description">
            <h2> Organization Description </h2>
            <li>
              <textarea rows="6" cols="60" value={this.state.notes} onChange={this.handleDescriptionChange.bind(this)}></textarea>
            </li>
          </div>
          <button onClick={this.submitData.bind(this)}>Submit Form</button>
        </div>
      </div>
    )
  }
}

export default VendorSignUp;