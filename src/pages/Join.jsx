import React from 'react';
import  { Section, Form } from '../Components';
import '../main.css';

export default class Projects extends React.Component {
      render() {
        let subtitleStyle={
          fontWeight: "bold",
          fontSize: "25px",
          color: "black"
        }
          return (
            <React.Fragment>
              <Section title="Nous Joindre"/>
              <Form/>
              <Section id="confessionnal" section="confessionnal" subtitle={<p style={subtitleStyle}>Pour réservation, contactez-nous au theatrepointvirgule@gmail.com</p>} />
            </React.Fragment>
          )
      }
}