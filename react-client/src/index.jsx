import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Hosts from './components/hosts.jsx';
import Vendors from './components/vendors.jsx';
import Landing from './components/landing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'host'
    }
  }

  // searchDesigners (designType) {
  //   $.ajax({
  //     url: '/designers',
  //     method: 'GET',
  //     data: {designType: designType},
  //     success: (designers) => {
  //       // console.log('INSIDE SEARCH DESIGNERS: ', designers);
  //       this.setState({
  //         designers: designers
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   })
  // }
  
  changeView(page) {
    this.setState ({
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
            {this.state.currentPage === 'landing' ? <Landing/> : null}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('evently'));
