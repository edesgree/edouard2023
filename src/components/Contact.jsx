import React from 'react';
import Layout from './Ui/Layout';
export default function Contact(props) {
  //spam proof mailto links
  const links = document.querySelectorAll('[data-mailto]');

  for (const link of links) {
    link.setAttribute(
      'href',
      `mailto:${link.dataset.part1}@${link.dataset.part2}.${link.dataset.part3}?subject='contact from desgree.com'`
    );
  }

  return (
    <Layout key="contact">
      <section className="hero">
        <div className="hero-body">
          <h1 className="title has-text-centered is-1 pre-line ">
            {props.dataText.contactTitle[props.lang]}
          </h1>
          <a
            data-mailto
            href=""
            data-part1="edouard"
            data-part2="desgree"
            data-part3="com"
            aria-label="send me an email"
            rel="nofollow"
          >
            <svg
              className="textContact"
              viewBox="0 0 960 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="80%">
                  {props.dataText.contactEmail}
                </text>
              </symbol>

              <g className="g-ants">
                <use xlinkHref="#s-text" className="letter"></use>
                <use xlinkHref="#s-text" className="letter"></use>
                <use xlinkHref="#s-text" className="letter"></use>
                <use xlinkHref="#s-text" className="letter"></use>
                <use xlinkHref="#s-text" className="letter"></use>
              </g>
            </svg>
          </a>
        </div>
      </section>
    </Layout>
  );
}
