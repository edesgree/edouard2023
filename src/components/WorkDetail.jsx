import React from 'react';
export default function WorkDetail() {
  return (
    <section>
      <h2 className="is-2 title">Les pêcheurs</h2>
      <div className="columns">
        <div className="columnsticky column is-4">
          <h4 className="title  is-4">Resume</h4>
          <p>
            Les pêcheurs est une émission humoristique de Martin Petit diffusée
            sur radio-canada.
          </p>

          <p>
            J'ai travaillé sur le volet numérique de l'émission qui contient un
            site web et un magazine numérique disponible sur iPad/android ainsi
            qu'en version web.
          </p>

          <p>
            Mon travail était le développement front-end du site web, du
            magazine web ainsi que des gabarits webview pour les applications
            tablettes. J'ai également participé à la déclinaison graphique de
            maquettes en suivant la direction artistique.
          </p>
        </div>
        <div className=" column is-8">
          <img
            src="src/assets/images/work/pecheurs/pecheurs-desktop.jpg"
            alt=""
            className="img-responsive"
          />
          <img
            src="src/assets/images/work/pecheurs/peche-sugar-tablet.jpg"
            alt=""
            className="img-responsive"
          />
        </div>
      </div>
      <div className="columns">
        <div className="columnsticky column is-4">
          <div className="block">
            <h4 className="title  is-4"> Mon travail</h4>
            <p>
              HTML, CSS, déclinaison de maquettes graphiques, création
              d'éléments graphiques
            </p>
          </div>
          <div className="block">
            <h4 className="title  is-4">Technologies utilisées</h4>
            <p>HTML, LESS, JS, Bootstrap, templates TWIG.</p>
          </div>
        </div>
        <div className=" column is-8">
          <img
            src="src/assets/images/work/pecheurs/peche-nav-tablet.jpg"
            alt=""
            className="img-responsive"
          />
          <img
            src="src/assets/images/work/pecheurs/peche-home-tablet.jpg"
            alt=""
            className="img-responsive"
          />

          <img
            src="src/assets/images/work/pecheurs/peche-dessous-tablet.jpg"
            alt=""
            className="img-responsive"
          />
        </div>
      </div>
    </section>
  );
}
