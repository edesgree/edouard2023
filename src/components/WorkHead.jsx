import React from 'react';
import { ReactComponent as IconGrid } from '../assets/icons/icon-grid.svg';
import { NavLink } from 'react-router-dom';

export default function WorkHead(props) {
  return (
    <header className="header-section">
      <div>
        <h2 className="is-2 title">{props.dataText.workTitle[props.lang]}</h2>
        <p className="block">{props.dataText.workSubTitle[props.lang]}</p>
      </div>

      {props.navBack && (
        <NavLink to="/work" className="button is-secondary" href="#topWork">
          <span className="icon-text">
            <span>{props.dataText.labelBack[props.lang]}</span>
            <span className="icon">
              <IconGrid />
            </span>
          </span>
        </NavLink>
      )}
    </header>
  );
}
