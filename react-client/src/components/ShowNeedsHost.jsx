import React from 'react';

export default class ShowNeedsHost extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true,
    }
  this.toggleNeeds = this.toggleNeeds.bind(this);
  }

	toggleNeeds () {
		// console.log('INSIDE TOGGLE NEEDS: ', e.target.value);
		this.setState({
			isHidden : !this.state.isHidden

		});
	}


  render () {
    return (
      <div className="card" key={this.props.idx}>
        <div className="card-block">
          <h4 className="card-title font-weight-bold text-primary">{this.props.event.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">Date: {this.props.event.date}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Location: {this.props.event.location}</h6>
          <div>
            <button onClick={this.toggleNeeds} className="font-weight-bold-italic">Needs: </button>
            {
              // console.log('THIS IS THE IDX of SHOW', this.Event),
              this.state.isHidden === false ?  
              Object.keys(this.props.event.needs).map(need => 
                <div className="container">
                  <div className="row">{need}</div>
                  <div className="col-xl-2">
                    {
                      Object.keys(this.props.event.needs[need]).map(item => 
                        <li>{item === 'budget' ? 'Budget: ' + this.props.event.needs[need].budget: item}</li>
                      )
                    }
                  </div>
                </div>
              ) : null
            }
          </div>

        </div>					
      </div>
    )
  }
}


