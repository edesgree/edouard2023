import React from 'react';
import ResumeEN from '../../assets/pdf/cv-edouard-en-2023.pdf';
import ResumeFR from '../../assets/pdf/cv-edouard-fr-2023.pdf';
import IconCV from '../../assets/icons/icon-resume.svg';

export default function DownloadResume(props) {
  return (
    <a
      className="button is-light is-small"
      href={`${props.lang === 'fr' ? ResumeFR : ResumeEN}`}
      target="_blank"
      data-tooltip={props.lang === 'fr' ? 'Télécharger CV' : 'Download CV'}
    >
      <span className="icon is-small">
        <img src={IconCV} alt="Download CV" />
      </span>
    </a>
  );
}
