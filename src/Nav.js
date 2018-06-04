/* eslint-disable */
import React from 'react';
import axios from 'axios';

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      nav: []
    }
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/fanduel/moneyball-fe-challenge-data/nav_elements')
      .then( res => res.data)
      .then( nav => this.setState({ nav }))
  }

  render() {
    const { nav } = this.state
    return (
      <header className="app__header">

        <ul className="app__header__main-nav">
          <li className="logo">

          </li>
          {
            nav.map(link => (
              <a style={{ textDecoration: 'none', color: '#ffffff' }} key={link.title} href={`${link.href}`}>
                <li>{link.title}</li>
              </a>
            ))
          }
          <li>
            Friends
			</li>
        </ul>

        <div className="app__header__account">

        </div>
      </header>
    )
  }
}

export default Nav
