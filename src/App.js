import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
        <div className="App">
        <div className="Footer">
          <footer className="contenu">
            <div className="home"><i className="fa fa-home" aria-hidden="true"> MaisondesArtistes@gmail.com </i></div>
            <div className="call"><i className="fa fa-phone" aria-hidden="true"> 0590 87 65 99</i></div>
            <div className='icon social fb'><i className='fa fa-facebook'></i></div>
            <div className='icon social tw'><i className='fa fa-twitter'></i></div>
            <div className='icon social in'><i className='fa fa-instagram'></i></div>
          </footer>
          <div className="container">
          </div>
          </div>
          </div>
      );
    
  }
}

export default App;
