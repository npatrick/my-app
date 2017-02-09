import React, { Component } from 'react';
import '../style/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div>{this.props.navigation}</div>
        <div className="main">{this.props.main}</div>
        <div>{this.props.footer}</div>
      </div>
    );
  }
}
