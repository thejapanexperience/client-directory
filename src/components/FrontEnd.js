import React, { Component } from 'react';
import { Card, Icon, Image, Label, Container, Header, Menu, Input, Grid } from 'semantic-ui-react';

import ToAPIActions from '../actions/ToAPIActions';
import Store from '../stores/Store';

export default class FrontEnd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'React',
      text1: 'Hello World',
      text2: 'Foo Bar',
      text3: 'Sample',
    };
    this._onChange = this._onChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillMount() {
    Store.startListening(this._onChange);
  }

  componentWillUnmount() {
    Store.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({

    });
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem, text1, text2, text3 } = this.state;
    let cardContent;
    if (activeItem === 'React') {
      cardContent =
        (<Card.Content>
          <Card.Header>
            <a href="https://facebook.github.io/react/">Link to React</a>
          </Card.Header>
          <Card.Meta>
            <span className="date">
              by Richard Mands
            </span>
          </Card.Meta>
          <Card.Description>
            React allows you to build front-end UIs using components that live update. Written in JSX.
          </Card.Description>
        </Card.Content>);
    }

    if (activeItem === 'Flux') {
      cardContent =
        (<Card.Content>
          <Card.Header>
            <a href="https://facebook.github.io/react/">Link to Flux</a>
          </Card.Header>
          <Card.Meta>
            <span className="date">
              by Richard Mands
            </span>
          </Card.Meta>
          <Card.Description>
            React allows you to build front-end UIs using components that live update. Written in JSX.
          </Card.Description>
        </Card.Content>);
    }

    if (activeItem === 'Webpack') {
      cardContent =
        (<Card.Content>
          <Card.Header>
            <a href="https://facebook.github.io/react/">Link to Webpack</a>
          </Card.Header>
          <Card.Meta>
            <span className="date">
              by Richard Mands
            </span>
          </Card.Meta>
          <Card.Description>
            React allows you to build front-end UIs using components that live update. Written in JSX.
          </Card.Description>
        </Card.Content>);
    }

    return (
      <div>

        <Card fluid>
          <div>
            <Container fluid className="cardImage">
              <Header as="h1" id="MainTitle" className="cardText">The Front End</Header>
            </Container>
          </div>
          <Card.Content>
            <Menu inverted size="massive" color="yellow" widths={3}>
              <Menu.Item name="React" active={activeItem === 'React'} onClick={this.handleItemClick} />
              <Menu.Item name="Flux" active={activeItem === 'Flux'} onClick={this.handleItemClick} />
              <Menu.Item name="Webpack" active={activeItem === 'Webpack'} onClick={this.handleItemClick} />
            </Menu>
          </Card.Content>
          {cardContent}
        </Card>

        <Card.Group id="reactCards" itemsPerRow={3}>
          <Card fluid centered>
            <div>
              <Container fluid className="cardImage">
                <Header as="h1" className="cardText">{text1}</Header>
              </Container>
            </div>
            <Card.Content>
              <div className="ui right labeled left icon fluid input">
                <i className="tags icon" />
                <input type="text" placeholder="Enter text" />
                <a className="ui tag label">
                  Add Tag
                </a>
              </div>
            </Card.Content>
          </Card>
          <Card fluid centered>
            <div>
              <Container fluid className="cardImage">
                <Header as="h1" className="cardText">{text2}</Header>
              </Container>
            </div>
            <Card.Content>
              <div className="ui right labeled left icon fluid input">
                <i className="tags icon" />
                <input type="text" placeholder="Enter words" />
                <a className="ui tag label">
                  Add Tag
                </a>
              </div>
            </Card.Content>
          </Card>
          <Card fluid centered>
            <div>
              <Container fluid className="cardImage">
                <Header as="h1" className="cardText">{text3}</Header>
              </Container>
            </div>
            <Card.Content>
              <div className="ui right labeled left icon fluid input">
                <i className="tags icon" />
                <input type="text" placeholder="Enter things" />
                <a className="ui tag label">
                  Add Tag
                </a>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
  }
}
