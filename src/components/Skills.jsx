import React from 'react';
export default function Skills(props) {
  const skillsElements = props.data.map((item) => {
    return (
      <li key={item.id} id={item.id} data-tooltip={item.name}>
        <img
          src={`src/assets/icons/skills/icon-${item.slug}.svg`}
          alt={item.name}
        />
      </li>
    );
  });
  return (
    <section className="section">
      <h2 className="is-2 title">Skills</h2>
      <ul className="skills-list">{skillsElements}</ul>
    </section>
  );
}
