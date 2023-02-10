import React from 'react';
export default function WorkDetail(props) {
  console.log('data', props.dataWorkDetail);
  const workElement = props.dataWorkDetail.filter(
    (item) => item.id === props.currentProject
  )[0];
  console.log(workElement);
  const techElements = workElement.tech.map((item, index) => {
    return (
      <span key={index} className="tag is-info">
        {item}
      </span>
    );
  });
  const screensElements = workElement.images.screens.map((item, index) => {
    return (
      <div key={index}>
        <img
          src={`src/assets/images/work/${workElement.slug}/${item}`}
          alt={`${workElement.name} ${workElement.subtitle}`}
          className="img-responsive"
        />
      </div>
    );
  });
  return (
    <article>
      <div className="hero is-small is-primary head-project">
        <div className="hero-body">
          <p className="title">{workElement.name}</p>
          <p className="subtitle">{workElement.subtitle}</p>
          <span className="tag is-light is-info">2020</span>
        </div>
      </div>
      <div className="columns">
        <div className="columnsticky column is-4 content">
          <h4 className="title  is-4">Resume</h4>
          <div dangerouslySetInnerHTML={{ __html: workElement.description }} />
        </div>
        <div className=" column is-8">{screensElements.slice(0, 2)}</div>
      </div>
      <div className="columns">
        <div className="columnsticky column is-4">
          <div className="block">
            <h4 className="title  is-4">
              {props.dataText.workMyworkTitle[props.lang]}
            </h4>
            <p>{workElement.mywork}</p>
          </div>
          <div className="block">
            <h4 className="title  is-4">
              {props.dataText.workTechUsedTitle[props.lang]}
            </h4>
            <div className="tags">{techElements}</div>
          </div>
        </div>
        <div className=" column is-8">{screensElements.slice(2)}</div>
      </div>
    </article>
  );
}
