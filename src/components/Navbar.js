import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import { Segment, Menu } from 'semantic-ui-react';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // state = { activeItem: 'home' }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted size="massive" color="orange">
        <Link to="/"><Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
        <Link to="/frontend"><Menu.Item name="Front End" active={activeItem === 'Front End'} onClick={this.handleItemClick} /></Link>
        <Link to="/frontend"><Menu.Item name="Back End" active={activeItem === 'Back End'} onClick={this.handleItemClick} /></Link>
        <Link to="/frontend"><Menu.Item name="Testing" active={activeItem === 'Testing'} onClick={this.handleItemClick} /></Link>
      </Menu>
    );
  }
}
// const Navbar = () => (
//   <Menu pointing inverted size="massive" color="orange">
//     <Menu.Item name="home" active={activeItem === 'home'}textAlign="center">Home</Menu.Item>
//     <Menu.Item name="thing" active={activeItem === 'thing'}textAlign="center">Front End</Menu.Item>
//     <Menu.Item name="thing" active={activeItem === 'thing'}textAlign="center">Back End</Menu.Item>
//     <Menu.Item name="thing" active={activeItem === 'thing'}textAlign="center">Testing</Menu.Item>
//   </Menu>
// );
