import React, { Component } from 'react';

class Qualifications extends Component {
  render() {
    return (
      <div>
        <h2>Qualifications</h2>
        <hr></hr>
        <li>
          <h3>Bachelor's Degree in Mechatronics Engineering</h3>
          <a
            href="https://www.guc.edu.eg/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>German University in Cairo</p>
          </a>
        </li>
        <hr></hr>
        <li>
          <h3>Full Stack Web Development Bootcamp</h3>
          <a
            href="https://www.ironhack.com/de-en/berlin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Ironhack</p>
          </a>
        </li>
      </div>
    );
  }
}

export default Qualifications;
