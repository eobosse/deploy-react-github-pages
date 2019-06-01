import React from 'react';
import  { Section } from '../Components';
import Emilie from '../images/EmilieBosse.jpg';
import Alexandra from '../images/AlexandraFontaine.jpg';
import EricOlivier from '../images/ericolivierbosse.jpg';
import Mission from '../texts/mission';
import TextEmilie from '../texts/texteEmilie';
import TextAlexandra from '../texts/texteAlexandra';
import TextEricOlivier from '../texts/texteEric-Olivier';
import '../main.css';
import Person from '../Components/Person';

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
            <div className="info">
              <Section id="mission" title="Notre Mission" section="mission" subtitle={Mission}/>
            </div>
            <div className="info">
            <Section id="equipe" title="Notre Équipe" section="equipe" />
            <Person title="Presidente, Productrice, auteure et interprète " name="Émilie Bossé" imagePath={Emilie} description={TextEmilie}/>
            <Person title="Secretaire, productrice et interprète " name="Alexandra Fontaine" imagePath={Alexandra} description={TextAlexandra}/>
            <Person title="Developpeur web et Tresorier " name="Éric-Olivier Bossé" imagePath={EricOlivier} description={TextEricOlivier}/>
            </div>

            
          </div>
        )
      }
}