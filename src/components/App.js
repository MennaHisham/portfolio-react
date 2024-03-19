import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profilePicture from '../assets/my-pic.jpg';
import Qualifications from './Qualifications';
import '../index.css';

class App extends Component {
  state = { displayBio: false };

  ArabicStyle = {
    padding: 30,
    textAlign: 'right',
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <img src={profilePicture} alt="profile" className="profile" />
            <h1>Hello</h1>
            <p>I am Minatallah</p>
            <Title />
            {this.state.displayBio ? (
              <div>
                <p>
                  I graduted with a bachelor's degree in Mechatronics
                  Engineering.
                </p>
                <p>Working as a web developer.</p>
                <button onClick={this.toggleDisplayBio} className="btn">
                  Hide
                </button>
              </div>
            ) : (
              <div>
                <button onClick={this.toggleDisplayBio} className="btn">
                  <span>Read more</span>
                </button>
              </div>
            )}
          </div>
          <div className="column">
            <Qualifications />
          </div>
        </div>
        <div></div>
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
