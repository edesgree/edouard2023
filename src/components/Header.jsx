import React from 'react';
export default function Header() {
  const [menuIsActive, setMenuIsActive] = React.useState(false);
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <span className="logo">{`<Ed/>`}</span>
          </a>

          <a
            onClick={() => setMenuIsActive(!menuIsActive)}
            role="button"
            class={`navbar-burger burger ${menuIsActive ? 'is-active' : ''}`}
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
          class={`navbar-menu ${menuIsActive ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <a className="navbar-item">About</a>
            <a className="navbar-item">Work</a>
            <a className="navbar-item">Lab</a>
            <a className="navbar-item">Contact</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">dark</div>
          </div>
        </div>
      </nav>
    </header>
  );
}
