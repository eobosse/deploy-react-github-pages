import React from 'react';
import  { Section } from '../Components';
import LoremIpsum from '../texts/loremipsum';
import '../main.css';

export default class Projects extends React.Component {
      render() {
          return (
            <Section title="Nous Joindre" subtitle={LoremIpsum}/>
          )
      }
}