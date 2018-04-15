import React, { Component } from 'react';

export default class Map extends Component {
  render() {
    return (
      <div className="user-map">
        <h1>Buraya {this.props.name} geliyor.</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
