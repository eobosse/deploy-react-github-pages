import React from 'react';
import Footer from './Footer';
import Header from './Header';
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