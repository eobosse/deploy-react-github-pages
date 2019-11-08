import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { watchFile } from 'fs';

export default class Join extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedText: 'Envoyer'
    }
  }

  handleClick = () => {
    setTimeout(function(){
      document.getElementById("gform").reset();
  }, 200);
  this.setState({ clickedText: "Votre message a été envoyé" });
};

  render() {
    return (
      <React.Fragment>
      <Form className="section-content" name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSeNajhbozOb9Wfyz8NXTu5EQ59lVWUAwUpzmNH6yU8WghuwTw/formResponse?" target="hidden_iframe" >
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="nom">Prénom</Label>
              <Input type="text" name="entry.77058004" id="entry.77058004" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="surname">Nom</Label>
              <Input type="text" name="entry.861984092" id="entry.861984092" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="entry.332990127" id="entry.332990127"/>
        </FormGroup>

            <FormGroup>
              <Label for="ecole">École ou Organisme</Label>
              <Input type="text" name="entry.1566275580" id="entry.1566275580"/>
            </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="textarea" name="entry.1175472559" id="entry.1175472559" />
        </FormGroup>
        <Button type="submit" value="Submit" onClick={() => this.handleClick()}>{this.state.clickedText}</Button>
      </Form>
      <div dangerouslySetInnerHTML={{__html: '<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(true) {}"></iframe>'}}/>
      </React.Fragment>
    );
  }
}
