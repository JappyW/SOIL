import React, { Component } from "react";
import { TiThermometer } from "react-icons/ti";
import { GiChemicalDrop, GiFamilyTree } from "react-icons/gi";
import "./plantsList.scss";

class PlantsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid plants-main">
        {this.props.data.length == 1 ? (
          <div className="row d-flex justify-content-center">
            <div key={this.props.data[0].id} className="col-sm-6 mb-3">
              <div className="card">
                <img
                  class="card-img-top"
                  src={this.props.data[0].src}
                  alt={this.props.data[0].name}
                />
                <h2 className="card-title p-2 mb-0 text-center">
                  {this.props.data[0].name}
                </h2>
                <div className="card-body p-1">
                  <p className="card-text-this.props.data[0]s-fs30">
                    <TiThermometer className="mr-1" />
                    {this.props.data[0].bestTempMin +
                      " - " +
                      this.props.data[0].bestTempMax +
                      "°C"}
                  </p>
                  <p className="card-text-this.props.data[0]s-fs30">
                    <GiChemicalDrop className="mr-1" />
                    {this.props.data[0].bestPhMin +
                      " - " +
                      this.props.data[0].bestPhMax}
                  </p>
                  <p className="card-text-this.props.data[0]s-fs18">
                    <GiFamilyTree className="mr-1" size="30px" />
                    {this.props.data[0].family}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row d-flex justify-content-center">
            {this.props.data.map((plant) => {
              return (
                <div key={plant.id} className="col-sm-4 mb-3">
                  {console.log(plant)}
                  <div className="card">
                    <img
                      class="card-img-top"
                      src={plant.src}
                      alt={plant.name}
                    />
                    <h2 className="card-title p-2 mb-0 text-center">
                      {plant.name}
                    </h2>
                    <div className="card-body p-1">
                      <p className="card-text-plants-fs30">
                        <TiThermometer className="mr-1" />
                        {plant.bestTempMin + " - " + plant.bestTempMax + "°C"}
                      </p>
                      <p className="card-text-plants-fs30">
                        <GiChemicalDrop className="mr-1" />
                        {plant.bestPhMin + " - " + plant.bestPhMax}
                      </p>
                      <p className="card-text-plants-fs18">
                        <GiFamilyTree className="mr-1" size="30px" />
                        {plant.family}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default PlantsList;
