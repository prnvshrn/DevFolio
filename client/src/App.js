import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header.js';
import ReportComponent from './components/report.js';

class App extends Component {
	constructor(props){
    super(props);
    this.state = {
      current_tab: 'Home'
    };
    this.handler = this.handler.bind(this);
  }


  handler(e){
      this.setState({
      current_tab: e.target.id
    })
  }

  render() {
  	let show_panel;

    switch(this.state.current_tab){
      case 'Home':
      alert('Home');
      break;

      case 'Report':
      show_panel = <ReportComponent/>;
      break;

      default:
      break;
    }

    return (
      <div className="App">
        <HeaderComponent handler={this.handler}/>
        {show_panel}
      </div>
    );
  }
}

export default App;
