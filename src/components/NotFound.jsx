import React from 'react';
import Gif404 from '../assets/images/404.gif';

export default function NotFound() {
  return (
    <section className="section has-text-centered">
      <h2 className="is-2 title">Not found</h2>
      <img src={Gif404} alt="404 not found" />
    </section>
  );
}
