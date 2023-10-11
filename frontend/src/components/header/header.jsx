import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import logo from "../../assets/images/logo.png";
import './header.css';

const nav__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: "/about",
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
];

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((items, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={items.path}>{items.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
              <Link to='/login'>
                  <Button className="btn secondary__btn">Login</Button>
              </Link>
              <Link to='/register'>
                  <Button className="btn primary__btn">Register</Button>
              </Link>

              </div>
              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>

            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
