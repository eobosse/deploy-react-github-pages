import React from 'react';
import  Main  from './Main';
import Footer from './Footer';
import Header from './Header';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
        <React.Fragment>
        <div className="parallax"/>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}