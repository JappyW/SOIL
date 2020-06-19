import React, { Component } from "react";
import { RiLightbulbLine } from "react-icons/ri";
import { GiChemicalDrop } from "react-icons/gi";

class FertilizersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid fertilizers-main">
        <div className="row">
          {this.props.data.map((fertilizer) => {
            return (
              <div key={fertilizer.id} className="col-sm-3">
                <div className="card">
                  <div>
                    <img
                      class="card-img-top"
                      src={fertilizer.src}
                      alt={fertilizer.name}
                    />
                  </div>
                  <h2 className="card-title p-2 mb-0 text-center">
                    {fertilizer.name}
                  </h2>
                  <div className="card-body">
                    <p className="card-text text-center">
                      <GiChemicalDrop size="36px" className="mr-2" />
                      <span className="text-center"></span>
                      {fertilizer.ph + " pH"}
                    </p>
                    <p className="card-text text-center">
                      <a className="fert-link" href={fertilizer.tips}>
                        <RiLightbulbLine size="30px" />
                        Tips
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FertilizersList;
