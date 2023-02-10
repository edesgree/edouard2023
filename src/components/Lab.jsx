import React from 'react';
import LabDetail from './LabDetail';
import IconGrid from '../assets/icons/icon-grid.svg';

export default function Lab(props) {
  const [currentProject, setCurrentProject] = React.useState(null);
  const handleChoice = (event) => {
    event.preventDefault();
    setCurrentProject(event.currentTarget.id);
  };
  const handleCloseProject = (event) => {
    event.preventDefault();
    setCurrentProject(null);
  };
  const labElements = props.dataLab.map((item) => {
    return (
      <li key={item.id} id={item.id} onClick={handleChoice} href="#topLab">
        <div className="media">
          <img
            src={`src/assets/images/lab/${item.slug}/${item.images.cover}`}
            alt={item.name}
          />
        </div>
        <div className="project-info">
          <h4 className="is-4 title">{item.name}</h4>
          <span>{item.subtitle}</span>
        </div>
      </li>
    );
  });

  return (
    <section className="section">
      <a id="topLab"></a>
      <header className="header-section">
        <div>
          <h2 className="is-2 title">{props.dataText.labTitle[props.lang]}</h2>
          <p className="block">{props.dataText.labSubTitle[props.lang]}</p>
        </div>

        {currentProject && (
          <>
            <a
              className="button is-light is-info"
              href="#topLab"
              onClick={handleCloseProject}
            >
              <span className="icon-text">
                <span>{props.dataText.labelBack[props.lang]}</span>
                <span className="icon">
                  <img src={IconGrid} />
                </span>
              </span>
            </a>
          </>
        )}
      </header>

      {!currentProject && <ul className="project-list">{labElements}</ul>}
      {currentProject && (
        <LabDetail
          dataLabDetail={props.dataLab}
          dataText={props.dataText}
          currentProject={currentProject}
          handleCloseProject={handleCloseProject}
          lang={props.lang}
        />
      )}
    </section>
  );
}
