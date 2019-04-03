import React from 'react';
import { Footer, Header } from './Enveloppe';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
        <React.Fragment>
        <div className="parallax"/>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }
}