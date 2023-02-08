import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [menuIsActive, setMenuIsActive] = React.useState(false);

  const menuElements = props.dataMenu.map((item) => {
    return (
      <Link to={item.slug} key={item.id} className="navbar-item">
        {item.name[props.lang]}
      </Link>
    );
  });
  return (
    <header className="main-header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link exact="true" to="/" className="navbar-item">
            <span className="logo">{`<Ed/>`}</span>
          </Link>

          <a
            onClick={() => setMenuIsActive(!menuIsActive)}
            role="button"
            className={`navbar-burger burger ${
              menuIsActive ? 'is-active' : ''
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
          className={`navbar-menu ${menuIsActive ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            {menuElements}
            <a className="navbar-item" onClick={props.handleTrad}>
              {props.lang === 'fr' ? 'en' : 'fr'}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
