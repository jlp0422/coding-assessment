/* eslint-disable */
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


const Nav = ({ nav }) => {
  if (!nav) return null
  return (
    <header className="app__header">

      <ul className="app__header__main-nav">
        <li className="logo"></li>
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

      <div className="app__header__account"></div>
    </header>
  )
}

const mapState = ({ nav }) => ({ nav })

export default connect(mapState)(Nav)
