import React from 'react';
export default function LabDetail(props) {
  console.log('data', props.dataLabDetail);
  const labElement = props.dataLabDetail.filter(
    (item) => item.id === props.currentProject
  )[0];
  console.log(labElement);
  const techElements = labElement.tech.map((item, index) => {
    return (
      <span key={index} className="tag is-info">
        {item}
      </span>
    );
  });
  const screensElements = labElement.images.screens.map((item, index) => {
    return (
      <div key={index}>
        <img
          src={`src/assets/images/lab/${labElement.slug}/${item}`}
          alt={`${labElement.name} ${labElement.subtitle}`}
          className="img-responsive"
        />
      </div>
    );
  });
  return (
    <article>
      <div className="hero is-small is-primary head-project">
        <div className="hero-body">
          <p className="title">{labElement.name}</p>
          <p className="subtitle">{labElement.subtitle}</p>
          <span className="tag is-light is-info">2020</span>
        </div>
      </div>
      <div className="columns">
        <div className="columnsticky column is-4 content">
          <div dangerouslySetInnerHTML={{ __html: labElement.description }} />
          {labElement.mywork && (
            <div className="block">
              <h4 className="title  is-4">
                {props.dataText.workMyworkTitle[props.lang]}
              </h4>
              <p>{labElement.mywork}</p>
            </div>
          )}

          {techElements && (
            <div className="block">
              <h4 className="title  is-4">
                {props.dataText.workTechUsedTitle[props.lang]}
              </h4>
              <div className="tags">{techElements}</div>
            </div>
          )}
        </div>
        <div className=" column is-8">{screensElements}</div>
      </div>
    </article>
  );
}
