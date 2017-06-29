import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Hosts from './components/hosts.jsx';
// import Vendors from './components/vendors.jsx';
// import Landing from './components/landing.jsx';
import App from './components/app.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      path: window.location.pathname
    };
  }

  // loginClick() {
  //   console.log('INSIDE LOGIN CLICK')
  //   // $.ajax({
  //   //   url: '/auth/facebook',
  //   //   method: 'GET',
  //   //   success: function(results) {
  //   //     console.log('INSIDE SUCCESS OF LOGINCLICK')
  //   //   }
  //   // });
  // }

  componentDidMount() {

  }

  render () {
    return (
      <div className="container">
        {        
          this.state.path !== '/main' ? 
           <div className="jumbotron">
              <h1 className="display-3">Evently</h1>
              <p className="lead">
              Simplify hosting events by connecting vendors to the host to eliminate the logistical needs
              </p>

              <p>Login in and get started</p>
              <form action="/auth/facebook">
                <button type="submit" className="btn btn-primary containerCenter">Login</button>              
              </form>
            </div> : <App/>
        }
      </div>
    )

  }
}

ReactDOM.render(<Login />, document.getElementById('evently'));


// <span className={this.state.view === 'vendor' ? 'nav-selected' : 'nav-unselected'}
// onClick={() => this.changeView('vendor')}>