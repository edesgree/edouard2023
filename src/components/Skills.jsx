import React from 'react';
export default function Skills(props) {
  const skillsElements = props.dataSkills.map((item) => {
    return (
      <li key={item.id} id={item.id} data-tooltip={item.name}>
        <img src={`${item.icon}`} alt={item.name} />
      </li>
    );
  });

  return (
    <section className="section">
      <h2 className="is-3 title">{props.dataText.skillsTitle[props.lang]}</h2>
      <ul className="skills-list">{skillsElements}</ul>
    </section>
  );
}
