import React from 'react';
export default function Header(props) {
  const [menuIsActive, setMenuIsActive] = React.useState(false);

  const menuElements = props.dataMenu.map((item) => {
    return (
      <a key={item.id} className="navbar-item">
        {item.name[props.lang]}
      </a>
    );
  });
  return (
    <header className="main-header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <span className="logo">{`<Ed/>`}</span>
          </a>

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
