import React, { Component } from 'react'
import NavbarContent from './NavbarContent'
import NavbarIcon from './NavbarIcon'

export default class Navbar extends Component {
  state = {
    isOpen: true
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return <div className="navbar-container">
      <NavbarContent isOpen={this.state.isOpen} />
      <div className="navbar-icon">
        <NavbarIcon
          isOpen={this.state.isOpen}
          handleClick={this.toggleNavbar}
        />
      </div>
    </div>
  }
}