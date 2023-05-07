import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '#',
    display: 'about'
  },
  {
    path: '/tours',
    display: 'Tours'
  },

]

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">

            {/* {======== logo=========} */}

            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* {======== logo end=========} */}


          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header