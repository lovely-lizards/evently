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
		this.setState({
			isHidden : !this.state.isHidden

		});
	}


  render () {
    return (
      <div className="ui card" key={this.props.idx}>
        <div className="content">
          <h4 className="header">{this.props.event.title}</h4>
          <h6 className="meta">Date: {this.props.event.date}</h6>
          <h6 className="meta">Location: {this.props.event.location}</h6>
          <div className="description">
            <button onClick={this.toggleNeeds} className="ui teal button">Needs: </button>
            {
              this.state.isHidden === false ?  
              Object.keys(this.props.event.needs).map(need => 
                <div>
                  <div>{need}</div>
                  <div>
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


