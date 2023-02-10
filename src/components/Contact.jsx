import React from 'react';
export default function Contact(props) {
  return (
    <>
      <section class="hero">
        <div class="hero-body">
          <h1 className="title has-text-centered is-1 pre-line ">
            {props.dataText.contactTitle[props.lang]}
          </h1>
          <svg
            className="textContact"
            viewBox="0 0 960 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="80%">
                {props.dataText.contactEmail}
              </text>
            </symbol>

            <g class="g-ants">
              <use xlinkHref="#s-text" class="letter"></use>
              <use xlinkHref="#s-text" class="letter"></use>
              <use xlinkHref="#s-text" class="letter"></use>
              <use xlinkHref="#s-text" class="letter"></use>
              <use xlinkHref="#s-text" class="letter"></use>
            </g>
          </svg>
        </div>
      </section>
    </>
  );
}
