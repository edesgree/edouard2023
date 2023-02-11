import React from 'react';
import { NavLink } from 'react-router-dom';
import useComponentVisible from '../hooks/UseComponentVisible';
import IconDark from '../assets/icons/moon.svg';
import IconLight from '../assets/icons/sun.svg';
import DarkModeSwitch from './Ui/DarkModeSwitch';
import DarkModeSwitch2 from './Ui/DarkModeSwitch2';
export default function Header(props) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const menuElements = props.dataMenu.map((item) => {
    return (
      <NavLink
        to={item.slug}
        key={item.id}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        className="navbar-item"
      >
        <span>{item.name[props.lang]}</span>
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
            <div className="field has-addons">
              <p className="control">
                <button
                  className="button is-small is-primary is-inverted"
                  onClick={props.handleTrad}
                >
                  <span>{props.lang === 'fr' ? 'en' : 'fr'}</span>
                </button>
              </p>
              <p className="control">
                <button className="button is-primary is-inverted is-small">
                  <span className="icon is-small">
                    <DarkModeSwitch />
                  </span>
                </button>
              </p>
              <p className="control">
                <DarkModeSwitch2 />
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
