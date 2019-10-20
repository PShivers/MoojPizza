import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";



const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #00000 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu 
      inverted 
      id="menu"
      style={{display: 'flex', justifyContent:'center'}} >
        <Menu.Item
          className="menu-button"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='menu'
          active={activeItem === 'menu'}
          onClick={this.handleItemClick}
        >
          Menu
        </Menu.Item>

        <Menu.Item
          name='location-and-hours'
          active={activeItem === 'location-and-hours'}
          onClick={this.handleItemClick}
        >
            Location & Hours
        </Menu.Item>

        <Menu.Item
          name='friends-and-partners'
          active={activeItem === 'friends-and-partners'}
          onClick={this.handleItemClick}
        >
            Friends & Partners
        </Menu.Item>

        <Menu.Item
          name='about-mojo'
          active={activeItem === 'about-mojo'}
          onClick={this.handleItemClick}
        >
            About Mojo
        </Menu.Item>

      </Menu>
    )
  }
}