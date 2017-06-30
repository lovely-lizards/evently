import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import App from './components/App.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      path: window.location.pathname
    };
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
