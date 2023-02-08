import React from 'react';

export default function Work(props) {
  const workElements = props.data.map((item) => {
    return (
      <li key={item.id} id={item.id}>
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
    <section>
      <h2 className="is-2 title">Work</h2>
      <ul className="project-list">{workElements}</ul>
    </section>
  );
}
