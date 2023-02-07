import React from 'react';
export default function Header() {
  const [menuIsActive, setMenuIsActive] = React.useState(false);
  return (
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
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
          <div class="navbar-start">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Work</a>
            <a class="navbar-item">Lab</a>
            <a class="navbar-item">Contact</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">dark</div>
          </div>
        </div>
      </nav>
    </header>
  );
}
