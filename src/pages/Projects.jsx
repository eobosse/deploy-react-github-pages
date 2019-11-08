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
              <Section id="confessionnal" section="confessionnal" subtitle={Confessionnal} />
              <div className="info">
                <Section id="Synopsis" title="Synopsis"  subtitle={Synopsis} citation={<p style={{fontWeight: "bold", fontStyle: "italic"}}>«Je voudrais m’enterrer dans un gros trou le temps que je trouve le courage d’affronter ce qui s’en vient. Juste le temps que ça passe pis que mon cœur devienne moins gros. »</p>} credit={<p style= {{fontWeight: "bold"}}>-Élodie</p>}/>
                <Section id="Themes" title="Thèmes"  subtitle={Themes}/>
                <Section id="Description" title="Description"  subtitle={Description}/>
              </div>

              <div className="info">
                <Section id="cqep" title="Ce qu'ils en pensent"  subtitle={"«Aborder les thématiques qui préoccupent les adolescents de manière humoristique : mission accomplie!»"} citation={"«Nous avons eu beaucoup de plaisir à lire la pièce et nous en aurons tout autant à la voir sur scène!»"} credit={"-Des intervenants de Tel-jeunes"} citation2={Commentaires} credit2={"-Nicole Longchamps, psychologue de l’École secondaire Polybel"}/>
              </div>
            </React.Fragment>
               : <div/>
          )
      }
}