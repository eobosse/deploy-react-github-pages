import React from 'react';
import  { Section } from '../Components';
import LoremIpsum from '../texts/loremipsum';
import '../main.css';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        
          this.state = {
              isOpen: false
          };
      }
    
      render() {
        return (
          <div>
            <Section id="mission" title="Notre Mission" section="mission" subtitle={LoremIpsum}/>
            <Section id="equipe" title="Notre Équipe" section="equipe" subtitle={LoremIpsum}/>
          </div>
        )
      }
}