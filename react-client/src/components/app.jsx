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
          <div className="container">

            <ul className="nav nav-pills">

              <li role="presentation" className='nav-item'>
                <a className={'nav-link '.concat(this.state.view === 'host' ? 'active' : null)} onClick={()=>this.changeView('host')} href='#'>Host</a>
              </li>
              <li role="presentation" className='nav-item'>
                <a className={'nav-link '.concat(this.state.view === 'vendor' ? 'active' : null)} onClick={()=>this.changeView('vendor')} href='#'>Vendor</a>
              </li>
            </ul>  
          
          </div>
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