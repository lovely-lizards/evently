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
    var bgStyle = {
      backgroundImage: "url('https://images.pexels.com/photos/195280/pexels-photo-195280.jpeg?w=940&h=650&auto=compress&cs=tinysrgb')",
      backgroundSize: "cover"
    } 
    return (
      <div>
        { 
          this.state.path !== '/main' ? 
            <div>
              <div>
                <div className="ui large top fixed hidden menu">
                  <div className="ui container">
                    <a className="active item">Home</a>
                    <a className="item">Work</a>
                    <a className="item">Company</a>
                    <a className="item">Careers</a>
                    <div className="right menu">
                      <div className="item">
                        <button type="submit" className="ui button">Log in</button>
                      </div>
                      <div className="item">
                        <button type="submit" className="ui primary button">Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ui vertical inverted sidebar menu">
                  <a className="active item">Home</a>
                  <a className="item">Work</a>
                  <a className="item">Company</a>
                  <a className="item">Careers</a>
                  <a className="item">Login</a>
                  <a className="item">Signup</a>
                </div>

                <div className="pusher">
                  <div className="ui inverted vertical masthead center aligned segment" style={bgStyle}>

                    <div className="ui container">
                      <div className="ui large secondary inverted pointing menu">
                        <a className="toc item">
                          <i className="sidebar icon"></i>
                        </a>
                        <a className="active item"><h1>Evently</h1></a>
                        <div className="right item">
                          <form action="/auth/facebook">
                            <button type="submit" className="ui teal button">Log in</button>
                          </form>
                          <form action="/auth/facebook">
                          <button type="submit" className="ui teal button">Sign Up</button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="ui text container">
                      <h1 className="ui inverted header">
                        Get things done
                      </h1>
                      <h2>Do whatever you want, when you want to.</h2>
                      <form action="/auth/facebook">
                      <button type="submit" className="ui huge primary button">Sign in with Facebook <i className="right arrow icon"></i></button>
                      </form>
                    </div>

                  </div>

                  <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                      <div className="row">
                        <div className="eight wide column">
                          <h3 className="ui header">We Help You Find The Perfect Vendor For Your Event Needs</h3>
                          <p>We can give you superpowers to do things that you never thought possible...</p>
                        </div>
                        <div className="six wide right floated column">
                          <img src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?h=350&auto=compress&cs=tinysrgb" className="ui large bordered rounded image"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="center aligned column">
                          <form action="/auth/facebook">
                           <button type="submit" className="ui huge teal button">Check Them Out</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="ui vertical stripe quote segment">
                    <div className="ui equal width stackable internally celled grid">
                      <div className="center aligned row">
                        <div className="column">
                          <h3>"Great stuff!"</h3>
                          <p>- Jasper's Comfort Food</p>
                        </div>
                        <div className="column">
                          <h3>"What a Company"</h3>
                          <p>- RyPizzle Records</p>
                        </div>
                        <div className="column">
                          <h3>"Evently allows the host to focus on the attendants"</h3>
                          <p>- Chief Fun Officer Peter Tan</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ui inverted vertical teal footer segment">
                    <div className="ui container">
                      <div className="ui stackable inverted divided equal height stackable grid">
                        <div className="three wide column">
                          <h4 className="ui inverted header">About</h4>
                          <div className="ui inverted link list">
                            <a href="#" className="item">Contact Us</a>
                            <a href="#" className="item">Founders</a>
                            <a href="#" className="item">Evently Careers</a>
                          </div>
                        </div>
                        <div className="three wide column">
                          <h4 className="ui inverted header">Services</h4>
                          <div className="ui inverted link list">
                            <a href="#" className="item">Locate Vendors</a>
                            <a href="#" className="item">Event locations</a>
                          </div>
                        </div>
                        <div className="seven wide column">
                          <h4 className="ui inverted header">© 2017 Evently</h4>
                          <p>Getting things done..</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : <App/>
        }
      </div>
    )

  }
}

ReactDOM.render(<Login />, document.getElementById('evently'));

/*
 {        
          this.state.path !== '/main' ? 
           <div>
              <div className="ui large top fixed hidden menu">
                <div class="ui container">
                  <a class="active item">Home</a>
                  <div class="right menu">
                    <div class="item">
                      <a class="ui button">Log in</a>
                    </div>
                    <div class="item">
                      <a class="ui primary button">Sign Up</a>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="ui header">Evently</h1>
              <p>
              Simplify hosting events by connecting vendors to the host to eliminate the logistical needs
              </p>

              <p>Login in and get started</p>
              <form action="/auth/facebook">
                <button type="submit" className="ui blue button">Login</button>              
              </form>
            </div> : <App/>
        }
*/
