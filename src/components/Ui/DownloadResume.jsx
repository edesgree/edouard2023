import React from 'react';
import ResumeEN from '../../assets/pdf/cv-edouard-en-2023.pdf';
import ResumeFR from '../../assets/pdf/cv-edouard-fr-2023.pdf';

export default function DownloadResume(props) {
  return (
    <a
      className="button is-light is-small"
      href={`${props.lang === 'fr' ? ResumeFR : ResumeEN}`}
      target="_blank"
    >
      <span>Download CV</span>
    </a>
  );
}
