import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Landing from './components/landing.jsx';
import Hosts from './components/hosts.jsx';
import Vendors from './components/vendors.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'landing'
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

  componentDidMount() {

  }


  render () {
    return (
      <div className="container">
        <h1>Evently</h1>
      {
        this.state.currentPage === 'landing' ? <Landing/> : null
      }
      {
        this.state.currentPage === 'hosts' ? <Hosts/> : null
      }
      {
        this.state.currentPage === 'vendors' ? <Landing/> : null
      }
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('evently'));