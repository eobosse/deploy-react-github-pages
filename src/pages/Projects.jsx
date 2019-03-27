import React from 'react';
import { Section } from '../Components';
import LoremIpsum from '../texts/loremipsum';
import '../main.css';

export default class Projects extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }

      render() {
          return (
            this.props.projectName === "confessional" ? 
              <Section id="confessional" title="Le confessional" section="confessional" subtitle={LoremIpsum}/> : <div/>
          )
      }
}