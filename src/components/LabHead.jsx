import React from 'react';
import { ReactComponent as IconGrid } from '../assets/icons/icon-grid.svg';
import { NavLink } from 'react-router-dom';

export default function LabHead(props) {
  return (
    <header className="header-section">
      <div>
        <h1 className="is-2 title">{props.dataText.labTitle[props.lang]}</h1>
        <p className="block">{props.dataText.labSubTitle[props.lang]}</p>
      </div>

      {props.navBack && (
        <NavLink to="/lab" className="button is-secondary">
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
