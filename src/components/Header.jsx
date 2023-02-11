import React from 'react';
import { NavLink } from 'react-router-dom';
import useComponentVisible from '../hooks/UseComponentVisible';

export default function Header(props) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const menuElements = props.dataMenu.map((item) => {
    return (
      <NavLink to={item.slug} key={item.id} className="navbar-item">
        {item.name[props.lang]}
      </NavLink>
    );
  });
  return (
    <header className="main-header">
      <nav
        className="navbar"
        ref={ref}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink exact="true" to="/" className="navbar-item">
            <span className="logo">{`<Ed/>`}</span>
          </NavLink>

          <a
            onClick={() => setIsComponentVisible(!isComponentVisible)}
            role="button"
            className={`navbar-burger burger ${
              isComponentVisible ? 'is-active' : ''
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="main-navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="main-navbar"
          className={`navbar-menu ${isComponentVisible ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            {menuElements}
            <a
              className="button is-primary is-inverted"
              onClick={props.handleTrad}
            >
              {props.lang === 'fr' ? 'en' : 'fr'}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
