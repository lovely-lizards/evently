import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hosts: [],
      vendors: []
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
      
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('evently'));