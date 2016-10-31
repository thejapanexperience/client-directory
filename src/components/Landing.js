import React from 'react';
import { Card, Icon, Image, Label, Container, Header } from 'semantic-ui-react';

const Landing = () => (
  <Card fluid>
    <div>
      <Container fluid id="landingImage">
        <Header as="h1" id="landingTitle">Richard's Revision App</Header>
      </Container>
    </div>
    <Card.Content>
      <Card.Header>
        Richard's Revision App Helps You To Become A Full-Stack Developer
      </Card.Header>
      <Card.Meta>
        <span className="date">
          Created in October 2016
        </span>
      </Card.Meta>
      <Card.Description>
        Review your front end and back end skills.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        186 349 Friends
      </a>
    </Card.Content>
  </Card>
);

export default Landing;
