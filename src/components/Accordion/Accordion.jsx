import React, { Component } from "react";

const Accordion = props => {
  const { title, Component, data, id } = props;
  return (
    <div
      className="container accordion mb-3"
      id="accordionExample"
    >
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link w-100"
              type="button"
              data-toggle="collapse"
              data-target={`#${id}`}
              aria-expanded="false"
              aria-controls={id}
            >
              {title}
            </button>
          </h2>
        </div>
        <div
          id={id}
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
          <Component data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
