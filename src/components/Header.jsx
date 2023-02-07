import React from 'react';
export default function Header() {
  return (
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <span className="logo">{`<Ed/>`}</span>
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
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
