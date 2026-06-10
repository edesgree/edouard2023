import React from 'react';
import IconCV from '../../assets/icons/icon-resume.svg';

export default function DownloadResume(props) {
  return (
    <>
      <a
        className="button is-light is-small"
        href={`${
          props.lang === 'fr'
            ? 'https://edesgree.github.io/resume/'
            : 'https://edesgree.github.io/resume/en/'
        }`}
        target="_blank"
        aria-label="Download CV"
        data-tooltip={props.lang === 'fr' ? 'Télécharger CV' : 'Download CV'}
      >
        <span className="icon is-small">
          <img src={IconCV} alt="Download CV" />
        </span>
      </a>
    </>
  );
}
