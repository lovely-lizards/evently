import React from 'react';

export default class ShowNeeds extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isHidden: true,
      tab: this.props.tab
    }
  this.toggleNeeds = this.toggleNeeds.bind(this);
  }


  /*  Toggles the isHidden state */
	toggleNeeds () {
		this.setState({
			isHidden : !this.state.isHidden

		});
	}


  render () {
    return (
      <div className="card" key={this.props.idx}>
        <div className="content">
          <h4 className="header">{this.props.event.title}</h4>
          <h6 className="meta">Date: {this.props.event.date}</h6>
          <h6 className="meta">Location: {this.props.event.location}</h6>
          <div className="description">
            <button onClick={this.toggleNeeds} className="ui teal button">Needs: </button>
            {
              /*  If state.isHidden is false renders the following */
              this.state.isHidden === false ?  
              Object.keys(this.props.event.needs).map((need, idx) => 
                <div>
                  <div key={idx}>{need}</div>
                  <div>
                    {
                      Object.keys(this.props.event.needs[need]).map((item, idx) => 
                        <li key={idx}>{item === 'budget' ? 'Budget: ' + this.props.event.needs[need].budget: item}</li>      
                      )
                    }
                    {
                      this.state.tab === 'upcoming' ? 
                      <form>
                        <button className="tiny ui teal button" type="submit">
                        Bid
                        </button>
                        <input type="string" name="Place Bid"/>
                      </form>                      
                      : null
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


