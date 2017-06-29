import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Hosts from './Hosts.jsx';
import Vendors from './Vendors.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'landing'
    }
  }
  changeView(page) {
    this.setState({
      currentPage: page
    })
  }
  render () {
    return (
      <div>
        {console.log(this.state.currentPage)}
        <div className="container">
          <h1>Evently</h1>
          <span className={this.state.view === 'host' ? 'nav-selected' : 'nav-unselected'}
          onClick={() => this.changeView('host')}>
          Host
          </span>
          <span className={this.state.view === 'vendor' ? 'nav-selected' : 'nav-unselected'}
          onClick={() => this.changeView('vendor')}>
          Vendor
          </span>
          <div>
            {this.state.currentPage === 'host' ? <Hosts/> : null}
            {this.state.currentPage === 'vendor' ? <Vendors/> : null}
          </div>
        </div>
      </div>
    )
  }

}

export default App; 