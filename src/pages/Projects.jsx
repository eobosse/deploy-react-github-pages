import React from 'react';
import { Section } from '../Components';
import Confessionnal from '../texts/confessionnal';
import Description from '../texts/description';
import Synopsis from '../texts/synopsis';
import Themes from '../texts/themes';
import Commentaires from '../texts/commentaires';
import '../main.css';

export default class Projects extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0;
  }

      render() {
          return (
            this.props.projectName === "confessionnal" ? 
            <React.Fragment>
              <Section id="confessionnal" section="confessionnal" subtitle={Confessionnal}/>
              <div className="info">
                <Section id="Synopsis" title="Synopsis"  subtitle={Synopsis}/>
                <Section id="Themes" title="Themes"  subtitle={Themes}/>
                <Section id="Description" title="Description"  subtitle={Description}/>
              </div>

              <div className="info">
                <Section id="cqep" title="Ce qu'ils en pensent"  subtitle={Commentaires}/>
              </div>
            </React.Fragment>
               : <div/>
          )
      }
}