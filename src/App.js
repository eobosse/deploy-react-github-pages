import React from 'react';
import { Footer, Header } from './Enveloppe';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        background: "texturedefault"
    };
  }

  selectBackground(name) {
    this.setState({background: name});
}

  render() {
    return (
        <div  className={this.state.background} >
        <Header selectBackground={this.selectBackground.bind(this)}/>
        <Footer/>
      </div>
    );
  }
}