import React from 'react';
import WorkDetail from './WorkDetail';
import { Route, Routes } from 'react-router-dom';

export default function Work(props) {
  const [currentProject, setCurrentProject] = React.useState(null);
  const handleChoice = (event) => {
    event.preventDefault();
    setCurrentProject(event.currentTarget.id);
  };
  const handleCloseProject = (event) => {
    event.preventDefault();
    setCurrentProject(null);
  };
  const workElements = props.dataWork.map((item) => {
    return (
      <li key={item.id} id={item.id} onClick={handleChoice} href="#topWork">
        <div className="media">
          <img
            src={`src/assets/images/work/${item.slug}/${item.images.cover}`}
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
      <a id="topWork"></a>
      <header className="header-section">
        <h2 className="is-2 title">{props.dataText.workTitle[props.lang]}</h2>
        {currentProject && (
          <>
            <a
              className="button is-light is-info"
              href="#topWork"
              onClick={handleCloseProject}
            >
              {props.dataText.labelBack[props.lang]}
            </a>
          </>
        )}
      </header>

      {!currentProject && <ul className="project-list">{workElements}</ul>}
      {currentProject && (
        <>
          <WorkDetail
            dataWorkDetail={props.dataWork}
            dataText={props.dataText}
            currentProject={currentProject}
            handleCloseProject={handleCloseProject}
            lang={props.lang}
          />
        </>
      )}
    </section>
  );
}
